export default async function getRestaurants(id: string) {
  const response = await fetch(
    `https://restaurant-booking-project-backend.vercel.app/api/v1/restaurants/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch single restaurant");
  }
  return await response.json();
}
