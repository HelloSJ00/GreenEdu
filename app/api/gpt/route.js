// import { OpenAI } from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(request) {
//   try {
//     const { incorrectAnswers } = await request.json();

//     if (!incorrectAnswers || !Array.isArray(incorrectAnswers)) {
//       return new Response(JSON.stringify({ message: "Invalid input" }), {
//         status: 400,
//       });
//     }

//     const response = await openai.completions.create({
//       model: "gpt-3.5-turbo",
//       prompt: `학생이 틀린 답변들: ${JSON.stringify(
//         incorrectAnswers
//       )}. 이 학생들이 틀린 답변들을 잘 구분하려면 평소에 어떻게 해야 하는지 100자 내외로 대답해줄래?`,
//       max_tokens: 100,
//     });

//     const suggestions = response.choices[0].text.trim();

//     return new Response(JSON.stringify({ suggestions }), { status: 200 });
//   } catch (error) {
//     console.error("Error from OpenAI API:", error);
//     return new Response(
//       JSON.stringify({
//         message: "Internal Server Error",
//         error: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// }
