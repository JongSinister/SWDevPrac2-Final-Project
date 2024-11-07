export default async function getRestaurants() {
  const response = await fetch(
    "https://restaurant-booking-project-backend.vercel.app/api/v1/restaurants",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache", // Prevent caching
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch restaurants");
  }
  return await response.json();
}
