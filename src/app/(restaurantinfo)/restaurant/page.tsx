import RestaurantCard from "@/components/RestaurantCard";
import getRestaurants from "@/libs/getRestaurants";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import RestaurantSelector from "@/components/RestaurantSelector";
import { unstable_noStore as noStore } from "next/cache";

export default function restaurants(){
    noStore();
    const restaurants = getRestaurants();

    return(
        <div className="font-sans m-6 text-3xl font-bold">
            Restaurants
            <div className="flex justify-center">
                <Suspense fallback={<p>Loading ... <LinearProgress/> </p>}>
                {restaurants && <RestaurantSelector restaurants={restaurants}/>}
                </Suspense>
            </div>
        </div>
    )

}