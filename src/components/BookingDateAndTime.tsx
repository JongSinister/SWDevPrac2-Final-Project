'use client'
import { useState } from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers'

export default function BookingDateAndTime({onDateChange, onTimeChange}:{onDateChange:Function,onTimeChange:Function}) {

    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
    const [bookingTime, setBookingTime] = useState<Dayjs | null>(null);

    return(
        <div className="flex flex-col w-full my-6 mx-5 text-xl font-sans font-bold">
            Pick Your Booking Date and Time
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="my-3">
                    <DatePicker className='bg-white' value={bookingDate}
                        onChange={(value) => { 
                        setBookingDate(value);
                        onDateChange(value) 
                    }} />
                </div>
                <div className="my-3">
                    <TimePicker className='bg-white' value={bookingTime} ampm={false}
                        onChange={(value) => { 
                        setBookingTime(value);
                        onTimeChange(value) 
                    }} />
                </div>
            </LocalizationProvider>
        </div>
    )

}