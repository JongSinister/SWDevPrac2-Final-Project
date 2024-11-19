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
import { useRouter } from "next/navigation";
import editReservation from "@/libs/editReservation";
import { unstable_noStore as noStore } from "next/cache";
import deleteReservation from "@/libs/deleteReservation";

export default function reservations({params}:{params:{reserveID:string}}) {
  noStore();

  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [bookingTime, setBookingTime] = useState<Dayjs | null>(null);
  const [name, setName] = useState<string>('');
  const [numberOfPeople, setNumberOfPeople] = useState<string>("1");
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const router = useRouter();

  const editBooking = async () => {
    if (!bookingDate || !bookingTime || !name || !phoneNumber || !numberOfPeople) {
      alert("Please fill in all fields.");
      return;
    }

    if(parseInt(numberOfPeople)<1){
      alert("Number of People must be at least 1.");
      return;
    }

    if (!bookingDate.isAfter(dayjs(), 'day')){
      alert("You can only reserve the restaurant for tomorrow or later.");
      return;
    }

    const formattedDate = dayjs(bookingDate).format('YYYY-MM-DD')
    const createdAt = dayjs().format('YYYY-MM-DD')

    const response= await editReservation(params.reserveID,formattedDate,createdAt,parseInt(numberOfPeople));
    if(response.success){
      console.log(response);
      alert("Reservation edited successfully");
      router.push("/view-reservations");
      router.refresh();
    }else{
      alert("Failed to create reservation");
    }
  }

  const deleteBooking = async () => {
    const response= await deleteReservation(params.reserveID);
    if(response.success){
      console.log(response);
      alert("Reservation deleted successfully");
      router.push("/view-reservations");
      router.refresh();
    }else{
      alert("Failed to delete reservation");
    }
  }

  return (
    <div className="m-5">
      <div className="text-5xl font-sans font-bold">
        Edit Your Reservation
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
        

        <BookingDateAndTime onDateChange={(value:Dayjs) => { setBookingDate(value) }} 
                          onTimeChange={(value:Dayjs) => { setBookingTime(value) }} />
      </div>
      <button className="bg-gray-800 p-4 mx-20 text-xl font-bold font-sans text-cyan-600 rounded-xl hover:bg-gray-700"
              onClick={editBooking}>
          Edit Reservation
      </button>

      <button className="bg-red-600 p-4 mx-20 text-xl font-bold font-sans text-white rounded-xl hover:bg-red-800"
              onClick={deleteBooking}>
          Delete Reservation
      </button>

    </div>
  );
}