export interface Subscription {
  endpoint: string
  expirationTime: any
  keys: Keys
}

export interface Keys {
  p256dh: string
  auth: string
}
