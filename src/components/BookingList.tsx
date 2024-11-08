import BookingCard from "./BookingCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function BookingList({bookings}:{bookings:Promise<BookingJSON>}) {

    const bookingList = await bookings;
    const session = await getServerSession(authOptions);

    return (
        <div className="flex flex-col m-5 w-full justify-center">
            { 
                session ? (
                    bookingList.data.map((booking) => (
                    <BookingCard
                        bookingDate={new Date(booking.bookingDate)}
                        restaurantName={booking.restaurant.name}
                        address={booking.restaurant.address}
                        restaurantTel={booking.restaurant.tel}
                        numOfGuests={booking.numberOfGuests}
                        restaurantID={booking.restaurant.id}
                    />
                    ))
                ) : (
                    <div className="text-center text-red-500 text-3xl">
                        Please login to view bookings.
                    </div>
                )
            }
        </div>
    );

}