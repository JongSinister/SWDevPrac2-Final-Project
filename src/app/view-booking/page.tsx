import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import BookingCard from "@/components/BookingCard"
import getBookings from "@/libs/getBookings"
import BookingList from "@/components/BookingList"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"

export default async function viewBookingPage(){

    const bookings=await getBookings()
    const session = await getServerSession(authOptions);

    return (
        <div className="font-sans m-6 text-3xl font-bold">
            {
                session ? (
                    <div>
                        <div className="font-sans m-6 text-3xl font-bold">
                            View Bookings
                        </div>
                        <div className="flex justify-center m-10">
                            <Suspense fallback={<p>Loading ... <LinearProgress/> </p>}>
                            {bookings && <BookingList bookings={bookings}/>}
                            </Suspense>
                        </div>
                    </div>
                ):(
                    <div className="font-sans m-6 text-3xl font-bold">
                        Please login to view bookings.
                    </div>
                )
            }
        </div>
    )
}