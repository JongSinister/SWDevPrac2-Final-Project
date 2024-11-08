import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import BookingCard from "@/components/BookingCard"
import getBookings from "@/libs/getBookings"
import BookingList from "@/components/BookingList"

export default async function viewBookingPage(){

    const bookings=await getBookings()

    return (
        <div className="font-sans m-6 text-3xl font-bold">
            View Bookings
            <div className="flex justify-center m-10">
                <Suspense fallback={<p>Loading ... <LinearProgress/> </p>}>
                {bookings && <BookingList bookings={bookings}/>}
                </Suspense>
            </div>
        </div>
    )
}