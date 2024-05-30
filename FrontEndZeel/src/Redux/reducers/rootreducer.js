import { combineReducers } from "redux";
import { reducer } from "./reducer";


export const rootreducer=combineReducers({
    REGISTErapi:reducer,
})