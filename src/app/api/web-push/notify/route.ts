import { sendNotification, setVapidDetails } from "web-push";
import { Subscription } from "@/entities/subscription/lib/subscription.type";


const sleep = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const send = async (subscription: Subscription) => {
  const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;

  const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY;
  if (!VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY) {
    return {
      message: "You must specify a valid VAPID key.",
    }
  }
  setVapidDetails(
    'mailto:test@test.test',
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY,
  );

  const message = 'I born to work';
  const body = JSON.stringify({message}, null, 2);
  const res = await sendNotification(subscription, body)
  return {message: res}
}


export async function POST(request: Request) {
  const subscription: Subscription = await request.json()
  await sleep(5000)
  const res = await send(subscription)
  return Response.json({result: res})
}