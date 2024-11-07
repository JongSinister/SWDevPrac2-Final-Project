import RestaurantCard from "@/components/RestaurantCard";
import getRestaurants from "@/libs/getRestaurants";

export default function restaurants(){
    
    const restaurants = getRestaurants();

    return(
        <div className="font-sans m-6 text-3xl font-bold">
            Restaurants
            <RestaurantCard imgSrc="https://drive.google.com/uc?id=1gx8WSQ3kByzVs8eQs3o5DPqsWTSrzvLE" 
                            restaurantName="Mama Paradox" foodtype="Japanese"/>          
        </div>
    )

}