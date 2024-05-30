import axios from "axios"
import { GETUSERDETAIL } from "../type/Type"

export const UserDetailAction = (token)=> {
    return  (dispatch )=> {
        axios.get("http://localhost:7000/api/user/getUser",token).then((res)=> {
            dispatch({type:GETUSERDETAIL,data1:res.data.data});
            console.log(res.data)
        })
    }
}

