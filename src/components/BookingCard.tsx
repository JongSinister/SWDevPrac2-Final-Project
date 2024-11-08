'use client'
import Image from "next/image"
import Link from "next/link"

export default function BookingCard({bookingDate,restaurantName,address,restaurantTel,numOfGuests,restaurantID}:
    {bookingDate:Date,restaurantName:string,address:string,restaurantTel:string,numOfGuests:Number,restaurantID:string}) {
    return(
        <div className="font-sans mx-3 bg-gray-200 text-xl max-w-3xl h-40 flex flex-row rounded-xl w-full hover:bg-gray-300 hover:shadow-xl">
            <Link href={`/restaurant/${restaurantID}`} className="w-full h-full">
                <div>
                    This is a Booking
                </div>
            </Link>
        </div>
    )
}