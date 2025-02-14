//import { useState } from "react";
import { Badge, Card, Col } from "react-bootstrap";
// import CommentArea from "./CommentArea";

const SingleBook = (selectedBookAsin, book, changeBookSelected) => {
  // state = {
  //   selected: false
  // };
  // const [selected, setSelected] = useState(false);

  const checkSelected = () => (book.asin === selectedBookAsin ? "border-danger" : "");

  return (
    <Col>
      <Card className={checkSelected()}>
        <Card.Img
          variant="top"
          src={book.img}
          onClick={() => {
            changeBookSelected(book);
            // this.setState({ selected: !this.state.selected });
          }}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Card.Text>
            <Badge bg="info">€{book.price}</Badge>
          </Card.Text>

          {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
