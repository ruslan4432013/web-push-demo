import { Subscription } from "./subscription.type";

export const cleanSubscription = (subscriptions: Subscription[]): Subscription[] => {
  const authSet = new Set<string>();
  const res: Subscription[] = []
  for (const subscription of subscriptions) {
    const {auth} = subscription.keys
    if (!authSet.has(auth)) {
      res.push(subscription)
      authSet.add(auth)
    }
  }
  return res
}