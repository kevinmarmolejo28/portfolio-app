import React from "react";
import styles from "./styles.module.css";

export default function SkillCard({
  title = "title",
  description = "description",
  score = 3,
  icon = null,
  selected = false,
}) {
  const [fillScore, setFillScore] = React.useState([]);

  React.useEffect(() => {
    const scores = [];
    for (let i = 0; i < 5; i += 1) {
      if (i < score) {
        scores.push({ fill: true, id: i });
      } else {
        scores.push({ fill: false, id: i });
      }
    }

    setFillScore(scores);
  }, []);

  return (
    <div className={selected ? styles.selected : styles.container}>
      <div className={styles.header}>
        <p>{title}</p>
        {icon}
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.score}>
        {fillScore.map((item) => (
          <div className={item.fill ? styles.fill : styles.empty} key={item.id}>
            {null}
          </div>
        ))}
      </div>
    </div>
  );
}
