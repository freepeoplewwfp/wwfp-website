import http from 'http';

export async function POST({ request }) {
  try {
    // Astro might not give us the body via request.text()
    // Try clone + text, or use the body stream
    let text = '';
    
    if (request.body) {
      const reader = request.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value);
      }
    } else {
      text = await request.text();
    }

    if (!text || text.length === 0) {
      return new Response(JSON.stringify({ 
        error: 'Empty body',
        hasBody: !!request.body,
        method: request.method
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const body = JSON.parse(text);
    const messages = body.messages || [];
    const lang = body.lang || 'de';

    const context = lang === 'en' ? WWFP_CONTEXT_EN : WWFP_CONTEXT_DE;

    const ollamaBody = JSON.stringify({
      model: 'qwen2.5:7b',
      messages: [
        { role: 'system', content: context },
        ...messages
      ],
      stream: false,
      options: {
        temperature: 0.7,
        num_predict: 500
      }
    });

    return new Promise((resolve) => {
      const req = http.request({
        hostname: '127.0.0.1',
        port: 11434,
        path: '/api/chat',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            resolve(new Response(JSON.stringify({ reply: parsed.message.content }), {
              headers: { 'Content-Type': 'application/json' }
            }));
          } catch (e) {
            resolve(new Response(JSON.stringify({ 
              error: 'Ollama parse error: ' + e.message,
              raw: data.substring(0, 500)
            }), {
              status: 500,
              headers: { 'Content-Type': 'application/json' }
            }));
          }
        });
      });

      req.on('error', (e) => {
        resolve(new Response(JSON.stringify({ error: 'Request failed: ' + e.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }));
      });

      req.write(ollamaBody);
      req.end();
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error: ' + String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

const WWFP_CONTEXT_DE = `Du bist der WWFP-Assistant für wwfp.global. WWFP ist ein gemeinnütziger Verein aus Dornbirn, Österreich. Mitgliedschaft per Einladung. Kontakt: chris@karg.design. Antworte freundlich und kurz auf Deutsch.`;

const WWFP_CONTEXT_EN = `You are the WWFP Assistant for wwfp.global. WWFP is a non-profit in Dornbirn, Austria. Membership by invitation. Contact: chris@karg.design. Answer friendly and short in English.`;