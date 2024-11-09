import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import ReservationCard from "./BookingCard";

export default async function ReservationsList({reservations}:{reservations:Promise<BookingJSON>}) {

    const bookingList = await reservations;
    const session = await getServerSession(authOptions);

    return (
        <div className="flex flex-col m-5 w-full justify-center">
            { 
                session ? (
                    bookingList.data.map((booking) => (
                    <ReservationCard
                        bookingID={booking._id}
                        bookingDate={new Date(booking.bookingDate)}
                        restaurantName={booking.restaurant.name}
                        address={booking.restaurant.address}
                        restaurantTel={booking.restaurant.tel}
                        numOfGuests={booking.numOfGuests}
                        restaurantID={booking.restaurant.id}
                    />
                    ))
                ) : (
                    <div className="text-center text-red-500 text-3xl">
                        Please login to view Reservations.
                    </div>
                )
            }
        </div>
    );

}