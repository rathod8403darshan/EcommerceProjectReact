import axios from "axios";
import { GETPRODATA } from "../types/types";

let auth = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const getProudutapi = () => {
  console.log("sdfhdsfigdhiknj");
  return (dispatch) => {
    axios.get("http://localhost:7000/api/product/get", auth).then((res) => {
      console.log(res.data.data);
      dispatch({ type: GETPRODATA, data: res.data.data });
    });
  };
};
export const addProudutapi = (obj) => {
  console.log(obj);
  return (dispatch) => {
    axios
      .post("http://localhost:7000/api/product/add", obj, auth)
      .then((res) => {
        dispatch(getProudutapi());
        console.log(res.data);
      });
  };
};

export const deleteProudutapi = (id) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:7000/api/product/delete?id="+id,auth)
      .then((res) => {
        dispatch(getProudutapi());
        console.log(res.data);
      });
  };
};
