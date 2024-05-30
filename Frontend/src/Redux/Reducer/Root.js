import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import { ProductReducer } from "./ProductReducer";
import { UserDatailReducer } from "./UserDatailReducer";
import { cartReducer } from "./CartReducer";
import {  orderReducer1 } from "./OrderReducer";
import { CompleteOrderReducer } from "./CompleteOrderReducer";



export const reducers = combineReducers({
    Login : LoginReducer,
    Product: ProductReducer,
    userDetail: UserDatailReducer,
    cart: cartReducer,
    order: orderReducer1,
    completeorder: CompleteOrderReducer,
})