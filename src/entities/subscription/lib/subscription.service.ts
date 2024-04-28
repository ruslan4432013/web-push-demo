import { Subscription } from "./subscription.type";
import { SUBSCRIPTION_KEY } from "@/entities/subscription/lib/subscription.constants";


export const SubscriptionService = {
  save(subscription: Subscription) {
    if (typeof window === "undefined") {
      return
    }

    localStorage.setItem(SUBSCRIPTION_KEY, JSON.stringify(subscription));
  },
  get(): null | Subscription {
    if (typeof window === "undefined") {
      return null
    }

    const item = localStorage.getItem(SUBSCRIPTION_KEY)
    if (!item) {
      console.log('Subscription in storage not found')
      return null
    }

    return JSON.parse(item)
  }
}