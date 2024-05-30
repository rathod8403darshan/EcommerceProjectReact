import axios from "axios"
import { GETCOMPLETEORDER } from "../type/Type"

export const GetCompleteorderAction = (token)=> {
    return (dispatch) => {
        axios.get("http://localhost:7000/api/order/get",token).then((res)=> {
            console.log(res.data)
            dispatch({type:GETCOMPLETEORDER,data:res.data.data})
        })
    }
}


