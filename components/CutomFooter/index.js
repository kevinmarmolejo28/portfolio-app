import Logo from "components/Icons/Logo";
import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function CustomFooter() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_content}>
        <Logo fill="#25262a" />
        <Row className={styles.networks}>
          <Col>
            <img
              className={styles.network}
              src="/png/linkedin-black.png"
              alt="Linkedin"
            />
          </Col>
          <Col>
            <img
              className={styles.network}
              src="/png/email-black.png"
              alt="Email"
            />
          </Col>
        </Row>
      </div>
    </footer>
  );
}
