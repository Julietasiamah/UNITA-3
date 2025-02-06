import { Col, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
            .map((b) => (
              <Col className="mt-5" key={b.asin}>
                <SingleBook book={b}></SingleBook>
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
