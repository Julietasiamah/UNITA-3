import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Favourites</h1>
        </Col>

        <Col xs={10} className="mx-auto mb-5">
          {favourites.map((companyName, i) => (
            <Row className="mx-0 mt-3 p-3" key={i} style={{ border: "1px solid #00000033", borderRadius: 4 }}>
              <Col xs={3}>
                <Button
                  className="p-2"
                  variant="info"
                  onClick={() => {
                    // dispatch({ type: "ADD_TO_FAVOURITES", payload: data.company_name });
                  }}
                >
                  ❤️
                </Button>
                <Link to={`/${companyName}`}>{companyName}</Link>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
