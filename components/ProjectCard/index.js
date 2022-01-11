import Tag from "components/Tag";
import styles from "./styles.module.css";

export default function ProjectCard({
  title = "Title",
  description = "Description",
  technologies = [
    { id: 1, value: "React" },
    { id: 2, value: "Materialize" },
  ],
  video = "https://firebasestorage.googleapis.com/v0/b/kev-portfolio.appspot.com/o/Hot-Rod1-360.mp4?alt=media&token=8aff88ba-5998-40de-8603-af692c391865",
}) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.title}>Used Technologies</p>

        <div className={styles.technologies_container}>
          {technologies.map((item) => (
            <Tag key={item.id} text={item.value} />
          ))}
        </div>
      </div>
      <div className={styles.video_container}>
        <video loop autoPlay muted src={video} />
      </div>
    </div>
  );
}
