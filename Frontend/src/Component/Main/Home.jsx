import React from "react";
import HocMainCompo from "./HocMainCompo";
import { Card, CardBody, CardSubtitle, CardTitle, Col, Row, ListGroupItem, Button, ListGroup } from "reactstrap";
import Chart from "react-apexcharts";


import SalesChart from "./Dashbord/SalesChart";
import Feeds from "./Dashbord/Feeds";
import ProjectTables from "./Dashbord/ProjectTables";
import Blog from "./Dashbord/Blog";


import { BsBellFill } from "react-icons/bs";

import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { FaHdd } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { LuBellRing } from "react-icons/lu";
import { AiFillHdd } from "react-icons/ai";




const FeedData = [
  {
    title: "Cras justo odio",
    icon: <BsBellFill />,
    color: "primary",
    date: "6 minute ago",
  },
  {
    title: "New user registered.",
    icon: <FaPersonMilitaryRifle />,
    color: "info",
    date: "6 minute ago",
  },
  {
    title: "Server #1 overloaded.",
    icon: <FaHdd />,
    color: "danger",
    date: "6 minute ago",
  },
  {
    title: "New order received.",
    icon: <FaCalendarCheck />,
    color: "success",
    date: "6 minute ago",
  },
  {
    title: "Cras justo odio",
    icon: <LuBellRing />,
    color: "dark",
    date: "6 minute ago",
  },
  {
    title: "Server #1 overloaded.",
    icon: <AiFillHdd />,
    color: "warning",
    date: "6 minute ago",
  },
];



function Home() {
  const BlogData = [
    {
      image: "https://www.terawork.com/blog/wp-content/uploads/2022/11/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a-1-1.png",
      title: "This is simple blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: "https://assets-global.website-files.com/5d7628a4fc69ff02bbe2c104/638bbf50d35d050653cd0c0f_RESOURCE%20-%20What%20is%20Ecommerce%20-%20MAIN%20(1).jpg",
      title: "Lets be simple blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yYTjeqXGh7nda2gyqmE9vaMcoxoSnPI4a0nOVk8S5OCV_-sBpYJQmO7uqSlBrludII4&usqp=CAU",
      title: "Don't Lamp blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: "https://lilacinfotech.com/lilac_assets/images/blog/What-Is-E-commerce-and-what-are-its-Applications.jpg",
      title: "Don't Lamp blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: "https://wp-bn.salesforce.com/blog/wp-content/uploads/sites/2/2023/11/SF_Blog_Image_Ecommerce_Changing_Everything.png",
      title: "Simple is beautiful",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
    {
      image: "https://marketplace.canva.com/EAFzjXx_i5w/1/0/1600w/canva-blue-illustrative-e-commerce-online-shop-logo-fZejT2DpGCw.jpg",
      title: "Lets be simple blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
    },
  ];




  //  chart

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 2,
      },
    },
    colors: ["#0d6efd", "#009efb", "#6771dc"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "60%",
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };
  const series = [
    {
      name: "2020",
      data: [20, 40, 50, 30, 40, 50, 30, 30, 40],
    },
    {
      name: "2022",
      data: [10, 20, 40, 60, 20, 40, 50, 60, 20],
    },
  ];
  return (

    <>

      <div className="content-section">
        <div className="content-section-title ms-2">Welcom To my Web</div>
        <div className="">

          <div className="app-card mb-3 bg-light text-dark" >
            <span>
              <svg
                viewBox="0 0 52 52"
                style={{ border: "1px solid #c1316d" }}
              >
                <g xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                    fill="#2f0015"
                    data-original="#6f2b41"
                  />
                  <path
                    d="M18.08 39H15.2V13.72l-2.64-.08V11h5.52v28zM27.68 19.4c1.173-.507 2.593-.761 4.26-.761s3.073.374 4.22 1.12V11h2.88v28c-2.293.32-4.414.48-6.36.48-1.947 0-3.707-.4-5.28-1.2-2.08-1.066-3.12-2.92-3.12-5.561v-7.56c0-2.799 1.133-4.719 3.4-5.759zm8.48 3.12c-1.387-.746-2.907-1.119-4.56-1.119-1.574 0-2.714.406-3.42 1.22-.707.813-1.06 1.847-1.06 3.1v7.12c0 1.227.44 2.188 1.32 2.88.96.719 2.146 1.079 3.56 1.079 1.413 0 2.8-.106 4.16-.319V22.52z"
                    fill="#e1c1cf"
                    data-original="#ff70bd"
                  />
                </g>
              </svg>
             Welcom
            </span>
            <div className="app-card__subtext">
            An ecommerce web is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections
            </div>
           
          </div>

        </div>
      </div>

      <div>

        <Row className="mb-4">
          <Col sm="6" lg="6" xl="12" xxl="12">


            <Card className="border p-2">
              <CardBody >
                <CardTitle tag="h5">Sales Summary</CardTitle>
                <CardSubtitle className="text-muted text-white" tag="h6" >
                  Yearly Sales Report
                </CardSubtitle>
                <div className="bg-primary text-white my-3 p-3 rounded">
                  <Row >
                    <Col md="4" style={{ backgroundColor: 'transparent', color: "white" }}>
                      <h6>Total Sales</h6>
                      <h4 className="mb-0 fw-bold">$10,345</h4>
                    </Col>
                    <Col md="4">
                      <h6>This Month</h6>
                      <h4 className="mb-0 fw-bold">$7,545</h4>
                    </Col>
                    <Col md="4">
                      <h6>This Week</h6>
                      <h4 className="mb-0 fw-bold">$1,345</h4>
                    </Col>
                  </Row>
                </div>
                <Chart options={options} series={series} type="area" height="279" />
              </CardBody>
            </Card>


          </Col>
          <Col sm="6" lg="6" xl="5" xxl="4">




            {/* <Feeds /> */}
          </Col>
        </Row>

        <Row className="mb-4">
          <Col lg="12">
            <ProjectTables />
          </Col>
        </Row>
        {/* <div className="app-card mb-3">
                                  <span>
                                  <svg
                                      viewBox="0 0 512 512"
                                      style={{border: "1px solid #a059a9"}}
                                  >
                                      <path
                                      xmlns="http://www.w3.org/2000/svg"
                                      d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z"
                                      fill="#210027"
                                      data-original="#7b1fa2"
                                      />
                                      <g xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                                          fill="#f6e7fa"
                                          data-original="#e1bee7"
                                      />
                                      </g>
                                  </svg>
                                  Premiere Pro
                                  </span>
                                  <div className="app-card__subtext">
                                  Edit, master and create fully proffesional videos
                                  </div>
                                  <div className="app-card-buttons">
                                  <button className="content-button status-button">
                                      Update
                                  </button>
                                  <div className="menu"></div>
                                  </div>
                              </div> */}

        <Card className=" border z-2 p-3 pb-2 mb-4  ">
          <CardBody >
            <CardTitle tag="h5">Feeds</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Widget you can use
            </CardSubtitle>
            <ListGroup flush className="mt-4" >
              {FeedData.map((feed, index) => (
                <ListGroupItem

                  key={index}
                  action
                  href="/"
                  tag="a"

                  className="d-flex align-items-center h-100 p-2  border-0"
                >
                  <Button
                    className="rounded-circle me-3"
                    size="sm"
                    color={feed.color}
                  >
                    {feed.icon}
                  </Button>
                  {feed.title}
                  <small className="ms-auto text-muted text-small text-light">
                    {feed.date}
                  </small>
                </ListGroupItem>
              ))}
            </ListGroup>
          </CardBody>
        </Card>
        {/**Blog Cards**/}
        <Row className="g-4">
          {BlogData.map((blg, index) => (
            <Col sm="6" lg="6" xl="4" key={index}>
              <Blog
                image={blg.image}
                title={blg.title}
                subtitle={blg.subtitle}
                text={blg.description}
                color={blg.btnbg}
              />
            </Col>
          ))}
        </Row>
        <footer>
  <div className="app-card mt-3 bg-light text-dark">
    <span>
      <svg
        viewBox="0 0 52 52"
        style={{ border: "1px solid #C75DEB" }}
      >
        <g xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
            fill="#3a3375"
            data-original="#3a3375"
          />
          <path
            d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
            fill="#e4d1eb"
            data-original="#e7adfb"
          />
        </g>
      </svg>
     Footer
    </span>
   
   
    <div className="purchase-info mt-3">
    <div className="d-flex gap-5">
      <ul className="">
        <p>Payment Options:</p>
        <li>Credit Card</li>
        <li>PayPal</li>
        <li>Bank Transfer</li>
      </ul>
      <ul className="">
       <p>Shipping Details:</p>
        <li>Free Shipping on Orders Over $50</li>
        <li>Standard Shipping: 3-5 Business Days</li>
        <li>Express Shipping: 1-2 Business Days</li>
      </ul>
    </div>
      
     <div className="mt-3">
     <strong className="mb-5">Customer Support:</strong>
      <p className="mt-3">Email: support@example.com</p>
      <p>Phone: 1-800-123-4567</p>
     </div>
    </div>
  </div>
</footer>

      </div>

    </>
  );
}

export default HocMainCompo(Home);
