import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscriberInvitesClicks } from '../functions/get-subscriber-invites-clicks'

export const getSubscriberInvitesClicksRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    '/subscribers/:subscriberId/ranking/clicks',
    {
      schema: {
        summary: 'Get subscriber invite clicks count',
        tags: ['Referral'],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          200: z.object({ count: z.number() }),
        },
      },
    },
    async request => {
      const { subscriberId } = request.params

      const { count } = await getSubscriberInvitesClicks({
        subscriberId,
      })

      return { count }
    }
  )
}
