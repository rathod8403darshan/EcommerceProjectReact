import { GETPRODATA, REGISTERDATA, REGISTERData } from "../types/types";

const dfstate={
    array:[]
}
export const reducer = (state=dfstate,action)=>{
    console.log(state,action);
    switch (action.type) {
        case REGISTERDATA:
            
            return state;

        case GETPRODATA:
            
            return {
                array:action.data
            };


    
        default:
            return state;
    }
}