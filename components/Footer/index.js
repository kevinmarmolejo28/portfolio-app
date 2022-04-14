/* Next */
import Link from "next/link";

/* Own Components */
import Email from "components/Icons/Email";
import Linkedin from "components/Icons/Linkedin";
import Logo from "components/Icons/Logo";

export default function Footer() {
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
    <div className="bg-primary py-7">
      <footer className="w-site flex justify-between items-center">
        <Link href="/#" scroll>
          <div>
            <Logo className="text-gray cursor-pointer" />
          </div>
        </Link>

        <div className="flex items-center space-x-6">
          {ICONS.map((icon) => (
            <a
              key={icon.id}
              href={icon.goTo}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 text-gray cursor-pointer hover:text-white-dark"
            >
              {icon.content}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
