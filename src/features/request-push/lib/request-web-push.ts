"use client";

import { urlB64ToUint8Array } from "@/shared/lib/url-b64-to-unit-8-array";

export const requestWebPush = async () => {
  const result = await Notification.requestPermission();
  if (result === "denied") {
    console.error("The user explicitly denied the permission request.");
    return;
  }
  if (result === "granted") {
    console.info("The user accepted the permission request.");
  }
  const vapid = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  if (!vapid) {
    alert('No VAPID ID found.');
    return
  }

  const registration = await navigator.serviceWorker.getRegistration();
  if (!registration) {
    alert('No registration found.');
    return;
  }
  const subscribed = await registration.pushManager.getSubscription();

  if (subscribed) {
    console.info('User is already subscribed.');
  }

  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlB64ToUint8Array(vapid),
  });

  const res = await fetch("/api/web-push/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(subscription),
  });
  const data = await res.json()
  return data
};
