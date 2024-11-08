import BookingCard from "./BookingCard";

export default async function BookingList({bookings}:{bookings:Promise<BookingJSON>}) {

    const bookingList = await bookings;

    return (
        <div className="flex flex-col m-5 w-full justify-center">
        {bookingList.data.map((booking) => (
            <BookingCard
            bookingDate={new Date(booking.bookingDate)}
            restaurantName={booking.restaurant.name}
            address={booking.restaurant.address}
            restaurantTel={booking.restaurant.tel}
            numOfGuests={booking.numberOfGuests}
            restaurantID={booking.restaurant.id}
            />
        ))}
        </div>
    );

}