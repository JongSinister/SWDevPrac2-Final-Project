'use client'
import Image from "next/image"

export default function RestaurantCard({imgSrc,restaurantName,foodtype}:{imgSrc:string,restaurantName:string,foodtype:string}) {
    return(
        <div className="font-sans m-3 bg-gray-400 text-xl max-w-3xl h-40">
            <div className="flex flex-row">
                <Image src={imgSrc} alt={restaurantName} className="w-1/3"/>
            </div>
        </div>
    )
}