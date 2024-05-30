import { GETCOMPLETEORDER } from "../type/Type"


const defaultState = {
    CompleteData : [],
}

export const CompleteOrderReducer = (state = defaultState,action)=> {
     switch (action.type) {
       
        case GETCOMPLETEORDER:
            return {
                CompleteData : action.data
            }
        default:
            return state
     }
}