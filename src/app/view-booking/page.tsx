import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import BookingCard from "@/components/BookingCard"

export default function viewBookingPage(){
    return (
        <div className="font-sans m-6 text-3xl font-bold">
            View Bookings
            <div className="flex justify-center m-10">
                {/* <Suspense fallback={<p>Loading ... <LinearProgress/> </p>}>
                {restaurants && <RestaurantSelector restaurants={restaurants}/>}
                </Suspense> */}
                <BookingCard bookingDate={new Date()} restaurantName="MK" restaurantTel="1234567890" 
                            restaurantID="672dfaa2d7821c2e36b8212e" address="Siam Paragon" 
                            numOfGuests={3}/>
            </div>
        </div>
    )
}