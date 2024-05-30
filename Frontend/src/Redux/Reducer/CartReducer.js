import { GETCART } from "../type/Type"

const defaultState = {
    cart : [],
    CartCount : 0
}

export const cartReducer = (state = defaultState,action)=> {
     switch (action.type) {
       case GETCART:
           return{
               cart : action.data,
               CartCount : action.count
            }
        default:
            return state
     }
}