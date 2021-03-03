import { createAction } from '@reduxjs/toolkit';
import { COUNT_CHANGE } from "../constants/CounterConstants";

//count_change({amount: 20}) will pass the relevant switch statement and payload with this.
//Use more elaborate functions at will and just use the action to actually send up the payload.
export const count_change = createAction(COUNT_CHANGE);