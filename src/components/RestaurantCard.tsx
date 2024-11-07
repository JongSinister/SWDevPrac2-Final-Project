'use client'
import Image from "next/image"

export default function RestaurantCard({imgSrc,restaurantName,foodtype}:{imgSrc:string,restaurantName:string,foodtype:string}) {
    return(
        <div className="font-sans m-3 bg-gray-400 text-xl max-w-3xl h-40 flex flex-row">
            <div className="relative h-full w-1/3">
                <Image src={imgSrc} alt={restaurantName} fill={true} className='object-cover rounded-t-lg w-1/3'/>
            </div>
        </div>
    )
}