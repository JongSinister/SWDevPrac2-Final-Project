  'use server'
  import { getServerSession } from "next-auth";
  import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
  import getBookings from "@/libs/getBookings";

  export default async function createBookings(restaurantId: string,bookingDate: string,createdAt: string,numOfGuests: number) {

      const session = await getServerSession(authOptions);
      if(session){
        const reserved=await getBookings();
        if (reserved.count >= 3) {
          return { success: false, message: "Reached maximum amount of reservations" };
        }
      }else{
        throw new Error("User is not authenticated");
      }
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