import { Container, Nav, Navbar } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid className="d-flex">
        <Navbar.Brand href="#">
          <img
            src="src\assets\logo.png"
            width="100"
            height="55"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="  nav-link     fw-bold" to="/">
              Home
            </NavLink>
            {/* <Nav.Link as={Link} to="/Tvshows">TV Shows</Nav.Link> */}
            <NavLink className=" nav-link fw-bold" to="/Tvshows">
              TV Shows
            </NavLink>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recentrly added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center ">
          <Search className="me-3" />
          <div className="me-3 fw-bold">KIDS</div>
          <Bell className="me-3" />
          <PersonCircle className="me-3" />
        </div>
      </Container>
    </Navbar>
  );
};

export default TopBar;
