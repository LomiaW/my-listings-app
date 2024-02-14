import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export default function MainNav() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
        <Container >
          <Navbar.Brand>Lomia Wu</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior><Nav.Link>Listings</Nav.Link></Link> {" "}
            <Link href="/about" passHref legacyBehavior><Nav.Link>About</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
