import ProjectCard from "components/ProjectCard";
import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function Projects() {
  return (
    <section className={styles.container} id="projects">
      <Row lg={1} md={1} sm={1}>
        <Col lg={12} md={12} xs={12}>
          <h1 className={styles.title}>Projects</h1>
        </Col>
        <Col>
          <ProjectCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </Col>
      </Row>
    </section>
  );
}
