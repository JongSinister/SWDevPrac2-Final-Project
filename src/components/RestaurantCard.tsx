'use client'
import Image from "next/image"

export default function RestaurantCard({imgSrc,restaurantName,foodtype}:{imgSrc:string,restaurantName:string,foodtype:string}) {
    return(
        <div className="font-sans m-3 bg-gray-400 text-xl max-w-3xl miin-w-full h-40">
            RestaurantCard
            <Image src="/img/restaurant.jpg" alt="restaurant" width={1000} height={300}/>
        </div>
    )
}