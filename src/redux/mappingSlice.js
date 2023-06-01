import {createSlice} from '@reduxjs/toolkit';
import json from '../schema.json';

const mappingSlice=createSlice({
    name:'mapping',
    initialState:{
        selectedOptions:Array(json.channels.length).fill('0'),
        selectedOptionsTwo:Array(json.channels.length).fill('0'),
        additionalOptions:[json.optionals[0].optional1,json.optionals[0].optional2]
    },
    reducers:{
        updateOptions:(state,action)=>{
            state.selectedOptions=action.payload;
        },
        updateOptionsTwo:(state,action)=>{
            state.selectedOptionsTwo=action.payload;
        },
        updateAdditionalOptions:(state,action)=>{
            state.additionalOptions=action.payload;
        }
    }
})

export const {updateOptions,updateOptionsTwo,updateAdditionalOptions} = mappingSlice.actions;

export default mappingSlice.reducer;