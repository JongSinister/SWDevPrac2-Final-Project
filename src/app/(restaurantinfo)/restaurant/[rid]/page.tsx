import getRestaurant from "@/libs/getRestaurant";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getMe from "@/libs/getMe";
import { unstable_noStore as noStore } from "next/cache";

export default async function restaurantDetailPage({
  params,
}: {
  params: { rid: string };
}) {
  noStore();
  const restaurant = await getRestaurant(params.rid);

  const session = await getServerSession(authOptions);
  console.log("session : " + session);
  let isAdmin = false;
  if (session) {
    isAdmin = (await getMe()).data.role === "admin";
  }

  return (
    <div className="mx-2 text-center font-sans p-5 content-center font-bold">
      <h1 className="text-5xl font-bold">{restaurant.data.name}</h1>
      <div className="flex flex-col my-10 items-center">
        <Image
          src={restaurant.data.picture}
          alt={restaurant.data.name}
          width={1000}
          height={300}
          className="w-full"
        />
        <div className="flex flex-row mt-7 my-3 items-center">
          <Image src="/img/cutlery.png" alt="foodtype" width={30} height={30} />
          <p className="mx-2 text-2xl">{restaurant.data.foodtype} Food</p>
        </div>
        <div className="flex flex-row my-3 items-center">
          <Image
            src="/img/location-pin.png"
            alt="address"
            width={30}
            height={30}
          />
          <p className="mx-2 text-2xl">
            {restaurant.data.address}, {restaurant.data.province},{" "}
            {restaurant.data.postalcode}
          </p>
        </div>
        <div className="flex flex-row my-3 items-center">
          <Image src="/img/phone-call.png" alt="tel" width={30} height={30} />
          <p className="mx-2 text-2xl">{restaurant.data.tel}</p>
        </div>
        <Link
          href={`/reservations?id=${params.rid}&restaurant=${restaurant.data.model}`}
        >
          <button className="block rounded-md bg-gray-900 hover:bg-gray-500 px-3 py-2 text-white">
            Make Reservation
          </button>
        </Link>
        {isAdmin ? (
          <Link href={`/restaurant/${params.rid}/edit`}>
            <button className="block rounded-md bg-sky-500 hover:bg-indigo-800 px-3 py-2 text-white mt-3">
              Edit Restaurant Info
            </button>
          </Link>
        ) : (
          null
        )}
      </div>
    </div>
  );
}
