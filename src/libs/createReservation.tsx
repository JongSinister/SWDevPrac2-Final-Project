import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function createBookings(restaurantId: string,bookingDate: string,createdAt: string,numOfGuests: number) {

    const session = await getServerSession(authOptions);

    const response = await fetch(
      `https://restaurant-booking-project-backend.vercel.app/api/v1/restaurants/${restaurantId}/bookings`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${session?.user.token}`,
        },
        body:JSON.stringify({
            bookingDate:bookingDate,
            createdAt:createdAt,
            numOfGuests:numOfGuests 
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch restaurants");
    }
    return await response.json();
  }