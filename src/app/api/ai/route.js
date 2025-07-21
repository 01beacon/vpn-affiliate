export async function POST(req) {
  try {
    const { prompt } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return Response.json({ error: "OPENAI_API_KEY saknas" }, { status: 500 });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o",   // byt till "gpt-4o", "gpt-3.5-turbo" eller den modell du säkert har tillgång till!
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200,
        temperature: 0.7
      })
    });

    const data = await response.json();

    // Logga hela svaret för debug
    console.log("OpenAI-respons:", data);

    // Returnera HELA svaret för att felsöka
    return Response.json(data);

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
