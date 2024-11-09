interface RestaurantItem{
    _id: string,
    name: string,
    address: string,
    foodtype: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
}

interface RestaurantJSON {
    success: boolean,
    count: number,
    pagination: Object,
    data: RestaurantItem[]
}

interface restaurantItem{
    _id: string,
    name: string,
    address: string,
    tel: string,
    id: string
}

interface BookingItem{
    _id: string,
    bookingDate: string,
    numOfGuests: number,
    user: string,
    restaurant: restaurantItem,
    createdAt: string,
    id: string
}

interface BookingJSON {
    success: boolean,
    count: number,
    pagination: Object,
    data: BookingItem[]
}