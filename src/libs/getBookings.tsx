import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function getBookings() {
    
    const session = await getServerSession(authOptions);

    const response = await fetch(
      "https://restaurant-booking-project-backend.vercel.app/api/v1/bookings",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${session?.user.token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch restaurants");
    }
    return await response.json();
  }