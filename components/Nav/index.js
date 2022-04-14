/* Next */
import Link from "next/link";

/* Own Components */
import Email from "components/Icons/Email";
import Linkedin from "components/Icons/Linkedin";
import LogoIcon from "../Icons/Logo";

export default function Nav() {
  // Constants
  const LINKS = [
    {
      id: 1,
      text: "About Me",
      goTo: "/#about-me",
    },
    {
      id: 2,
      text: "Skills",
      goTo: "/#skills",
    },
    {
      id: 3,
      text: "Projects",
      goTo: "/#projects",
    },
    {
      id: 4,
      text: "Contact",
      goTo: "/#contact",
    },
  ];

  const ICONS = [
    {
      id: 1,
      content: <Linkedin />,
      goTo: "https://www.linkedin.com/in/kevin-marmolejo-solis",
    },
    {
      id: 2,
      content: <Email />,
      goTo: "mailto:kevin.marmolejo.dev@gmail.com",
    },
  ];

  return (
    <div className="sticky top-0 shadow-lg bg-gray py-5 z-10">
      <nav
        className="w-site 
        flex items-center justify-between"
      >
        <Link href="/#" scroll>
          <div>
            <LogoIcon className="cursor-pointer text-white" />
          </div>
        </Link>

        <div
          className="hidden justify-between items-center space-x-6 
          sm:flex"
        >
          {LINKS.map((link) => (
            <Link href={link.goTo} key={link.id} scroll>
              <p className="cursor-pointer hover:text-primary">{link.text}</p>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          {ICONS.map((icon) => (
            <a
              key={icon.id}
              href={icon.goTo}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 text-white cursor-pointer hover:text-primary"
            >
              {icon.content}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
