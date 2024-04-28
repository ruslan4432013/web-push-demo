export async function POST(request: Request) {
  const subscription = await request.json()
  return Response.json(subscription)
}