import axios from "axios";
import { LOGINGET } from "../type/Type";
import { useCookies } from "react-cookie";




export const GetloginAction = (obj) => {
  return  (dispatch) => {
       try {
        axios.post("http://localhost:7000/api/user/register",obj).then(async(res)=> {
          return await res.data
          console.log(res.data)
      })
       } catch (error) {
         return error
       }
  };
};


export const LoginAction = async(obj) => {

       try {
       return await axios.post("http://localhost:7000/api/user/login",obj).then(async(res)=> {
         return await res.data
         console.log(res.data)
      })
       } catch (error) {
          console.log(error.data)
       }

};
