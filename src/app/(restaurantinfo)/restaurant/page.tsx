import RestaurantCard from "@/components/RestaurantCard";
import getRestaurants from "@/libs/getRestaurants";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import RestaurantSelector from "@/components/RestaurantSelector";

export default function restaurants(){
    
    const restaurants = getRestaurants();

    return(
        <div className="font-sans m-6 text-3xl font-bold">
            Restaurants
            <Suspense fallback={<p>Loading ... <LinearProgress/> </p>}>
            {restaurants && <RestaurantSelector restaurants={restaurants}/>}
            </Suspense>
        </div>
    )

}