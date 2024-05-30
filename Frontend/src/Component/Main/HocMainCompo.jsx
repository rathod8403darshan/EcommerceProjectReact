import React, { useEffect, useState } from 'react'
import "./Bord.css";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { UserDetailAction, UserdeleteAction } from '../../Redux/Action/UseAction';
import { useCookies } from 'react-cookie';
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

import Modal from 'react-bootstrap/Modal';
import { GetCart } from '../../Redux/Action/CartAction';

function HocMainCompo(Component) {

  const MainFunc = () => {
    // Offcanvase
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // GetRedux // modal

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    const state = useSelector(state => state);
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const token = { headers: { Authorization: `Bearer ${cookies?.token}` } }
    const token1 = cookies?.token;


    useEffect(() => {
      dispatch(UserDetailAction(token));
      dispatch(GetCart(token));
    }, [])


    const Logoutuser = () => {
      removeCookie("token")
      navigate("/");
    }

    console.log(state.userDetail.GetUserDetail)


    return (
      <div id="mainBody">
        <div className="video-bg">

          <img src="https://blog-frontend.envato.com/cdn-cgi/image/width=2400,quality=75,format=auto/uploads/sites/2/2023/08/Colour-Scheme-Trends-Blog.jpeg" alt="" />
        </div>
        <div className="dark-light">
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </div>
        <div className="app">
          <div className="header">
            <div className="menu-circle"></div>
            <div className="header-menu">
              <Link className="menu-link is-active" href="#">
                Apps
              </Link>
              {/* <Link className="menu-link notify" href="#">
                Your work
              </Link>
              <Link className="menu-link" href="#">
                Discover
              </Link>
              <Link className="menu-link notify" href="#">
                Market
              </Link> */}
            </div>
            {/* <div className="search-bar">
              <input type="text" placeholder="Search" />
            </div> */}
            <div className="header-profile">
              <div className="notification me-3">
                <span className="notification-number">{state.cart?.CartCount}</span>
                <Link to={"/cart"}>  <FaShoppingCart className='fs-2' /></Link>
              </div>
            

              {/* Profile Img */}
              <img
                className="profile-img"
                onClick={handleShow}
                style={{ cursor: "pointer", objectFit: "cover" }}
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt=""
              />

              <Offcanvas show={show} onHide={handleClose}  className=" ProfileSlide" backdrop="static">
                <Offcanvas.Header closeButton className='text-white'>
                  <Offcanvas.Title className='ms-4 w-100 text-center'>
                    Profile
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {state.userDetail.GetUserDetail?.map((x, i) => {
                    return (i === state.userDetail.GetUserDetail?.length - 1 &&
                      <div id="mainPorfile" key={i}>
                        <div className="container">
                          <div className="main-body">

                            <div className="row gutters-sm">
                              <div className="col-md-4 mb-3">
                                <div className="card">
                                  <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                      <img src={x.userImage} width="150" height={"150"}style={{objectFit:"cover",borderRadius:"50%"}} />
                                      <div className="mt-3">
                                        <h4>John Doe</h4>
                                        <p className="text-secondary mb-1">Full Stack Developer</p>
                                        <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                        <button className="btn btn-primary me-3">Follow</button>
                                        <button className="btn btn-outline-primary">Message</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="card mt-3 " >
                                  <ul className="list-group list-group-flush " >
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap" >
                                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                      <span className="text-secondary">https://bootdey.com</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                                      <span className="text-secondary">bootdey</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                      <span className="text-secondary">@bootdey</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                      <span className="text-secondary">bootdey</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                      <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                      <span className="text-secondary">bootdey</span>
                                    </li>
                                  </ul>
                                </div>


                              </div>
                              <div className="col-md-8">
                                <div className="card mb-3">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                      </div>
                                      <div className="col-sm-9 text-secondary">
                                        {x.userName}
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                      <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                      </div>
                                      <div className="col-sm-9 text-secondary">
                                        {x.email}
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                      <div className="col-sm-3">
                                        <h6 className="mb-0">OfficeContact</h6>
                                      </div>
                                      <div className="col-sm-9 text-secondary">
                                        {x.officeContact}
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                      <div className="col-sm-3">
                                        <h6 className="mb-0">Mobile</h6>
                                      </div>
                                      <div className="col-sm-9 text-secondary">
                                        {x.mobile}
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                      <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                      </div>
                                      <div className="col-sm-9 text-secondary">
                                        {x.address} , <b  >City :</b> {x.city}
                                      </div>
                                    </div>
                                    <hr />

                                    <div className="row">
                                      <div className="col-sm-3">
                                        <h6 className="mb-0">From :</h6>
                                      </div>
                                      <div className="col-sm-9 text-secondary">
                                        <b className='text-light'>Country :</b> {x.country}, <b className='text-light'>State :</b> {x.state}, <b className='text-light'>postalCode :</b>{x.postalCode}
                                      </div>
                                    </div>
                                    <hr />

                                    <div className="row">
                                      <div className="col-sm-12">
                                        <button className="btn btn-info " onClick={handleShow1}>Logout</button>
                                        <Modal
                                          className='mt-5 pt-5 '
                                          show={show1}
                                          onHide={handleClose1}
                                          backdrop="static"
                                          keyboard={false}
                                        >
                                          <Modal.Header closeButton className='deleteuser'>
                                            <Modal.Title>Are You Sure To Logout Account</Modal.Title>
                                          </Modal.Header>
                                         
                                          <Modal.Footer className='deleteuser justify-content-center'>
                                            <Button variant="secondary" onClick={handleClose1}>
                                              Close
                                            </Button>
                                            <Button variant="danger" onClick={Logoutuser}>Logout</Button>
                                          </Modal.Footer>
                                        </Modal>

                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row gutters-sm">
                                  <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                      <div className="card-body">
                                        <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2"></i> Other Detail :-</h6> <hr></hr>


                                        <div className="">
                                          <h6 className="mb-0">Qualification : </h6>
                                        </div>
                                        <div className="text-secondary">
                                          {x.qualification}
                                        </div>
                                        <hr />
                                        <div className="">
                                          <h6 className="mb-0">City : </h6>
                                        </div>
                                        <div className="text-secondary">
                                          {x.city}
                                        </div>
                                        <hr />
                                        <div className="">
                                          <h6 className="mb-0">BirthDate : </h6>
                                        </div>
                                        <div className="text-secondary">
                                          {x.birthDate}
                                        </div>
                                        <hr />


                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6 mb-3">
                                    <div className="card h-100">
                                      <div className="card-body">
                                        <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Buy Item</i> : List</h6>
                                        <small>Electronics </small>
                                        <div className="progress mb-3" style={{ height: "5px" }}>
                                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Grocery</small>
                                        <div className="progress mb-3" style={{ height: "5px" }}>
                                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: "72%" }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Clothes</small>
                                        <div className="progress mb-3" style={{ height: "5px" }}>
                                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: "89%" }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Sports and fitness</small>
                                        <div className="progress mb-3" style={{ height: "5px" }}>
                                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Toys</small>
                                        <div className="progress mb-3" style={{ height: "5px" }}>
                                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%" }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>



                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    )
                  })}
                </Offcanvas.Body>
              </Offcanvas>

            </div>
          </div>
          <div className="wrapper">
            <div className="left-side">
              {/* <div className="side-wrapper">
                <div className="side-title">Apps</div>
                <div className="side-menu">
                  <Link href="#">
                    <svg viewBox="0 0 512 512">
                      <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path
                          d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                          data-original="#bfc9d1"
                        />
                      </g>
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M192 192h128v128H192zm0 0"
                        fill="currentColor"
                        data-original="#82b1ff"
                      />
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
                        fill="currentColor"
                        data-original="#bfc9d1"
                      />
                    </svg>
                    All Apps
                  </Link>
                  <Link href="#">
                    <svg viewBox="0 0 488.932 488.932" fill="currentColor">
                      <path d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z" />
                    </svg>
                    Updates

                  </Link>
                </div>
              </div> */}
              <div className="side-wrapper">
                <div className="side-title">Categories</div>
                <div className="side-menu">
                  <Link to="/home">
                    <FaHome />
                    Home
                  </Link>
                  <Link to="/Product">
                    <svg viewBox="0 0 512 512" fill="currentColor">
                      <circle
                        cx="295.099"
                        cy="327.254"
                        r="110.96"
                        transform="rotate(-45 295.062 327.332)"
                      />
                      <path d="M471.854 338.281V163.146H296.72v41.169a123.1 123.1 0 01121.339 122.939c0 3.717-.176 7.393-.5 11.027zM172.14 327.254a123.16 123.16 0 01100.59-120.915L195.082 73.786 40.146 338.281H172.64c-.325-3.634-.5-7.31-.5-11.027z" />
                    </svg>
                    Product
                  </Link>

                  <Link to="/cart">
                    <FaShoppingCart />
                    Cart
                    <span className="notification-number updates">{state.cart?.CartCount}</span>
                  </Link>
                  <Link to="/order">
                     <FaHeart/>
                    Order
                  </Link>
                  <Link to={"/completeorder"}>
                   <TbTruckDelivery/>
                    Complete Order  
                  </Link>
                  <Link to="/profile">
                   <CgProfile/>
                    Profile
                  </Link>
                </div>
              </div>
            
             
            </div>

            <div className="main-container">
            
              <div className="content-wrapper">
                <div className="content-blur">
                  {/* <div className="content-wrapper-header">
                              <div className="content-wrapper-context">
                              <h3 className="img-content">
                                  <svg viewBox="0 0 512 512">
                                  <path
                                      d="M467 0H45C20.099 0 0 20.099 0 45v422c0 24.901 20.099 45 45 45h422c24.901 0 45-20.099 45-45V45c0-24.901-20.099-45-45-45z"
                                      fill="#d6355b"
                                      data-original="#ff468c"
                                  />
                                  <path
                                      xmlns="http://www.w3.org/2000/svg"
                                      d="M512 45v422c0 24.901-20.099 45-45 45H256V0h211c24.901 0 45 20.099 45 45z"
                                      fill="#d6355b"
                                      data-original="#d72878"
                                  />
                                  <path
                                      xmlns="http://www.w3.org/2000/svg"
                                      d="M467 30H45c-8.401 0-15 6.599-15 15v422c0 8.401 6.599 15 15 15h422c8.401 0 15-6.599 15-15V45c0-8.401-6.599-15-15-15z"
                                      fill="#2e000a"
                                      data-original="#700029"
                                  />
                                  <path
                                      xmlns="http://www.w3.org/2000/svg"
                                      d="M482 45v422c0 8.401-6.599 15-15 15H256V30h211c8.401 0 15 6.599 15 15z"
                                      fill="#2e000a"
                                      data-original="#4d0e06"
                                  />
                                  <path
                                      xmlns="http://www.w3.org/2000/svg"
                                      d="M181 391c-41.353 0-75-33.647-75-75 0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45c41.353 0 75 33.647 75 75s-33.647 75-75 75z"
                                      fill="#d6355b"
                                      data-original="#ff468c"
                                  />
                                  <path
                                      xmlns="http://www.w3.org/2000/svg"
                                      d="M391 361h-30c-8.276 0-15-6.724-15-15V211h45c8.291 0 15-6.709 15-15s-6.709-15-15-15h-45v-45c0-8.291-6.709-15-15-15s-15 6.709-15 15v45h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v135c0 24.814 20.186 45 45 45h30c8.291 0 15-6.709 15-15s-6.709-15-15-15z"
                                      fill="#d6355b"
                                      data-original="#d72878"
                                  />
                                  </svg>
                                  Adobe Stock
                              </h3>
                              <div className="content-text">
                                  Grab yourself 10 free images from Adobe Stock in a 30-day
                                  free trial plan and find perfect image, that will help you
                                  with your new project.
                              </div>
                              <button className="content-button">Start free trial</button>
                              </div>
                              <img
                              className="content-wrapper-img"
                              src="https://assets.codepen.io/3364143/glass.png"
                              alt=""
                              />
                          </div> */}
                          
                
           
                  <Component />


                </div>
              </div>
            </div>


          </div>
          <div className="overlay-app"></div>
        </div>
      </div>
    )
  }

  return (MainFunc)
}

export default HocMainCompo




// <div className="content-section">
// <div className="content-section-title">Installed</div>
// <ul>
// <li className="adobe-product">
//     <div className="products">
//     <svg viewBox="0 0 52 52" style={{border:"1px solid #3291b8"}}>
//         <g xmlns="http://www.w3.org/2000/svg">
//         <path
//             d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
//             fill="#061e26"
//             data-original="#393687"
//         />
//         <path
//             d="M12.16 39H9.28V11h9.64c2.613 0 4.553.813 5.82 2.44 1.266 1.626 1.9 3.76 1.9 6.399 0 .934-.027 1.74-.08 2.42-.054.681-.22 1.534-.5 2.561-.28 1.026-.66 1.866-1.14 2.52-.48.654-1.213 1.227-2.2 1.72-.987.494-2.16.74-3.52.74h-7.04V39zm0-12h6.68c.96 0 1.773-.187 2.44-.56.666-.374 1.153-.773 1.46-1.2.306-.427.546-1.04.72-1.84.173-.801.267-1.4.28-1.801.013-.399.02-.973.02-1.72 0-4.053-1.694-6.08-5.08-6.08h-6.52V27zM29.48 33.92l2.8-.12c.106.987.6 1.754 1.48 2.3.88.547 1.893.82 3.04.82s2.14-.26 2.98-.78c.84-.52 1.26-1.266 1.26-2.239s-.36-1.747-1.08-2.32c-.72-.573-1.6-1.026-2.64-1.36-1.04-.333-2.086-.686-3.14-1.06a7.36 7.36 0 01-2.78-1.76c-.987-.934-1.48-2.073-1.48-3.42s.54-2.601 1.62-3.761 2.833-1.739 5.26-1.739c.854 0 1.653.1 2.4.3.746.2 1.28.394 1.6.58l.48.279-.92 2.521c-.854-.666-1.974-1-3.36-1-1.387 0-2.42.26-3.1.78-.68.52-1.02 1.18-1.02 1.979 0 .88.426 1.574 1.28 2.08.853.507 1.813.934 2.88 1.28 1.066.347 2.126.733 3.18 1.16 1.053.427 1.946 1.094 2.68 2s1.1 2.106 1.1 3.6c0 1.494-.6 2.794-1.8 3.9-1.2 1.106-2.954 1.66-5.26 1.66-2.307 0-4.114-.547-5.42-1.64-1.307-1.093-1.987-2.44-2.04-4.04z"
//             fill="#c1dbe6"
//             data-original="#89d3ff"
//         />
//         </g>
//     </svg>
//     Photoshop
//     </div>
//     <span className="status">
//     <span className="status-circle green"></span>
//     Updated
//     </span>
//     <div className="button-wrapper">
//     <button className="content-button status-button open">
//         Open
//     </button>
//     <div className="menu">
//         <button className="dropdown">
//         <ul>
//             <li>
//             <Link href="#">Go to Discover</Link>
//             </li>
//             <li>
//             <Link href="#">Learn more</Link>
//             </li>
//             <li>
//             <Link href="#">Uninstall</Link>
//             </li>
//         </ul>
//         </button>
//     </div>
//     </div>
// </li>
// <li className="adobe-product">
//     <div className="products">
//     <svg viewBox="0 0 52 52" style={{border:"1px solid #b65a0b"}}>
//         <g xmlns="http://www.w3.org/2000/svg">
//         <path
//             d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
//             fill="#261400"
//             data-original="#6d4c13"
//         />
//         <path
//             d="M30.68 39h-3.24l-2.76-9.04h-8.32L13.72 39H10.6l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L17.12 27h6.84zM37.479 12.24c0 .453-.16.84-.48 1.16-.32.319-.7.479-1.14.479-.44 0-.827-.166-1.16-.5-.334-.333-.5-.713-.5-1.14s.166-.807.5-1.141c.333-.333.72-.5 1.16-.5.44 0 .82.16 1.14.48.321.322.48.709.48 1.162zM37.24 39h-2.88V18.96h2.88V39z"
//             fill="#e6d2c0"
//             data-original="#ffbd2e"
//         />
//         </g>
//     </svg>
//     Illustrator
//     </div>

//     <span className="status">
//     <span className="status-circle"></span>
//     Update Available
//     </span>
//     <div className="button-wrapper">
//     <button className="content-button status-button">
//         Update this app
//     </button>
//     <div className="pop-up">
//         <div className="pop-up__title">
//         Update This App
//         <svg className="close" width="24" height="24"fill="none"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" className="feather feather-x-circle" >
//             <circle cx="12" cy="12" r="10" />
//             <path d="M15 9l-6 6M9 9l6 6" />
//         </svg>
//         </div>
//         <div className="pop-up__subtitle">
//         Adjust your selections for advanced options as desired
//         before continuing. <Link href="#">Learn more</Link>
//         </div>
//         <div className="checkbox-wrapper">
//         <input type="checkbox" id="check1" className="checkbox" />
//         <label for="check1">
//             Import previous settings and preferences
//         </label>
//         </div>
//         <div className="checkbox-wrapper">
//         <input type="checkbox" id="check2" className="checkbox" />
//         <label for="check2">Remove old versions</label>
//         </div>
//         <div className="content-button-wrapper">
//         <button className="content-button status-button open close">
//             Cancel
//         </button>
//         <button className="content-button status-button">
//             Continue
//         </button>
//         </div>
//     </div>
//     <div className="menu">
//         <button className="dropdown">
//         <ul>
//             <li>
//             <Link href="#">Go to Discover</Link>
//             </li>
//             <li>
//             <Link href="#">Learn more</Link>
//             </li>
//             <li>
//             <Link href="#">Uninstall</Link>
//             </li>
//         </ul>
//         </button>
//     </div>
//     </div>
// </li>
// <li className="adobe-product">
//     <div className="products">
//     <svg
//         viewBox="0 0 52 52"
//         style={{border: "1px solid #C75DEB"}}
//     >
//         <g xmlns="http://www.w3.org/2000/svg">
//         <path
//             d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
//             fill="#3a3375"
//             data-original="#3a3375"
//         />
//         <path
//             d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
//             fill="#e4d1eb"
//             data-original="#e7adfb"
//         />
//         </g>
//     </svg>
//     After Effects
//     </div>
//     <span className="status">
//     <span className="status-circle green"></span>
//     Updated
//     </span>
//     <div className="button-wrapper">
//     <button className="content-button status-button open">
//         Open
//     </button>
//     <div className="menu">
//         <button className="dropdown">
//         <ul>
//             <li>
//             <Link href="#">Go to Discover</Link>
//             </li>
//             <li>
//             <Link href="#">Learn more</Link>
//             </li>
//             <li>
//             <Link href="#">Uninstall</Link>
//             </li>
//         </ul>
//         </button>
//     </div>
//     </div>
// </li>
// </ul>
// </div>