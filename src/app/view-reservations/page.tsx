import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import BookingCard from "@/components/BookingCard"
import getBookings from "@/libs/getBookings"
import { getServerSession } from "next-auth"
import ReservationsList from "@/components/BookingList"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"

export default async function viewReservationsPage(){

    const session = await getServerSession(authOptions);
    let bookings = null;
    if(session){
        bookings=await getBookings()
    }

    return (
        <div className="font-sans m-6 text-3xl font-bold">
            {
                session ? (
                    <div>
                        <div className="font-sans m-6 text-4xl font-bold">
                            View Reservations
                        </div>
                        <div className="flex justify-center m-10">
                            <Suspense fallback={<p>Loading ... <LinearProgress/> </p>}>
                            {bookings && <ReservationsList reservations={bookings}/>}
                            </Suspense>
                        </div>
                    </div>
                ):(
                    <div className="font-sans m-6 text-3xl font-bold">
                        Please login to view reservations.
                    </div>
                )
            }
        </div>
    )
}