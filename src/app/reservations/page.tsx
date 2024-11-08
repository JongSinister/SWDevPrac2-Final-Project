'use client'
import dayjs from "dayjs";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import BookingDateAndTime from "@/components/BookingDateAndTime";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import getRestaurants from "@/libs/getRestaurants";
import {Select, MenuItem} from "@mui/material";
import createBookings from "@/libs/createReservation";

export default function reservations() {

  const [selectedOption, setSelectedOption] = useState('');
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [bookingTime, setBookingTime] = useState<Dayjs | null>(null);
  const [name, setName] = useState<string>('');
  const [numberOfPeople, setNumberOfPeople] = useState<string>("1");
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const makeReservation = async () => {
    if (!bookingDate || !bookingTime || !name || !phoneNumber || !numberOfPeople || !selectedOption) {
      alert("Please fill in all fields");
      return;
    }
    const formattedDate = dayjs(bookingDate).format('YYYY-MM-DD')
    const createdAt = dayjs().format('YYYY-MM-DD')
    const restaurantId = selectedOption;

    const response= await createBookings(restaurantId,formattedDate,createdAt,parseInt(numberOfPeople));
    if(response.success){
      console.log(response);
      alert("Reservation created successfully");
    }else{
      alert("Failed to create reservation");
    }
  }

  const [restaurantList, setRestaurantList] = useState<RestaurantItem[]>([]);

  //get value of restaurants
  const fetchRestaurants = async () => {
    const restaurants = await getRestaurants();
    setRestaurantList(restaurants.data);
  }
  
  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="m-5">
      <div className="text-5xl font-sans font-bold">
        Book Your Best Restaurant
      </div>
      <div className="mx-20 flex flex-col font-sans font-bold text-xl w-full my-5">

        User Name
        <TextField name="Name" label="Name" className="min-w-64 max-w-xl mb-10" variant="standard"
                            value={name} onChange={(e)=>{setName(e.target.value)}}/>

        Number of People
        <TextField name="NumberOfPeople" type="number" value={numberOfPeople} className="w-16 mb-10"
                  onChange={(e)=>{setNumberOfPeople(e.target.value)}} inputProps={{min:1,max:200,step:1}}
                  placeholder="1" variant="standard"/>

        Telephone Number
        <TextField name="PhoneNumber" label="Phone Number" className="min-w-64 max-w-xl mb-10" 
                  type="tel" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} 
                  placeholder="0123456789" variant="standard"/>
        
        Select Restaurant
        <Select variant="standard" id="hospital" label="hospital" className="mb-10 min-w-64 max-w-xl"
                        value={selectedOption} onChange={(e) => {setSelectedOption(e.target.value)}}>
          {/* <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
          <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
          <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem> */}
          {
            restaurantList.map((restaurant) => (
              <MenuItem value={restaurant.id}>{restaurant.name}</MenuItem>
            ))
          }
        </Select>

        <BookingDateAndTime onDateChange={(value:Dayjs) => { setBookingDate(value) }} 
                          onTimeChange={(value:Dayjs) => { setBookingTime(value) }} />
      </div>
      <button className="bg-gray-800 p-4 mx-20 text-xl font-bold font-sans text-cyan-600 rounded-xl hover:bg-gray-700"
              onClick={makeReservation}>
          Reserve
      </button>
    </div>
  );
}