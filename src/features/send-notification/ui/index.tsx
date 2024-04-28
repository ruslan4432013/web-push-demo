'use client'
import { Button } from "@/shared/ui/button";
import { SubscriptionService } from "@/entities/subscription";


export const SendNotification = () => {
  const handleClick = async () => {
    const subscription = SubscriptionService.get()
    if(!subscription) {
      console.error('Subscription was not saved.');
      return
    }

    const res = await fetch('/api/web-push/notify', {
      method: 'POST',
      body: JSON.stringify(subscription)
    });
    const data = await res.json()
    console.log(data)
  }

  return (
    <Button onClick={handleClick}>Нажмите, чтоб отправить push уведомление через 5 секунд</Button>
  )
}