import { GETPRODUCT } from "../type/Type";


const defaultState = {
    Product :[]
}
    
export const ProductReducer = (state = defaultState,action)=>{
    switch (action.type) {
        case GETPRODUCT:
            return {
                Product: action.data
            }
    
        default:
            return state;
    }
}