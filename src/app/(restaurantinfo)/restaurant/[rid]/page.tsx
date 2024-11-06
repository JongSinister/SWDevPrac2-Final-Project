import getRestaurant from "@/libs/getRestaurant";
import Image from "next/image";

export default async function restaurantDetailPage({params}:{params:{rid:string}}){

    const restaurant = await getRestaurant(params.rid);

    return(
        <div className="mx-2 text-center font-sans p-5 content-center font-bold">
            <h1 className="text-5xl font-bold">{restaurant.data.name}</h1>
            <div className="flex flex-col my-10 items-center">
                <Image src={restaurant.data.picture} alt={restaurant.data.name} width={1000} height={300}
                    className="content-center" />
                <div className="flex flex-row mt-7 items-center">
                    <Image src="/img/cutlery.png" alt="foodtype" width={30} height={30} />
                    <p className="mx-2 text-2xl">{restaurant.data.foodtype} Food</p>
                </div>
                <div className="flex flex-row my-3 items-center">
                    <Image src="/img/location-pin.png" alt="address" width={30} height={30} />
                    <p className="mx-2 text-2xl">{restaurant.data.address}, {restaurant.data.province}, {restaurant.data.postalcode}</p>
                </div>
                <div className="flex flex-row my-3 items-center">
                    <Image src="/img/phone-call.png" alt="tel" width={30} height={30} />
                    <p className="mx-2 text-2xl">{restaurant.data.tel}</p>
                </div>
            </div>
        </div>
    )
}