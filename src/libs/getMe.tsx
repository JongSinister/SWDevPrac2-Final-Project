import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function getMe() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("No session found");
  }

  const response = await fetch(
    "https://restaurant-booking-project-backend.vercel.app/api/v1/auth/me",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.user.token}`,
      },
    }
  );
  if (!response.ok) {
    console.log(response);
    throw new Error("Failed to login");
  }
  return await response.json();
}
