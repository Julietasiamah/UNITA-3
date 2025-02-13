import { useEffect, useState } from "react";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { Grid } from "react-bootstrap-icons";
import { Grid3x3 } from "react-bootstrap-icons";

const Tvshows = () => {
  // state = {
  //   displayMovies: [],
  // };

  const [displayMovies, setDisplayMovies] = useState([]);

  const fetchMovies = () => {
    fetch("http://www.omdbapi.com/?apikey=d8c0d897&s=Harry Potter")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore chiamata");
        }
      })
      .then((movies) => {
        console.log(movies);
        setDisplayMovies(movies.Search.slice(0, 6));
      })
      .catch((e) => {
        console.log("errore!", e);
      });
  };

  // componentDidMount() {
  //   this.fetchMovies();
  // }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container fluid>
      <Row>
        <div className="d-flex mt-4 justify-content-between ">
          <div className="d-flex">
            <h2>Tv Shows</h2>
            <Dropdown className="ms-3 mt-1 mb-3 ">
              <Dropdown.Toggle id="dropdown-basic" className="rounded-0">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Romance</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Drammatic</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex" id="grid">
            <Grid className="me-5" />
            <Grid3x3 />
          </div>
        </div>
        <h4>Trending Now</h4>
        {displayMovies.map((movie) => {
          return (
            <Col md={2} className="mb-2  px-1" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.title} className="img-fluid" />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Tvshows;
