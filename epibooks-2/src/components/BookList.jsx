import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <Container>
      <Row>
        {props.books.map((book) => {
          return <SingleBook key={book.asin} book={book} />;
        })}
      </Row>
    </Container>
  );
};

export default BookList;
