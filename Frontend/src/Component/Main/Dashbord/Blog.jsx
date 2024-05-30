import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Button,
  } from "reactstrap";
  
  const Blog = (props) => {
    return (
      <Card className="z-2 ">
        <CardImg alt="Card image cap " style={{height:"200px",objectFit:"cover"}} src={props.image} />
        <CardBody className="p-4">
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText className="mt-3">{props.text}</CardText>
          <Button color={props.color}>Read More</Button>
        </CardBody>
      </Card>
    );
  };
  
  export default Blog;