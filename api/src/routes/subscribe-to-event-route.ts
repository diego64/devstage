import { z } from 'zod'
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/subscription',
    {
      schema: {
        summary: 'Subscribe someone to the event',
        tags: ['Subscription'],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            name: z.string(),
            email: z.string()
          })
        }
      },
    },
    async (request, reply) => {
      const { name, email } = request.body

      return reply.status(201).send({
        name,
        email
      })
    }
  )
}
