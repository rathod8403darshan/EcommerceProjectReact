import React from "react";
import { useState } from "react";
import { Login } from "../Redux/actions/actions";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm(props) {
  const [obj, setobj] = useState({});
  const [blankobj, setblankobj] = useState({});
  let navigate = useNavigate();

  let getdata = (e) => {
    console.log(e.target.value);
    obj[e.target.name] = e.target.value;
    blankobj[e.target.name] = "";
    setobj({ ...obj });
  };
  let submitdata = () => {
    console.log(obj);
    axios.post("http://localhost:7000/api/user/login",obj).then((res) => {
      console.log(res.data);
      if (res.data.isSuccess == true) {
        localStorage.setItem("islogin", true);
        localStorage.setItem("token", res.data.token);
        props.setislogin(true);
        navigate("/");
      }
      //  else {
      //   alert(res.data.errorMessage);
      // }
    });
    Login(obj);
  };
  return (
    <>
      <div className="body">
        <div className="extra">
          <div className="containerlogin  ">
            <center>
              <header className="Loginheader">Login</header>
            </center>
            <form>
              <div className="form first">
                <div className="details personal">
                  <div className="fields">
                    <div className="input-field-email">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        onChange={getdata}
                        value={obj.email}
                      />
                    </div>
                  </div>

                  <div className="input-field">
                    <div className="input-field">
                      <label>password </label>
                      <input
                        type="number"
                        name="password"
                        placeholder="Enter your password"
                        onChange={getdata}
                        value={obj.password}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={submitdata}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div>
                  <p>
                    Don't have an account?
                    <center>
                      <Link to={"/registration"}>Sign Up</Link>
                    </center>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
