import { Alert, Col, Container, Row } from "react-bootstrap";

const Welcome = (props) => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Alert variant="success" className="mt-3 text-center ">
            {props.description}
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
