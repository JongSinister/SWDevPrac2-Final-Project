'use client'
import Image from "next/image"
import Link from "next/link"

export default function ReservationCard({bookingDate,restaurantName,address,restaurantTel,numOfGuests,restaurantID}:
    {bookingDate:Date,restaurantName:string,address:string,restaurantTel:string,numOfGuests:Number,restaurantID:string}) {
    return(
        <div className="font-sans mx-3 bg-gray-200 text-xl max-w-3xl h-40 flex flex-row rounded-xl w-full hover:bg-gray-300 hover:shadow-xl mb-6">
            <Link href={`/restaurant/${restaurantID}`} className="w-full h-full">
                <div className="flex flex-row h-full py-6">
                    <div className="ml-10 flex flex-col w-2/3 h-full justify-between">
                        <div className="flex flex-row">
                            <Image src="/img/date.png" alt="" width={30} height={30} className="mr-6" />
                            Date : {bookingDate.toDateString()}
                        </div>
                        <div className="flex flex-row">
                            <Image src="/img/cutlery.png" alt="" width={30} height={30} className="mr-6" />
                            Restaurant : {restaurantName}
                        </div>
                        <div className="flex flex-row">
                            <Image src="/img/location-pin.png" alt="" width={30} height={30} className="mr-6" />
                            {address}
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 h-full justify-between">
                        <div className="my-3">
                        </div>
                        <div className="flex flex-row">
                            <Image src="/img/phone-call.png" alt="" width={30} height={30} className="mr-6" />
                            {restaurantTel}
                        </div>
                        <div className="flex flex-row">
                            <Image src="/img/guests.png" alt="" width={30} height={30} className="mr-6" />
                            {numOfGuests.toString()} Guest{numOfGuests>1 ? "s":""}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}