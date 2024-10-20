import Image from "next/image";
import getRestaurants from "@/libs/getRestaurants";

export default async function Banner() {
  const restaurants = await getRestaurants();
  const restaurantsData = restaurants.data;
  console.log(restaurants.count);
  console.log(restaurantsData);
  return (
    <div className="block p-1 m-0 w-screen h-[80vh] relative">
      <Image
        src={restaurantsData[0].picture}
        alt={restaurantsData[0].name}
        fill={true}
        priority
        style={{ objectFit: "cover" }}
      />
      {/* <Image
        src={restaurantsData[1].picture}
        alt={restaurantsData[1].name}
        fill={true}
        priority
        style={{ objectFit: "cover" }}
      /> */}
    </div>
  );
}
