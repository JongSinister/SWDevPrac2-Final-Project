'use client'
import Image from "next/image"

export default function BookingCard({bookingDate,restaurantName,address,restaurantTel,numOfGuests}:
    {bookingDate:Date,restaurantName:string,address:string,restaurantTel:string,numOfGuests:Number}) {
    return(
        <div className="font-sans mx-3 bg-gray-200 text-xl max-w-3xl h-40 flex flex-row rounded-xl w-full hover:bg-gray-300 hover:shadow-xl">
            
        </div>
    )
}