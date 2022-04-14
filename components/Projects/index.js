/* React */
import { useEffect, useState } from "react";

/* Own Components */
import ProjectCard from "components/ProjectCard";

export default function Projects() {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const projectsListInfo = [
      {
        id: 1,
        title: "Interactive Catalog",
        description:
          "Web application for the company Metalicas Mundial LTDA., catalog type, to view their products in 3D, both individual and installed, with the possibility of changing colors and viewing their specifications.",
        video: "",
        techs: [
          {
            id: 1,
            name: "Html 5",
          },
          {
            id: 2,
            name: "Css",
          },
          {
            id: 3,
            name: "ThreeJs",
          },
          {
            id: 4,
            name: "Php",
          },
        ],
      },
      {
        id: 2,
        title: "Block Race",
        description:
          "Web application for the company RoboticaForKids, simulator type where it is expected to teach children to program by means of blocks, where the objective is to drive a robot to the finish line.",
        video:
          "https://firebasestorage.googleapis.com/v0/b/kev-portfolio.appspot.com/o/Simulador%20RoboticaForKids.mp4?alt=media&token=c7deab43-bbf6-414a-a1fa-6762a1a76680",
        techs: [
          {
            id: 1,
            name: "Html 5",
          },
          {
            id: 2,
            name: "Css",
          },
          {
            id: 3,
            name: "ThreeJs",
          },
        ],
      },
      {
        id: 3,
        title: "Meego",
        description:
          "Mobile application for the provision of beauty services, where people can create their store and acquire different services or products related to beauty for both men and women.",
        video: "",
        hrefVisit:
          "https://play.google.com/store/apps/details?id=com.meego.app&hl=es_CO",
        techs: [
          {
            id: 1,
            name: "Html 5",
          },
          {
            id: 2,
            name: "Css",
          },
          {
            id: 3,
            name: "ThreeJs",
          },
        ],
      },
      {
        id: 4,
        title: "Hot Rod 3D Model",
        description:
          "This is s little project where I modeled completely a Hot Rod car using Maya, Making custom textures and customize each material to the cars look realistic.",
        video:
          "https://firebasestorage.googleapis.com/v0/b/kev-portfolio.appspot.com/o/Hot-Rod1-360.mp4?alt=media&token=8aff88ba-5998-40de-8603-af692c391865",
        techs: [
          {
            id: 1,
            name: "Maya",
          },
          {
            id: 2,
            name: "Adobe Photoshop",
          },
          {
            id: 3,
            name: "Adobe Premier",
          },
        ],
      },
    ];

    setProjectsList(projectsListInfo);
  }, []);

  return (
    <div className="w-site p-16">
      <h1 className="text-center mb-12 font-bold">Projects</h1>

      <div
        className="flex space-x-5 space-y-0 h-fit overflow-y-hidden overflow-x-scroll pb-5
      sm:block sm:space-x-0 sm:space-y-5 sm:max-h-[1000px] sm:overflow-y-scroll sm:overflow-x-hidden sm:px-10"
      >
        {projectsList.map((project) => (
          <div key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.techs}
              video={project.video}
              hrefVisit={project.hrefVisit}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
