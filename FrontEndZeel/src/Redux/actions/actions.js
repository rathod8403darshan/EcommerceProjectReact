import axios from "axios";

let auth = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const register = (obj) => {
  axios.post("http://localhost:7000/api/user/register", obj).then((res) => {
    console.log(res.data);
  });
};

export const Login = (obj) => {
  axios.post("http://localhost:7000/api/user/login",obj,auth).then((res) => {
    console.log(res.data);
    localStorage.setItem("islogin", true);
    localStorage.setItem("token", res.data.token);
  });
};
