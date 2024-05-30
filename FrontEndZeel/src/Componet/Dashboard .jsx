import React from "react";
import "./CSS/Dasbord.css";
import { GrTasks } from "react-icons/gr";
import { FaEnvelope } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
// import { RxDashboard } from "react-icons/rx";
import { RiDashboard3Fill } from "react-icons/ri";
import { MdDesktopWindows } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { IoLogoUsd } from "react-icons/io";
import { Link } from "react-router-dom";

function Dashboard(Component) {
  let Header = () => {
    return (
      <>
        <section id="sidebar">
          <div class="white-label"></div>
          <div id="sidebar-nav">
            <ul>
              <li class="">
                <Link to="/dashboard">
                  <RiDashboard3Fill /> Dashboard
                </Link>
              </li>
              {/* <li>
                <Link to="/dashboard">Home</Link>
              </li> */}
              <li>
                <Link to="/Product">Product</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/Order">Order</Link>
              </li>
              <li>
                <Link to="/Profile">Profile</Link>
              </li>
              {/* <li>
                <a href="#">
                  <i class="fa fa-comments-o"></i>Social Marketing
                </a>
              </li>
              <li>
                <a href="#">
                  <FaMapMarkerAlt /> Get Traffic
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-users"></i> Employees
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-calendar-o"></i> Reservations
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-calendar"></i> Calendar
                </a>
              </li> */}
            </ul>
          </div>
        </section>

        <section id="header">
          <div id="header">
            <div class="header-nav">
              <div class="menu-button">
                <div class="nav">
                  <ul>
                    <li class="nav-settings">
                      <div class="font-icon">
                        <i class="fa fa-tasks"></i>
                        <GrTasks className="icon" />
                      </div>
                    </li>
                    <li class="nav-mail">
                      <div class="font-icon">
                        <i class="fa fa-envelope-o"></i>
                        <FaEnvelope className="icon" />
                      </div>
                    </li>
                    <li class="nav-calendar">
                      <div class="font-icon">
                        <FaCalendarAlt className="icon" />
                      </div>
                    </li>
                    <li class="nav-chat">
                      <div class="font-icon"></div>
                    </li>
                    <li class="nav-profile">
                      <div class="nav-profile-image">
                        <img src="" alt="" />
                        <div class="nav-profile-name">
                          Jane Smith<i class="fa fa-caret-down"></i>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Component />
      </>
    );
  };

  return Header;
}

export default Dashboard;
