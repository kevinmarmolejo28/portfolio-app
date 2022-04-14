/* React */
import { useState, useEffect } from "react";

/* Own Components */
import SkillCard from "components/SkillCard";
import IconCard from "components/IconCard";
import DigitalContent from "components/Icons/DigitalContent";
import Code from "components/Icons/Code";

export default function Skills() {
  // Constants
  const options = {
    PROGRAM: "PROGRAMING",
    CONTENT_CREATION: "CONTENT CREATION",
  };

  // Component states
  const [cards, setCards] = useState([]);
  const [cardsFront, setCardsFront] = useState([]);
  const [cardsBack, setCardsBack] = useState([]);
  const [cardsEngines, setCardsEngines] = useState([]);
  const [cardsDB, setCardsDB] = useState([]);
  const [cardsOther, setCardsOther] = useState([]);
  const [cardsEdition, setCardsEdition] = useState([]);
  const [cardSelected, SetCardSelected] = useState(options.PROGRAM);

  // Load data states
  useEffect(() => {
    const cardsInfo = [
      {
        id: options.PROGRAM,
        title: "Programing",
        score: 4,
        icon: <Code />,
      },
      {
        id: options.CONTENT_CREATION,
        title: "Content Creation",
        score: 3,
        icon: <DigitalContent />,
      },
    ];

    const cardsFrontInfo = [
      {
        name: "Html 5",
        src: "/png/html.png",
        alt: "Html 5",
      },
      {
        name: "Css",
        src: "/png/css.png",
        alt: "Css",
      },
      {
        name: "Materialize",
        src: "/png/materialize.png",
        alt: "Materialize",
      },
      {
        name: "Bootstrap",
        src: "/png/bootstrap.png",
        alt: "Bootstrap",
      },
      {
        name: "React",
        src: "/png/react.png",
        alt: "React",
      },
      {
        name: "NextJS",
        src: "/png/next.png",
        alt: "NextJS",
      },
      {
        name: "Flutter",
        src: "/png/flutter.png",
        alt: "Flutter",
      },
      {
        name: "And. Studio",
        src: "/png/android-studio.png",
        alt: "Android Studio",
      },
    ];

    const cardsBackInfo = [
      {
        name: "NodeJS",
        src: "/png/node.png",
        alt: "NodeJS",
      },
      {
        name: "NextJS",
        src: "/png/next.png",
        alt: "NextJs",
      },
      {
        name: "Python",
        src: "/png/python.png",
        alt: "Python",
      },
    ];

    const cardsEnginesInfo = [
      {
        name: "Unity",
        src: "/png/unity.png",
        alt: "Unity",
      },
      {
        name: "Unreal",
        src: "/png/unreal.png",
        alt: "Unreal",
      },
    ];

    const cardsDBInfo = [
      {
        name: "MySQL",
        src: "/png/mysql.png",
        alt: "MySQL",
      },
      {
        name: "MongoDB",
        src: "/png/mongodb.png",
        alt: "MongoDB",
      },
      {
        name: "Firebase",
        src: "/png/firebase.png",
        alt: "Firebase",
      },
    ];

    const cardsOthersInfo = [
      {
        name: "Github",
        src: "/png/github.png",
        alt: "GitHub",
      },
      {
        name: "C#",
        src: "/png/c-share.png",
        alt: "C#",
      },
      {
        name: "C++",
        src: "/png/c++.png",
        alt: "C++",
      },
    ];

    const cardsEditionInfo = [
      {
        name: "After Effect",
        src: "/png/after-effect.png",
        alt: "After Effect",
      },
      {
        name: "Audition",
        src: "/png/audition.png",
        alt: "Audition",
      },
      {
        name: "Illustrator",
        src: "/png/illustrator.png",
        alt: "Illustrator",
      },
      {
        name: "Photohop",
        src: "/png/photoshop.png",
        alt: "Photohop",
      },
      {
        name: "Premier",
        src: "/png/premier.png",
        alt: "Premier",
      },
      {
        name: "Maya",
        src: "/png/maya.png",
        alt: "Maya",
      },
    ];

    setCards(cardsInfo);
    setCardsFront(cardsFrontInfo);
    setCardsBack(cardsBackInfo);
    setCardsEngines(cardsEnginesInfo);
    setCardsDB(cardsDBInfo);
    setCardsOther(cardsOthersInfo);
    setCardsEdition(cardsEditionInfo);
  }, []);

  return (
    <div className="w-site py-16">
      {/* Title */}
      <h1 className="text-center mb-12 font-bold">Skills</h1>

      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {/* Cards selection */}
        <div className="max-w-lg space-y-5">
          {cards.map((item) => (
            <div
              key={item.id}
              onClick={() => SetCardSelected(item.id)}
              onKeyDown={() => SetCardSelected(item.id)}
              role="menuitem"
              tabIndex="0"
            >
              <SkillCard
                title={item.title}
                score={item.score}
                src={item.src}
                alt={item.atl}
                selected={cardSelected === item.id}
              />
            </div>
          ))}
        </div>

        {/* Info selection coding */}
        {cardSelected === options.PROGRAM && (
          <div className="space-y-4">
            <p className="text-lg font-light">
              I am a full stack developer with a wide range of technologies for
              mobile, web and video games.
              <br />
              <br />
              Actually i am focus on website sector using React, NextJs and
              Firebase, however there are many more technologies that I have had
              the opportunity to learn.
            </p>

            <h2>Frontend</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {cardsFront.map((item) => (
                <IconCard
                  key={item.name}
                  text={item.name}
                  src={item.src}
                  alt={item.atl}
                />
              ))}
            </div>

            <h2>Backend</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {cardsBack.map((item) => (
                <IconCard
                  key={item.name}
                  text={item.name}
                  src={item.src}
                  alt={item.atl}
                />
              ))}
            </div>

            <h2>Game Engines</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {cardsEngines.map((item) => (
                <IconCard
                  key={item.name}
                  text={item.name}
                  src={item.src}
                  alt={item.atl}
                />
              ))}
            </div>

            <h2>Databases</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {cardsDB.map((item) => (
                <IconCard
                  key={item.name}
                  text={item.name}
                  src={item.src}
                  alt={item.atl}
                />
              ))}
            </div>

            <h2>Others</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {cardsOther.map((item) => (
                <IconCard
                  key={item.name}
                  text={item.name}
                  src={item.src}
                  alt={item.atl}
                />
              ))}
            </div>
          </div>
        )}

        {/* Info selection media */}
        {cardSelected === options.CONTENT_CREATION && (
          <div className="space-y-4">
            <p className="text-lg font-light">
              Thanks to my career I had the opportunity to learn about the
              digital content creation, from video edition, creation of graphic
              pieces until modeling and animation 3D.
            </p>

            <h2>Softwares</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {cardsEdition.map((item) => (
                <IconCard
                  key={item.name}
                  text={item.name}
                  src={item.src}
                  alt={item.atl}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
