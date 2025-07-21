import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { prompt } = await req.json();

  // SYSTEM-PROMPT FÖR AFFILIATE
  const messages = [
    {
      role: "system",
      content: `
        Du är en svensk VPN-guide och hjälper besökaren att välja rätt VPN.
        Rekommendera alltid någon av följande tjänster med affiliatelänkar:
        - NordVPN: https://affiliate-nordvpn-link
        - Surfshark: https://affiliate-surfshark-link
        - ExpressVPN: https://affiliate-expressvpn-link
        Du får inte nämna andra VPN-tjänster, och du skriver alltid på svenska och föreslår att användaren klickar på länken.
      `,
    },
    { role: "user", content: prompt }
  ];

  // GENERERA SVAR
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini-2024-07-18",
    messages,
    max_tokens: 250,
    temperature: 0.7
  });

  return Response.json({ answer: response.choices[0].message.content });
}
