import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
    carItems: BookingItem[]
}

const initialState: CartState = {
    carItems: []
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addReservation: (state, action:PayloadAction<BookingItem>) => {
            state.carItems.push(action.payload)
        },
        //filter only the items that are not equal to the action.payload
        removeReservation: (state, action:PayloadAction<BookingItem>) => {
            const remainItems=state.carItems.filter(obj=>{
                return (obj.id!==action.payload.id)
            })
            state.carItems = remainItems
        }
    }
})

export const { addReservation, removeReservation } = cartSlice.actions
export default cartSlice.reducer