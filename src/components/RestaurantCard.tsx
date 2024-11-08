"use client";
import Image from "next/image";
import deleteRestaurant from "@/libs/deleteRestaurant";
import { unstable_noStore as noStore } from "next/cache";

export default function RestaurantCard({
  id,
  imgSrc,
  restaurantName,
  foodtype,
  isAdmin,
  onDelete,
}: {
  id: string;
  imgSrc: string;
  restaurantName: string;
  foodtype: string;
  isAdmin: boolean;
  onDelete: (restaurantId: string) => void;
}) {
  const handleDelete = async () => {
    await deleteRestaurant(id);
    onDelete(id);
  };

  return (
    <div className="font-sans mx-3 bg-gray-200 text-xl max-w-3xl h-40 flex flex-row rounded-xl w-full hover:bg-gray-300 hover:shadow-xl">
      <div className="relative h-full w-1/3">
        <Image
          src={imgSrc}
          alt={restaurantName}
          fill={true}
          className="object-cover rounded-xl w-1/3"
        />
      </div>
      <div className="flex flex-col m-5 ">
        <div className="font-bold text-3xl m-2">{restaurantName}</div>
        <div className="font-light text-lg m-2">{foodtype} Food</div>
        {isAdmin ? (
          <button
            className="font-normal w-20 text-lg m-2 text-white bg-red-500 rounded-md hover:bg-red-700"
            onClick={(e) => {
              handleDelete();
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            Delete
          </button>
        ) : (
          <div className="font-light text-lg m-2">Not Admin</div>
        )}
      </div>
    </div>
  );
}
