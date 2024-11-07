import Link from "next/link";
import RestaurantCard from "./RestaurantCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function RestaurantSelector({restaurants}:{restaurants:Promise<RestaurantJSON>}) {

    const restaurantList = await restaurants;
    
    return (
        <div className="flex flex-col m-5 w-full justify-center">
        {restaurantList.data.map((restaurant) => (
            <Link href={`/restaurant/${restaurant.id}`} key={restaurant.id} className="my-2 flex justify-center w-full">
                <RestaurantCard
                imgSrc={restaurant.picture}
                restaurantName={restaurant.name}
                foodtype={restaurant.foodtype}
                />
            </Link>
        ))}
        </div>
    );
}