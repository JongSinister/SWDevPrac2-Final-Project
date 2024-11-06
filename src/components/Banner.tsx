import Image from "next/image";
import getRestaurants from "@/libs/getRestaurants";
import Link from "next/link";

export default async function Banner() {
  const restaurants = await getRestaurants();
  const restaurantsData = restaurants.data;
  console.log(restaurants.count);
  console.log(restaurantsData);
  return (
    <div className="block p-1 m-0 w-screen h-screen relative">
      
      <div className="flex flex-col h-full">
      {
        restaurantsData.map((restaurant:RestaurantItem) => (
          <Link href={`/restaurant/${restaurant.id}`} key={restaurant.id}
            className="aspect-[5/2]">
            <div className='w-full h-[100%] relative rounded-t-lg'>
            <Image
              className="h-[100%]"
              key={restaurant.id}
              src={restaurant.picture}
              alt={restaurant.name}
              fill={true}
              priority
              style={{ objectFit: "cover" }}
            />
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
