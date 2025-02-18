import { useState } from "react";
import { Alert, Container, Form, Row, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook";

const BookList = () => {
  //state = {
  //searchQuery: "",
  //selectedBook: null
  //};

  const [selectedBook, setSelectedbook] = useState(null);
  const [searchQuery, setSearchQuery] = useState(" ");

  // eslint-disable-next-line no-undef
  changeBookSelected = (book) => setSelectedbook({ selectedBook: book });

  return (
    <Container className="BookList">
      <Form.Control
        className="mt-4"
        type="text"
        placeholder="Cerca un titolo"
        value={searchQuery}
        onChange={(e) => setSearchQuery({ searchQuery: e.target.value })}
      />
      <Row className="mt-4">
        <Col md={8}>
          <Row xs={1} sm={2} md={3} lg={4}>
            {this.props.books
              .filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((book) => (
                <SingleBook
                  key={book.asin}
                  book={book}
                  changeBookSelected={this.changeBookSelected}
                  selectedBookAsin={selectedBook ? selectedBook.asin : ""}
                />
              ))}
          </Row>
        </Col>
        <Col md={4}>
          {selectedBook ? (
            <CommentArea asin={selectedBook.asin} imgSrc={selectedBook.img} title={selectedBook.title} />
          ) : (
            <Alert variant="warning">👈Seleziona un libro per vederne le recensioni</Alert>
          )}
        </Col>
      </Row>

      {this.props.books.length === 0 && (
        <Alert variant="warning" className="mt-4">
          Premi un bottone per visualizzare dei libri👆
        </Alert>
      )}
    </Container>
  );
};

export default BookList;
