export default async function getRestaurant(id: string) {
  const response = await fetch(
    `https://restaurant-booking-project-backend.vercel.app/api/v1/restaurants/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache", // Prevent caching
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch single restaurant");
  }
  return await response.json();
}
