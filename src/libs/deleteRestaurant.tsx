import { getSession } from "next-auth/react";

export default async function deleteRestaurant(id: string) {
  try {
    const session = await getSession();
    if (!session || !session.user.token) {
      throw new Error("No authentication token found");
    }
    const response = await fetch(
      `https://restaurant-booking-project-backend.vercel.app/api/v1/restaurants/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session.user.token}`,
        },
      }
    );
    console.log(id);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
