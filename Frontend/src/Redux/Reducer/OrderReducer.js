import { GETORDER } from "../type/Type";

const defaultState  = {
    order : [],
}
 
export const orderReducer1 = (state=defaultState,action)=> {
     switch (action.type) {
        case GETORDER:
            return {
                order : action.data
            };
     
        default:
           return state;
     }
}



