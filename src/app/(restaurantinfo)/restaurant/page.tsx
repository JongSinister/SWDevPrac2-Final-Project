import RestaurantCard from "@/components/RestaurantCard";
import getRestaurants from "@/libs/getRestaurants";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import RestaurantSelector from "@/components/RestaurantSelector";
import { unstable_noStore as noStore } from "next/cache";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getMe from "@/libs/getMe";

export default async function restaurants() {
  noStore();

  const session = await getServerSession(authOptions);
  console.log("session : " + session);
  let isAdmin = false;
  if (session) {
    isAdmin = (await getMe()).data.role === "admin";
  }

  return (
    <div className="font-sans m-6 text-3xl font-bold">
      Restaurants
      <div className="flex justify-center">
        <Suspense
          fallback={
            <p>
              Loading ... <LinearProgress />{" "}
            </p>
          }
        >
          {<RestaurantSelector isAdmin={isAdmin} />}
        </Suspense>
      </div>
    </div>
  );
}
