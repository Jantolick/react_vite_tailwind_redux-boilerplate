import {createReducer} from '@reduxjs/toolkit';
import { COUNT_CHANGE } from "../constants/CounterConstants";

const initialState = {
    count: 0
}

//Remember to slap in the 'payload' on action.
export const counterReducer = createReducer(initialState, builder => {
    builder    
    .addCase(COUNT_CHANGE, (state, action) => {        
        state.count += action.payload.amount;
    })
});