import { getSession } from "next-auth/react";

export default async function createBookings(restaurant: RestaurantItem) {
  try {
    const session = await getSession();

    if (!session) {
      throw new Error("No session found");
    }

    console.log("Session:", session); // Debugging step to check session contents

    if (!session.user.token) {
      throw new Error("No authentication token found in session");
    }

    const response = await fetch(
      `https://restaurant-booking-project-backend.vercel.app/api/v1/restaurants`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.user.token}`,
        },
        body: JSON.stringify({
          name: restaurant.name,
          address: restaurant.address,
          foodtype: restaurant.foodtype,
          province: restaurant.province,
          postalcode: restaurant.postalcode,
          tel: restaurant.tel,
          picture: restaurant.picture,
        }),
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
