import ContactCard from "components/ContactCard";
import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function Contact() {
  return (
    <section className={styles.container} id="contact">
      <Row lg={2} md={2} sm={1}>
        <Col lg={12} md={12} sm={12}>
          <h1 className={styles.title}>Contact</h1>
        </Col>
        <Col>
          <ContactCard
            title="Gmail"
            description="kevin.marmolejo.dev@gmail.com"
            icon={<img src="./png/email-outlined.png" alt="Gmail" />}
          />
        </Col>
        <Col>
          <ContactCard
            title="LinkedIn"
            description="kevin-marmolejo-solis"
            icon={<img src="./png/linkedin-outlined.png" alt="LinkedIn" />}
          />
        </Col>
      </Row>
    </section>
  );
}
