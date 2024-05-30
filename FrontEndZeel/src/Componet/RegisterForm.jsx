import React from "react";
import "./CSS/Register.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
// import { FaCircleArrowDown } from "react-icons/fa6";
// import { useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { register } from "../Redux/actions/actions";

function RegisterForm() {
  let naviget=useNavigate()
  const [obj, setObj] = useState({});
  const [blankobj, setBlankobj] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch =useDispatch()

  let getdata = (e) => {
    console.log(e.target.value);
    if (e.target.name === "userImage") {
      obj[e.target.name] = e.target.files[0];
      blankobj.userImage = "";
    }else{

      obj[e.target.name] = e.target.value;
      blankobj[e.target.name] = "";
    }
    // console.log(obj);
    setObj({...obj})
  };

  let submitdata = () => {

    let formdata =new FormData();
    formdata.append("userName",obj.userName);
    formdata.append("email",obj.email);
    formdata.append("mobile",obj.mobile);
    formdata.append("gender",obj.gender);
    formdata.append("birthDate",obj.birthDate);
    formdata.append("city",obj.city);
    formdata.append("state",obj.state);
    formdata.append("country",obj.country);
    formdata.append("postalCode",obj.postalCode);
    formdata.append("officeContact",obj.officeContact);
    formdata.append("qualification",obj.qualification);
    formdata.append("address",obj.address);
    formdata.append("password",obj.password);
    formdata.append("confirmPassword",obj.confirmPassword);
    formdata.append("userImage",obj.userImage);

  
    // console.log(formdata);
    
    register(formdata)

    
    naviget('/login')
    setObj({...blankobj});
    
  };
  
  let loginpage=()=>{
    
    naviget('/login')
  }

  return (
    <>
      <div className="body">
        <div className="extra">
          <div className="container1">
            <div className="loginhader">
              <h2>Go To The Login Page </h2>
            </div>

            <FaCircleArrowRight className="btnicon" />
            <button className="loginbtn" onClick={loginpage}>Login Page</button>
          </div>

          <div className="container2">
            <header>Registration</header>
            <form action="#">
              <div className="form first">
                <div className="details personal">
                  {/* <span className="title">Personal Details</span> */}
                  <div className="fields">
                    <div className="input-field">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="userName"
                        placeholder="Enter your name"
                        onChange={getdata}
                        value={obj.userName}
                      />
                    </div>

                    <div className="input-field">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        onChange={getdata}
                        value={obj.email}
                      />
                    </div>

                    <div className="input-field">
                      <label>Mobile Number</label>
                      <input
                        type="number"
                        name="mobile"
                        placeholder="Enter mobile number"
                        onChange={getdata}
                        value={obj.mobile}
                      />
                    </div>
                    <div className="input-field">
                      <label>Gender</label>
                      <select
                        name="gender"
                        value={obj.gender}
                        onChange={getdata}
                      >
                        <option value="Select gender">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>

                    <div className="input-field">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        name="birthDate"
                        placeholder="Enter birth date"
                        onChange={getdata}
                        value={obj.birthDate}
                      />
                    </div>

                    <div className="input-field">
                      <label>city</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Enter your city Name"
                        onChange={getdata}
                        value={obj.city}
                      />
                    </div>

                    <div className="input-field">
                      <label>state</label>
                      <input
                        type="text"
                        name="state"
                        placeholder="Enter your state Name"
                        onChange={getdata}
                        value={obj.state}
                      />
                    </div>

                    <div className="input-field">
                      <label>country</label>
                      <input
                        type="text"
                        name="country"
                        placeholder="Enter your state Name"
                        onChange={getdata}
                        value={obj.country}
                      />
                    </div>
                    <div className="input-field">
                      <label>postalCode</label>
                      <input
                        type="number"
                        name="postalCode"
                        placeholder="Enter your postalCode"
                        onChange={getdata}
                        value={obj.postalCode}
                      />
                    </div>

                    <div className="input-field">
                      <label>office Contact </label>
                      <input
                        type="number"
                        name="officeContact"
                        placeholder="Enter your office Contact "
                        onChange={getdata}
                        value={obj.officeContact}
                      />
                    </div>

                    <div className="input-field">
                      <label>qualification</label>
                      <input
                        type="text"
                        name="qualification"
                        placeholder="Enter your office Contact "
                        onChange={getdata}
                        value={obj.qualification}
                      />
                    </div>

                    <div className="input-field">
                      <label>address</label>
                      <textarea
                        name="address"
                        rows="2"
                        cols="50"
                        onChange={getdata}
                        value={obj.address}
                      ></textarea>
                    </div>

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
                    <div className="input-field">
                      <label>confirmPassword </label>
                      <input
                        type="number"
                        name="confirmPassword"
                        placeholder="Enter your confirmPassword "
                        onChange={getdata}
                        value={obj.confirmPassword}
                      />
                    </div>

                    <div className="input-field-useimge">
                      <label>UserImage </label>
                      <input
                        type="file"
                        name="userImage"
                        placeholder="Enter your userImage"
                        onChange={getdata}
                      />
                    </div>
                  </div>
                  <div>
                    <Button className="btn btn-success" onClick={submitdata}>
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <Button variant="primary " onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Register Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="login_body">
            <div classNameName="main">
              <div id="login_div">
                <h1>Register Here</h1>
                <form>
                  <div classNameName="input-box">
                    <span className="icon">
                      <MdAttachEmail />
                    </span>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      onChange={getdata}
                      value={obj.email ?? ""}
                    />
                  </div>
                  <div classNameName="input-box">
                    <span className="icon">
                      <RiAccountCircleFill />
                    </span>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Fullname"
                      onChange={getdata}
                      value={obj.fullName ?? ""}
                    />
                  </div>
                  <div classNameName="input-box">
                    <span className="icon">
                      <FaPhoneAlt />
                    </span>
                    <input
                      type="text"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      onChange={getdata}
                      value={obj.mobileNumber ?? ""}
                    />
                  </div>
                  <div classNameName="input-box">
                    <span className="icon">
                      <FaLock />
                    </span>
                    <input
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={getdata}
                      value={obj.password ?? ""}
                    />
                  </div>

                  <button id="btn" onClick={register} type="button">
                    Create Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default RegisterForm;
