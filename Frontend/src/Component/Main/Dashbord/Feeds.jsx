import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

import { BsBellFill } from "react-icons/bs";

import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { FaHdd } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { LuBellRing } from "react-icons/lu";
import { AiFillHdd } from "react-icons/ai";




const FeedData = [
  {
    title: "Cras justo odio",
    icon: <BsBellFill/>,
    color: "primary",
    date: "6 minute ago",
  },
  {
    title: "New user registered.",
    icon: <FaPersonMilitaryRifle/>,
    color: "info",
    date: "6 minute ago",
  },
  {
    title: "Server #1 overloaded.",
    icon: <FaHdd/>,
    color: "danger",
    date: "6 minute ago",
  },
  {
    title: "New order received.",
    icon: <FaCalendarCheck/>,
    color: "success",
    date: "6 minute ago",
  },
  {
    title: "Cras justo odio",
    icon: <LuBellRing/>,
    color: "dark",
    date: "6 minute ago",
  },
  {
    title: "Server #1 overloaded.",
    icon: <AiFillHdd/>,
    color: "warning",
    date: "6 minute ago",
  },
];

const Feeds = () => {
  return (
    <Card  className=" border z-2 p-0 pb-2  " style={{backgroundColor:'transparent',color:"white",backdropFilter: "blur(10000px)"}}>
      <CardBody >
        <CardTitle tag="h5">Feeds</CardTitle>
        <CardSubtitle className="mb-2 text-muted" style={{color:"white"}} tag="h6">
          Widget you can use
        </CardSubtitle>
        <ListGroup flush className="mt-4" >
          {FeedData.map((feed, index) => (
            <ListGroupItem
            style={{backgroundColor:'transparent',color:"white"}}
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
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
  );
};

export default Feeds;