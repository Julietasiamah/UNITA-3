import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Component } from "react";

class AlltheBooks extends Component {
  state = { books: fantasy };

  render() {
    return (
      <Container>
        <div className="mb-3">
          <Button variant="primary" onClick={this.setState({ books: fantasy })}>
            Fantasy
          </Button>
          <Button variant="success" onClick={this.setState({ books: history })}>
            History
          </Button>
          <Button variant="dark" onClick={this.setState({ books: horror })}>
            Horror
          </Button>
          <Button variant="danger" onClick={this.setState({ books: romance })}>
            Romance
          </Button>
          <Button variant="warning" onClick={this.setState({ books: scifi })}>
            Scifi
          </Button>
        </div>
        <Row>
          {this.state.books.map((book) => {
            return (
              <Col sm={6} md={3} xl={3} key={book.asin}>
                <Card>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      {book.price}€<p>{book.category}</p>
                    </Card.Text>
                    <Button variant="primary" className="text-center">
                      Add
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AlltheBooks;
