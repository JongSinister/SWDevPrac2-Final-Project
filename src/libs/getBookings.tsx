export default async function getBookings() {
    const response = await fetch(
      "https://restaurant-booking-project-backend.vercel.app/api/v1/bookings"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch restaurants");
    }
    return await response.json();
  }