/* React */
import { useState, useEffect } from "react";

export default function SkillCard({
  title = "title",
  description = "description",
  score = 3,
  icon = null,
  selected = false,
}) {
  // Component states
  const [fillScore, setFillScore] = useState([]);

  // Load data
  useEffect(() => {
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
    <div
      className={`bg-gray p-8
      shadow-lg rounded-md cursor-pointer
      border-2 border-gray hover:border-primary
      transition
    ${selected ? "border-primary" : ""}`}
    >
      <div className="flex justify-between items-center">
        <p className="text-primary capitalize mb-3 font-medium text-lg">
          {title}
        </p>
        <div className="w-7 h-fit text-primary">{icon}</div>
      </div>
      <p className="mb-9 capitalize font-light text-lg">{description}</p>
      <div className="flex w-24 justify-between items-center">
        {fillScore.map((item) => (
          <div
            key={item.id}
            className={`w-4 h-4 rounded-full 
            ${item.fill ? "bg-primary" : "bg-white-dark"}`}
          >
            {null}
          </div>
        ))}
      </div>
    </div>
  );
}
