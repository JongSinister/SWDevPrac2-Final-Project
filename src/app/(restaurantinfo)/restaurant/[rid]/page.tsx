import getRestaurant from "@/libs/getRestaurant";

export default async function restaurantDetailPage({params}:{params:{rid:string}}){

    const restaurant = await getRestaurant(params.rid);

    return(
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.address}</p>
            <p>{restaurant.foodtype}</p>
            <p>{restaurant.province}</p>
            <p>{restaurant.postalcode}</p>
            <p>{restaurant.tel}</p>
            <img src={restaurant.picture} alt={restaurant.name}/>
        </div>
    )
}