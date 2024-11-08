import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function TopMenu() {

  const session = await getServerSession(authOptions);

  return (
    <div className="h-[50px] bg-gray-900 fixed top-[0px] inset-x-[0px] z-30 flex flex-row items-center font-sans font-bold">

      <div className="h-full hover:bg-gray-700 rounded-lg m-3">
        <Link href="/">
          <div className="flex items-center h-full px-5 text-cyan-600 text-xl">
            Home
          </div>
        </Link>
      </div>

      <div className="h-full hover:bg-gray-700 rounded-lg m-3">
        <Link href="/restaurant">
          <div className="flex items-center h-full px-5 text-cyan-600 text-xl">
            Restaurants
          </div>
        </Link>
      </div>

      <div className="h-full hover:bg-gray-700 rounded-lg m-3">
        <Link href="/reservations">
          <div className="flex items-center h-full px-5 text-cyan-600 text-xl">
            Reserve Now
          </div>
        </Link>
      </div>

      <div className="h-full hover:bg-gray-700 rounded-lg m-3">
        <Link href="/view-reservations">
          <div className="flex items-center h-full px-5 text-cyan-600 text-xl">
            View Reservations
          </div>
        </Link>
      </div>

      <div className="h-full hover:bg-gray-700 rounded-lg m-3 ml-auto">
      {
        session?
        <Link href="/api/auth/signout" className="h-full">
          <div className="flex items-center h-full px-5 text-cyan-600 text-xl">
            Log Out
          </div>
        </Link>
        :
        <Link href="/api/auth/signin">
          <div className="flex items-center h-full px-5 text-cyan-600 text-xl">
            Log In
          </div>
        </Link>
      }
      </div>

      <div className="h-full hover:bg-gray-700 rounded-lg m-3">
        {
          session?
          null:
          <Link href="/register">
            <div className="flex items-center h-full px-5 text-cyan-600 text-xl">
              Register
            </div>
          </Link>
        }
      </div>

    </div>
  );
}
