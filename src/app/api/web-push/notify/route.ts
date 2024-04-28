import { readFile } from "node:fs/promises";
import { sendNotification, setVapidDetails } from "web-push";
import { SUBSCRIPTIONS_FILE_PATH } from "../web-push.constants";
import { Subscription } from "@/app/api/web-push/register/subscription.type";


const send = async () => {
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

  const fileData = await readFile(SUBSCRIPTIONS_FILE_PATH, 'utf8');
  const subscriptions: Subscription[] = JSON.parse(fileData);
  const message = 'I born to work';
  const body = JSON.stringify({message}, null, 2);
  const res = await Promise.all(subscriptions.map((subscription) => {
    return sendNotification(subscription, body);
  }))
  return {message: res}
}


export async function GET() {
  setTimeout(() => {
    send()
  }, 10000)
  return Response.json({ok: true})
}