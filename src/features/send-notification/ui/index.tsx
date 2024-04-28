'use client'
import { Button } from "@/shared/ui/button";


const handleClick = async () => {
  const res = await fetch('/api/web-push/notify');
  const data = await res.json()
  console.log(data)
}

export const SendNotification = () => {

  return (
    <Button onClick={handleClick}>Нажмите, чтоб отправить push уведомление через 10 секунд</Button>
  )
}