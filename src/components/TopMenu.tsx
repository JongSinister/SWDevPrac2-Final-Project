import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TopMenu() {

  const session = await getServerSession(authOptions);

  return (
    <div className="h-[50px] bg-gray-900 fixed top-[0px] inset-x-[0px] z-30 flex flex-row items-center">
      {
        session?
        <Link href="/api/auth/signin">
          <div className="flex items-center h-full px-5 text-cyan-600 text-sm hover:underline">
            Log Out
          </div>
        </Link>
        :
        <Link href="/api/auth/signin">
          <div className="flex items-center h-full px-5 text-cyan-600 text-sm hover:underline">
            Log In
          </div>
        </Link>
      }
      <Link href="/booking">
        <div className="flex items-center h-full px-5 text-cyan-600 text-sm hover:underline">
          Booking
        </div>
      </Link>
    </div>
  );
}
