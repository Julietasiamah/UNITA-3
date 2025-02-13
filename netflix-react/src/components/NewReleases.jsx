import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const NewReleases = () => {
  // state = {
  //   displayMovies: [],
  // };

  const [displayMovies, setDisplayMovies] = useState([]);

  const fetchMovies = () => {
    fetch(" http://www.omdbapi.com/?apikey=d8c0d897&s=avengers")
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
        <h4 className="mt-4">New releases</h4>

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

export default NewReleases;
