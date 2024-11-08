import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import BookingCard from "@/components/BookingCard"

export default function viewBookingPage(){
    return (
        <div className="font-sans m-6 text-3xl font-bold">
            View Bookings
            <div className="flex justify-center">
                {/* <Suspense fallback={<p>Loading ... <LinearProgress/> </p>}>
                {restaurants && <RestaurantSelector restaurants={restaurants}/>}
                </Suspense> */}
                <BookingCard bookingDate={new Date()} restaurantName="" restaurantTel="" 
                            restaurantID="672dfaa2d7821c2e36b8212e" address="" 
                            numOfGuests={3}/>
            </div>
        </div>
    )
}