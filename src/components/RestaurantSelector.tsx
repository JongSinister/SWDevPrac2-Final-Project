import Link from "next/link";
import RestaurantCard from "./RestaurantCard";

export default async function RestaurantSelector({restaurants}:{restaurants:Promise<RestaurantJSON>}) {

    const restaurantList = await restaurants;
    
    return (
        <div className="flex flex-col m-5">
        {restaurantList.data.map((restaurant) => (
            <Link href={`/restaurant/${restaurant.id}`} key={restaurant.id} className="my-2">
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