import { openai } from "../ai/openai"
import { generateText } from "ai"
import { postgresTool } from "../ai/tools/postgres-tool"
import { redisTool } from "../ai/tools/redis-toll"

interface AnswerUserMessageParams {
  message: string
}

export async function answerUserMessage({ message }: AnswerUserMessageParams) {
  const answer = await generateText({
    model: openai,
    prompt: message,
    tools: {
      postgresTool,
      redisTool 
    },
    system: `
      J.A.R.V.I.S. você é uma I.A que é responsavél por ajudar a responder dúvidas das pessoas sobre o sistema DevStage.

      Responda somente o que o usuário pediu, sem nenhum texto adiconal.

      O retorno deve ser sempre em markdown (sem incluir \`\`\` no inicio ou no fim).
    `.trim(),
    maxSteps: 5,
  })
  
  return { response: answer.text }
}