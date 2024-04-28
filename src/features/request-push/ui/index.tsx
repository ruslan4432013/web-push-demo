'use client'
import { Button } from "@/shared/ui/button";
import { requestWebPush } from "../lib/request-web-push";

export const RequestPush = () => {
  return (
    <Button onClick={requestWebPush}>Нажмите, чтоб разрешить уведомления</Button>
  )
}