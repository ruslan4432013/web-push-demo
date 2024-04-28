import { SendNotification } from "@/features/send-notification";
import { RegisterWorker } from "@/features/register-worker";
import { RequestPush } from "@/features/request-push";


export default function Home() {
  return (
    <div className='flex flex-col gap-2 items-center justify-center w-screen h-screen p-4'>
      <SendNotification/>
      <RequestPush/>
      <RegisterWorker/>
    </div>
  );
}
