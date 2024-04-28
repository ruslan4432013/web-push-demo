self.addEventListener("install", () => {
  console.log("service worker installed");
});

self.addEventListener("activate", () => {
  console.log("service worker activated");
});

self.addEventListener("push", (e) => {
  const body = e.data.text() || "Push message has no payload";
  console.log("Push message has payload", body);
  const options = {
    body,
    icon: "icon-128x128.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "Explore this new world",
        icon: "images/checkmark.png",
      },
      {
        action: "close",
        title: "I don't want any of this",
        icon: "images/xmark.png",
      },
    ],
  };
  e.waitUntil(
    self.registration.showNotification(
      "Notification via Server and Push API",
      options,
    ),
  );
});
