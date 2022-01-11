import React from "react";

import { Row, Col, Nav } from "react-bootstrap";
import styles from "./styles.module.css";

import LogoIcon from "../Icons/Logo";

export default function CustomNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <LogoIcon fill="#fff" />
        <Nav className={styles.menu}>
          <Nav.Item>
            <Nav.Link className={styles.item} href="#about_me">
              About Me
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.item} href="#skills">
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.item} href="#projects">
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={styles.item} href="#contact">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Row>
          <Col>
            <img
              className={styles.network}
              src="/png/linkedin-white.png"
              alt="Linkedin"
            />
          </Col>
          <Col>
            <img
              className={styles.network}
              src="/png/email-white.png"
              alt="Email"
            />
          </Col>
        </Row>
      </div>
    </nav>
  );
}
