export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing OpenAI API key." }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o", // eller gpt-4.1-nano för billigare test
        messages: [
          { role: "system", content: "Du är en vänlig AI som hjälper användare att välja VPN-tjänst. Svara alltid tydligt, och föreslå en av våra rekommenderade VPN-tjänster om det är relevant. Bifoga alltid affiliatelänk om det passar." },
          { role: "user", content: prompt }
        ],
        max_tokens: 250,
        temperature: 0.7
      })
    });

    const data = await openaiRes.json();

    // Skydda mot tomma svar eller fel
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      return new Response(JSON.stringify({ error: "OpenAI gav inget svar." }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ answer: data.choices[0].message.content }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message || "Något gick fel" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
