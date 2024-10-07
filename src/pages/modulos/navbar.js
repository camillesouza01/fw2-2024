import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default function Menu() {
  return (
    <Navbar expand="sm" className="bg-info-subtle">
      <Container>
        <Navbar.Brand href="/">6A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}