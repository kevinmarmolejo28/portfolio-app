import React from "react";

import { Row, Col } from "react-bootstrap";
import SkillCard from "components/SkillCard";
import IconCard from "components/IconCard";

import styles from "./style.module.css";

export default function Skills() {
  const options = {
    PROGRAM: "PROGRAMING",
    CONTENT_CREATION: "CONTENT CREATION",
  };

  const [cards, setCards] = React.useState([]);
  const [cardsFront, setCardsFront] = React.useState([]);
  const [cardsBack, setCardsBack] = React.useState([]);
  const [cardsEngines, setCardsEngines] = React.useState([]);
  const [cardsDB, setCardsDB] = React.useState([]);
  const [cardsOther, setCardsOther] = React.useState([]);
  const [cardSelected, SetCardSelected] = React.useState(options.PROGRAM);

  React.useEffect(() => {
    const cardsInfo = [
      {
        id: options.PROGRAM,
        title: "Programing",
        score: 5,
        icon: <img src="./png/code.png" alt="Coding" />,
      },
      {
        id: options.CONTENT_CREATION,
        title: "Content Creation",
        score: 4,
        icon: <img src="./png/digital-content.png" alt="Digital content" />,
      },
    ];

    const cardsFrontInfo = [
      {
        name: "Html 5",
        icon: <img src="./png/html.png" alt="Html 5" />,
      },
      {
        name: "Css",
        icon: <img src="./png/css.png" alt="Css" />,
      },
      {
        name: "Materialize",
        icon: <img src="./png/materialize.png" alt="Materialize" />,
      },
      {
        name: "Bootstrap",
        icon: <img src="./png/bootstrap.png" alt="Bootstrap" />,
      },
      {
        name: "React",
        icon: <img src="./png/react.png" alt="React" />,
      },
      {
        name: "NextJS",
        icon: <img src="./png/next.png" alt="NextJS" />,
      },
      {
        name: "Flutter",
        icon: <img src="./png/flutter.png" alt="Flutter" />,
      },
      {
        name: "Android Studio",
        icon: <img src="./png/android-studio.png" alt="Android Studio" />,
      },
    ];

    const cardsBackInfo = [
      {
        name: "NodeJS",
        icon: <img src="./png/node.png" alt="NodeJS" />,
      },
      {
        name: "NextJS",
        icon: <img src="./png/next.png" alt="NextJs" />,
      },
      {
        name: "Python",
        icon: <img src="./png/python.png" alt="Python" />,
      },
    ];

    const cardsEnginesInfo = [
      {
        name: "Unity",
        icon: <img src="./png/unity.png" alt="Unity" />,
      },
      {
        name: "Unreal",
        icon: <img src="./png/unreal.png" alt="Unreal" />,
      },
    ];

    const cardsDBInfo = [
      {
        name: "MySQL",
        icon: <img src="./png/mysql.png" alt="MySQL" />,
      },
      {
        name: "MongoDB",
        icon: <img src="./png/mongodb.png" alt="MongoDB" />,
      },
      {
        name: "Firebase",
        icon: <img src="./png/firebase.png" alt="Firebase" />,
      },
    ];

    const cardsOthersInfo = [
      {
        name: "Github",
        icon: <img src="./png/github.png" alt="GitHub" />,
      },
      {
        name: "C#",
        icon: <img src="./png/c#.png" alt="C#" />,
      },
      {
        name: "C++",
        icon: <img src="./png/c++.png" alt="C++" />,
      },
    ];

    setCards(cardsInfo);
    setCardsFront(cardsFrontInfo);
    setCardsBack(cardsBackInfo);
    setCardsEngines(cardsEnginesInfo);
    setCardsDB(cardsDBInfo);
    setCardsOther(cardsOthersInfo);
  }, []);

  return (
    <section className={styles.skills} id="skills">
      <Row lg={2} md={2} xs={1}>
        <Col lg={12} md={12} xs={12}>
          <h1 className={styles.title}>Skills</h1>
        </Col>
        <Col>
          {cards.map((item) => (
            <div
              key={item.id}
              onClick={() => SetCardSelected(item.id)}
              onKeyDown={() => SetCardSelected(item.id)}
              role="menuitem"
              tabIndex="0"
              className={styles.card_container}
            >
              <SkillCard
                title={item.title}
                score={item.score}
                icon={item.icon}
                selected={cardSelected === item.id}
              />
            </div>
          ))}
        </Col>
        <Col className={cardSelected !== options.PROGRAM && "d-none"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2>Frontend</h2>
          <div className={styles.card_icon_container}>
            {cardsFront.map((item) => (
              <IconCard key={item.name} text={item.name} icon={item.icon} />
            ))}
          </div>

          <h2>Backend</h2>
          <div className={styles.card_icon_container}>
            {cardsBack.map((item) => (
              <IconCard key={item.name} text={item.name} icon={item.icon} />
            ))}
          </div>

          <h2>Game Engines</h2>
          <div className={styles.card_icon_container}>
            {cardsEngines.map((item) => (
              <IconCard key={item.name} text={item.name} icon={item.icon} />
            ))}
          </div>

          <h2>Databases</h2>
          <div className={styles.card_icon_container}>
            {cardsDB.map((item) => (
              <IconCard key={item.name} text={item.name} icon={item.icon} />
            ))}
          </div>

          <h2>Others</h2>
          <div className={styles.card_icon_container}>
            {cardsOther.map((item) => (
              <IconCard key={item.name} text={item.name} icon={item.icon} />
            ))}
          </div>
        </Col>

        <Col className={cardSelected !== options.CONTENT_CREATION && "d-none"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2>Softwares</h2>
        </Col>
      </Row>
    </section>
  );
}
