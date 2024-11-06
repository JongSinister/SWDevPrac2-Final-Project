'use client'
import dayjs from "dayjs";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import BookingDateAndTime from "@/components/BookingDateAndTime";

export default function bookings() {

  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [bookingTime, setBookingTime] = useState<Dayjs | null>(null);

  return (
    <div className="m-5">
      <div className="text-5xl font-sans font-bold">
        Book Your Best Restaurant
      </div>
      <div className="mx-20 flex flex-col font-sans font-bold text-xl w-full">
        <BookingDateAndTime onDateChange={(value:Dayjs) => { setBookingDate(value) }} 
                          onTimeChange={(value:Dayjs) => { setBookingTime(value) }} />
      </div>
    </div>
  );
}