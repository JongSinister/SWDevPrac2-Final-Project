'use client'
import Image from "next/image"
import Link from "next/link"

export default function BookingCard({bookingDate,restaurantName,address,restaurantTel,numOfGuests,restaurantID}:
    {bookingDate:Date,restaurantName:string,address:string,restaurantTel:string,numOfGuests:Number,restaurantID:string}) {
    return(
        <div className="font-sans mx-3 bg-gray-200 text-xl max-w-3xl h-40 flex flex-row rounded-xl w-full hover:bg-gray-300 hover:shadow-xl">
            <Link href={`/restaurant/${restaurantID}`} className="w-full h-full">
                <div className="flex flex-row h-full p-6">
                    <div className="mx-10 flex flex-col w-1/2 h-full justify-between">
                        <div className="flex flex-row">
                            <Image src="/img/calender.png" alt="" width={30} height={30} className="mr-6" />
                            {bookingDate.toDateString()}
                        </div>
                        <div className="flex flex-row">
                            <Image src="/img/cutlery.png" alt="" width={30} height={30} className="mr-6" />
                            {restaurantName}
                        </div>
                        <div className="flex flex-row">
                            <Image src="/img/location-pin.png" alt="" width={30} height={30} className="mr-6" />
                            {address}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}