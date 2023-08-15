import { createSlice } from "@reduxjs/toolkit";



const counterSlice=createSlice({
    name:"counterItem",
    initialState:{value:0},
    reducers:{
        increment:(state)=>{
        state.value++;
        },
        decrement:(state)=>{
            state.value--;
            }
    }
})
export const counterReducer=counterSlice.reducer;
export const counterAction=counterSlice.actions;