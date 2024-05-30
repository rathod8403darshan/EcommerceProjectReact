import axios from "axios"
import { GETPRODUCT } from "../type/Type"



export const GetProduct = (token)=> {
    return (dispatch)=> {
       axios.get("http://localhost:7000/api/product/get",token).then((res)=>{
            dispatch({
                type: GETPRODUCT,
                data : res.data.data,
            })
            console.log(res)
       })
    }
}

export const AddProduct = (obj,token)=> {
    return (dispatch)=> {
       try {
            axios.post("http://localhost:7000/api/product/add",obj,token).then((res)=>{
                    dispatch(GetProduct(token));
                    console.log(res);
            })
       } catch (error) {
            console.log(error)
       }
    }
}


export const DeleteProduct = (id,token)=> {
    return (dispatch)=> {
       try {
            axios.delete("http://localhost:7000/api/product/delete?id="+id,token).then((res)=>{
                    dispatch(GetProduct(token));
                    console.log(res);
            })
       } catch (error) {
            console.log(error)
       }
    }
}

export const EditProduct = (id,obj,token)=> {
    return (dispatch)=> {
       try {
            axios.patch("http://localhost:7000/api/product/update?id="+id,obj,token).then((res)=>{
                    dispatch(GetProduct(token));
                    console.log(res);
            })
       } catch (error) {
            console.log(error)
       }
    }
}