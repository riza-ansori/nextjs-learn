import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import styles from "../styles/Navigation.module.css";
import Logo from "../public/logo.png"
import Image from 'next/image'

export default function Navigation() {
  return (
    
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="./">
          <Image src={Logo} alt="Logo RasaLogi" height={43} objectFit='contain' objectPosition="left center" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.me_auto}>
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./template">Template</Nav.Link>
            <Nav.Link href="./portofolio">Portofolio</Nav.Link>
            <Nav.Link href="./blog">Blog</Nav.Link>
            <Nav.Link href="./#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}