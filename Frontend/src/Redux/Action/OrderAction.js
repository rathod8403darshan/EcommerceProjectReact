import axios from "axios"
import { GETORDER } from "../type/Type"

export const GetorderAction = (token)=> {
    return (dispatch) => {
        axios.get("http://localhost:7000/api/order/get",token).then((res)=> {
            console.log(res.data)
            dispatch({type:GETORDER,data:res.data.data})
        })
    }
}


export const AddorderAction = (token,obj)=> {
    return (dispatch) => {
        axios.post("http://localhost:7000/api/order/add",obj,token).then((res)=> {
            console.log(res)
            dispatch(GetorderAction(token))
        })
    }
}
export const DeleteorderAction = (token,id)=> {
    console.log(id)
    console.log(token)
    return (dispatch) => {
        axios.delete("http://localhost:7000/api/order/remove?productId="+id,token).then((res)=> {
            console.log(res)
            dispatch(GetorderAction(token))
        })
    }
}