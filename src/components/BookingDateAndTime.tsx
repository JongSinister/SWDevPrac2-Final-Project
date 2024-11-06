'use client'
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function BookingDateAndTime({onDateChange, onTimeChange}:{onDateChange:Function,onTimeChange:Function}) {

    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
    const [bookingTime, setBookingTime] = useState<string | null>(null);

    return(
        <div className="flex flex-col w-full">
            
        </div>
    )

}