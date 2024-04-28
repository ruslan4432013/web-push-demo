import { writeFile, readFile } from "node:fs/promises";
import { Subscription } from "@/app/api/web-push/register/subscription.type";
import { cleanSubscription } from "./clean-subscription";
import { SUBSCRIPTIONS_FILE_PATH } from "../web-push.constants";


export async function POST(request: Request) {
  const file = await readFile(SUBSCRIPTIONS_FILE_PATH)
  let res = JSON.parse(file.toString('utf-8'))

  if (!Array.isArray(res)) {
    res = []
  }

  const subscription = await request.json()
  res.push(subscription)
  const cleanedSubscriptions: Subscription[] = cleanSubscription(res)

  await writeFile(SUBSCRIPTIONS_FILE_PATH, JSON.stringify(cleanedSubscriptions));

  return Response.json(subscription)
}