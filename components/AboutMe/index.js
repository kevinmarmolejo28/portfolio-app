/* Next */
import Image from "next/image";

/* Own Components */
import Tag from "components/Tag";

export default function AboutMe() {
  return (
    <div className="w-site pt-16 grid grid-cols-1 sm:grid-cols-2 gap-16">
      <div className="flex flex-col justify-center space-y-10">
        <div className="flex items-center space-x-3">
          <Tag text="Multimedia Engineer" />
          <Tag text="Full Stack Developer" />
        </div>
        <h1 className="font-bold">Kevin Marmolejo Solis</h1>
        <p className="font-light text-lg">
          I am a <strong>Multimedia Engineer</strong> from the Autónoma de
          Occidente University. I have knowledge in software development,
          digital content creation and UX and UI design. I characterize myself
          as a tenacious and responsible person, always willing to improve and
          learn. <br />
          <br />
          Actually I have 2 years developing websites, using technologies as
          NextJS, furthermore I have experience in development of VR, AR, RM and
          mobile Apps.
        </p>
      </div>

      <Image
        src="/png/photo.png"
        width={644}
        height={799}
        className="rounded-lg"
        layout="responsive"
        objectFit="contain"
        alt="Kevin Marmolejo"
      />
    </div>
  );
}
