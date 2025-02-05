import { Button, Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  console.log(props);
  return (
    <Col md={4} xl={3} sm={6}>
      <Card>
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>€{props.book.price}</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
