import { createSlice } from "@reduxjs/toolkit";

const pageSlice=createSlice({
    name:'page',
    initialState:{
        pn:0
    },
    reducers:{
        resetPage:(state)=>{
            state.pn=0;
        },
        updatePageNext:(state)=>{
            state.pn++;
            if(state.pn>3){
                state.pn=0;
            }
        },
        updatePageBack:(state)=>{
            state.pn--;
            if(state.pn<0){
                state.pn=2;
            }
        }
    }
})

export const {resetPage,updatePageNext,updatePageBack}=pageSlice.actions;

export default pageSlice.reducer;