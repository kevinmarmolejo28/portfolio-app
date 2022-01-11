import Tag from "components/Tag";
import { Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";

export default function AboutMe() {
  return (
    <section className={styles.about_me} id="about_me">
      <Row lg={2} md={2} xs={1}>
        <Col>
          <div className={styles.tags}>
            <Tag text="Multimedia Engineer" />
            <Tag text="Full Stack Developer" />
          </div>
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
        <Col className={styles.image_container}>
          <Image
            className={styles.image}
            fluid
            src="/png/photo.png"
            alt="Kevin Marmolejo"
          />
        </Col>
      </Row>
    </section>
  );
}
