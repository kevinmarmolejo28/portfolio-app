import styles from "./styles.module.css";

export default function IconCard({ text = "Text", icon = null }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.name}>{text}</p>
    </div>
  );
}
