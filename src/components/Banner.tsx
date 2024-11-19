"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import getRestaurants from "@/libs/getRestaurants";
import { unstable_noStore as noStore } from "next/cache";

interface RestaurantItem {
  id: string;
  picture: string;
}

export default function Banner({ isAdmin }: { isAdmin: boolean }) {
  noStore();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bannerCover, setBannerCover] = useState<RestaurantItem[]>([]);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurants = await getRestaurants();
        console.log("Fetched restaurants data:", restaurants.data);
        const images = restaurants.data.map((restaurant: RestaurantItem) => ({
          id: restaurant.id,
          picture: restaurant.picture,
        }));
        setBannerCover(images);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setIsLoading(false); // Update loading state
      }
    };

    fetchRestaurants();
  }, []);

  useEffect(() => {
    if (bannerCover.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % bannerCover.length
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [bannerCover]);

  const handleBannerClick = () => {
    const currentRestaurant = bannerCover[currentImageIndex];
    if (currentRestaurant?.id) {
      router.push(`/restaurant/${currentRestaurant.id}`);
    }
  };

  return (
    <div
      className="relative w-screen h-[80vh] overflow-hidden cursor-pointer"
      onClick={handleBannerClick}
    >
      {bannerCover.length > 0 ? (
        bannerCover.map((restaurant, index) => (
          <Image
            key={restaurant.id}
            src={restaurant.picture}
            alt={`Slide ${index + 1}`}
            width={1920}
            height={1080}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))
      ) : !isLoading ? (
        <Image
          key={0}
          src={"/img/tmpbackground.jpg"}
          alt="Temporary Background"
          width={1920}
          height={1080}
          className="absolute w-full h-full object-cover"
        />
      ) : null}

      {isAdmin && (
        <button
          className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent"
          onClick={(e) => {
            e.stopPropagation(); // Prevent parent div click event
            router.push("/admin");
          }}
        >
          Admin Restaurant Console
        </button>
      )}
    </div>
  );
}
