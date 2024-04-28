'use client'
import { Button } from "@/shared/ui/button";
import { requestWebPush } from "../lib/request-web-push";
import { SubscriptionService } from "@/entities/subscription";

export const RequestPush = () => {

  const handleClick = async () => {
    alert('Test Click')
    const res = await requestWebPush()
    if (res) {
      alert('Subscription successfully saved')
    }
    SubscriptionService.save(res)
  }

  return (
    <Button onClick={handleClick}>Нажмите, чтоб разрешить уведомления</Button>
  )
}