import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

console.log(
    "API KEY EXISTS:",
    !!process.env.ANTHROPIC_API_KEY
  );

export async function POST(req: Request) {
  try {
    const transaction = await req.json();

    const message = await anthropic.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: `
You are a senior payments reliability analyst.

Analyze the failed payment transaction below.

Transaction:
${JSON.stringify(transaction, null, 2)}

Return ONLY a valid JSON object.

Do not include:
- markdown
- explanations
- notes
- reasoning
- introductory text

Output must start with {
and end with }

Example:

{
  "rootCause": "string",
  "confidence": "High",
  "recommendedAction": "string",
  "customerCommunication": "string",
  "humanEscalationRequired": false
}
`,
        },
      ],
    });

    const text =
      message.content[0].type === "text"
        ? message.content[0].text
        : "";

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

      console.log("CLAUDE RAW:", cleaned);

    const result = JSON.parse(cleaned);

    return Response.json(result);
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Investigation failed",
      },
      {
        status: 500,
      }
    );
  }
}