'use client'
import dayjs from "dayjs";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import BookingDateAndTime from "@/components/BookingDateAndTime";
import { TextField } from "@mui/material";

export default function reservations() {

  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [bookingTime, setBookingTime] = useState<Dayjs | null>(null);
  const [name, setName] = useState<string>('');
  const [numberOfPeople, setNumberOfPeople] = useState<string>("1");
  const [phoneNumber, setPhoneNumber] = useState<string>('');

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
                  placeholder="000-000-0000" variant="standard"/>

        <BookingDateAndTime onDateChange={(value:Dayjs) => { setBookingDate(value) }} 
                          onTimeChange={(value:Dayjs) => { setBookingTime(value) }} />
      </div>
    </div>
  );
}