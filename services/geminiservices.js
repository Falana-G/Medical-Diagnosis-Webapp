const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function analyzePatient(patientData) {

    const prompt = `
You are a medical triage assistant.

IMPORTANT:
- Do not provide a definitive diagnosis.
- Provide likely conditions.
- Mention confidence as Low, Medium or High.
- Suggest specialist.
- Mention red flag symptoms.
- Return ONLY valid JSON.

Patient Information:
${JSON.stringify(patientData)}

Return format:

{
  "possibleConditions":[
    {
      "name":"",
      "confidence":"",
      "reason":""
    }
  ],
  "urgency":"",
  "specialist":"",
  "redFlags":[]
}
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });

    const cleaned = response.text
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();

    return JSON.parse(cleaned);
}

module.exports = {
    analyzePatient
};