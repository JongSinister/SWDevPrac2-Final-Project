import getRestaurant from "@/libs/getRestaurant";
import Image from "next/image";

export default async function restaurantDetailPage({params}:{params:{rid:string}}){

    const restaurant = await getRestaurant(params.rid);

    return(
        <div className="mx-2 text-center font-sans p-5">
            <h1 className="text-5xl font-bold">{restaurant.data.name}</h1>
            <div className="flex flex-row my-10">
                <Image src={restaurant.data.picture} alt={restaurant.data.name} width={1000} height={300} />
            </div>
        </div>
    )
}