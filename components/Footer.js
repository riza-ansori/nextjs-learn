import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import styles from "../styles/Footer.module.css";
import Logo from "../public/logo.png"
import Image from 'next/image'

export default function Navigation() {
  return (

    <footer className={styles.footer}>
        <Container>
            <a
            href="https://ansoririza.my.id/"
            target="_blank"
            rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={styles.logo}>
                    &nbsp;Ansori Riza
                </span>
            </a>
        </Container>
      </footer>
    )
}