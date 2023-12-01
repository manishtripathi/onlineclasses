import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Online Teacher</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Online Tuition Classes" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/class1-5">Class I - V</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/class6">Class 6</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/class7">Class 7</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/class8">Class 8</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="IT Courses" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/html">HTML</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/css">CSS/Sass/Less</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/bootstrap">Bootstrap</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/javascript">Javascript</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/react">React</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/php">Php</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
