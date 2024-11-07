import Link from "next/link";
import RestaurantCard from "./RestaurantCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function RestaurantSelector({restaurants}:{restaurants:Promise<RestaurantJSON>}) {

    const restaurantList = await restaurants;
    const session = await getServerSession(authOptions);
    console.log("session : "+ session);
    let isAdmin = false;
    if(session){
        const getMe = async () => {
            const response = await fetch("https://restaurant-booking-project-backend.vercel.app/api/v1/auth/me",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${session.user.token}`,
                },
            })
            if(!response.ok){
                console.log(response)
                throw new Error("Failed to login")
            }
            return await response.json()
        }
        isAdmin = (await getMe()).data.role === "admin";
    }
    
    return (
        <div className="flex flex-col m-5 w-full justify-center">
        {restaurantList.data.map((restaurant) => (
            <Link href={`/restaurant/${restaurant.id}`} key={restaurant.id} className="my-2 flex justify-center w-full">
                <RestaurantCard
                id={restaurant.id}
                imgSrc={restaurant.picture}
                restaurantName={restaurant.name}
                foodtype={restaurant.foodtype}
                isAdmin={isAdmin}
                />
            </Link>
        ))}
        </div>
    );
}