import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export default function MainNav() {
  return (
    <Navbar expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand>Lomia Wu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
