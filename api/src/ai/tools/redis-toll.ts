import { tool } from 'ai'
import z from "zod"
import { redis } from '../../redis/client'

export const redisTool = tool({
  description: `
    Realiza um comando no banco de dados Redis para buscar informações sobre o sistema de indicações como número de cliques no link, número de indicações (convites) realizados e ranking de indicações

    Só pode ser utilizada para buscar dados no banco de dados Redis, não pode executar nenhum comando de escrita.

    Você pode buscar dados de:

      - Um hash chamado "referral:access-count" que guarda o númeor de cliques/acessos no link de convite/indicação de cada usuário no formato { "SUBSCRIBER_ID: NUMERO_DE_CLIQUES" } onde o SUBSCRIBER_ID vem do banco de dados Postgres.
      - Um zset chamado "referral:ranking" que guarda o total de convites/indicações feitos por cada usuário onde o score é a quantidade de convites e o conteúdo é o SUBSCRIBER_ID que vem do banco de dados Postgres. 
  `.trim(),
  parameters: z.object({
    command: z.string().describe('O comando a ser executado no banco de dados Redis como GET, HGET, ZREVRANGE.'),
    args:
      z.array(z.string())
      .describe('Argumentos que vem logo após o comando do Redis.')
  }),
  execute: async ({ command, args }) => {
    console.log({ command, args })

    const result = await redis.call(command, args)

    return JSON.stringify(result)
  }
})