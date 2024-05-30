import axios from "axios"
import { GETCART } from "../type/Type"


export const GetCart = (token)=> {
    return (dispatch) => {
        axios.get("http://localhost:7000/api/addtocart/get",token).then((res)=> {
            dispatch({type:GETCART,data:res.data.data,count:res.data.data?.length})
              console.log(res.data)
        })
    }
}
export const AddCart = (obj,token)=> {
    return (dispatch) => {
        axios.post("http://localhost:7000/api/addtocart/add",obj,token).then((res)=> {
            dispatch(GetCart(token));
            console.log(res.data)
        })
    }
}


export const removecart = (id,token)=> {
    return (dispatch) => {
        axios.delete("http://localhost:7000/api/addtocart/remove?productId="+id,token).then((res)=> {
            dispatch(GetCart(token));
            console.log(res.data)
        })
    }
}