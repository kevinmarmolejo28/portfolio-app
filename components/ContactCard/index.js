import styles from "./styles.module.css";

export default function ContactCard({
  title = "Title",
  description = "Description",
  icon = null,
  redirect = ".",
}) {
  return (
    <div className={styles.container}>
      <a href={redirect} target="_blank" rel="noreferrer">
        <div className={styles.header}>
          <p>{title}</p>
          {icon}
        </div>
        <p className={styles.description}>{description}</p>
      </a>
    </div>
  );
}
