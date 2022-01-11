import styles from "./styles.module.css";

export default function Tag({ text = "Tag" }) {
  return (
    <div className={styles.tag}>
      <p>{text}</p>
    </div>
  );
}
