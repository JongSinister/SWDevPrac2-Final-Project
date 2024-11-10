import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";

type CartState = {
    carItems: ReservationItem[]
}

const initialState: CartState = {
    carItems: []
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addReservation: (state, action:PayloadAction<ReservationItem>) => {
            state.carItems.push(action.payload)
        },
        //filter only the items that are not equal to the action.payload
        removeReservation: (state, action:PayloadAction<ReservationItem>) => {
            const remainItems=state.carItems.filter(obj=>{
                return (obj.carModel!==action.payload.carModel) || (obj.pickUpDate!==action.payload.pickUpDate) || (obj.returnDate!==action.payload.returnDate)
            })
            state.carItems = remainItems
        }
    }
})

export const { addReservation, removeReservation } = cartSlice.actions
export default cartSlice.reducer