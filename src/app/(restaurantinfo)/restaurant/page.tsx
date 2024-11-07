import RestaurantCard from "@/components/RestaurantCard";
import getRestaurants from "@/libs/getRestaurants";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function restaurants(){
    
    const restaurants = getRestaurants();

    return(
        <div className="font-sans m-6 text-3xl font-bold">
            Restaurants
            {/* <Suspense fallback={<p>Loading ... <LinearProgress/> </p>}>
            {hospitals && <HospitalCatalog hospitalsJson={hospitals}/>}
            </Suspense> */}
            <RestaurantCard imgSrc="https://drive.google.com/uc?id=1gx8WSQ3kByzVs8eQs3o5DPqsWTSrzvLE" 
                            restaurantName="Mama Paradox" foodtype="Japanese"/>          
        </div>
    )

}