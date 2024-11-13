import UpdateRestaurantBoard from "@/components/UpdateRestaurantBoard";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getMe from "@/libs/getMe";

export default async function EditRestaurantPage() {
  const session = await getServerSession(authOptions);
  console.log("session : " + session);
  let isAdmin = false;
  if (session) {
    isAdmin = (await getMe()).data.role === "admin";
  }

  return (
    <div className="ml-2">
      {isAdmin ? (
        <>
          <UpdateRestaurantBoard />
        </>
      ) : (
        <div>You don't have permission to enter This Route</div>
      )}
    </div>
  );
}
