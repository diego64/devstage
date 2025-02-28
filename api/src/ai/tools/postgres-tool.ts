import { tool } from 'ai'
import z from "zod"
import { pg } from "../../drizzle/client"

export const postgresTool = tool({
  description: `
    Realiza uma query no banco de dados Postgres para buscar informações sobre as tabelas do banco de dados.

    Só pode realizar operações de buas (SELECT), não é permitido a geração de qualquer operação de escrita.

    Tables:

    """
      CREATE TABLE subscriptions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        invited_by_subscriber_id UUID,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      Todas as operações devem retornar um máximo de 50 items.
    """
  `.trim(),
  parameters: z.object({
    query: z.string().describe('A query do PostgreSQL para ser executada.'),
    params: z.array(z.string()).describe('Parâmetros da query a ser executada.')
  }),
  execute: async ({ query, params }) => {
    console.log({ query, params })

    const result = await pg.unsafe(query, params)

    return JSON.stringify(result)
  }
})