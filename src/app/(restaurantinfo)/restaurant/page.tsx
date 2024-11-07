'use client'

import getRestaurants from "@/libs/getRestaurants";

export default async function restaurants(){
    
    const restaurants = await getRestaurants();

    return(
        <div className="font-sans m-6">
            Restaurants           
        </div>
    )

}