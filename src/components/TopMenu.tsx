import Link from "next/link";


export default function TopMenu() {
  return (
    <div className="h-[50px] bg-gray-900 fixed top-[0px] inset-x-[0px] z-30 flex flex-row items-center">
      <Link href="/booking">
        <div className="flex items-center h-full px-5 text-cyan-600 text-sm hover:underline">
          Login
        </div>
      </Link>
      <Link href="/booking">
        <div className="flex items-center h-full px-5 text-cyan-600 text-sm hover:underline">
          Booking
        </div>
      </Link>
    </div>
  );
}
