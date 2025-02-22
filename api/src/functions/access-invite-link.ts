import { redis } from '../redis/client'

interface AccessInviteLinksParams {
  subscriberId: string
}

export async function accessInviteLink({ subscriberId }: AccessInviteLinksParams){
  await redis.hincrby('referral:access-count', subscriberId, 1)
}