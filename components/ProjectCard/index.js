/* Next */
import Image from "next/image";

/* Own Components */
import Tag from "components/Tag";

export default function ProjectCard({
  title = "Title",
  description = "Description",
  technologies = [{ id: 1, name: "Tech" }],
  video = null,
  image = null,
  site = null,
}) {
  return (
    <div
      className="grid grid-cols-1 gap-10 sm:grid-cols-2
              bg-gray-dark shadow-lg rounded-md
              p-8 sm:p-12 min-w-[300px]"
    >
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex justify-between mb-3">
            <p className="text-primary font-bold text-lg">{title}</p>
          </div>
          <p className="font-light text-lg mb-12">{description}</p>

          <p className="text-primary font-bold text-lg">Used Technologies</p>
          <div className="flex mt-1 flex-wrap -ml-2">
            {technologies.map((item) => (
              <div key={item.id} className="ml-2 mt-2">
                <Tag text={item.name} />
              </div>
            ))}
          </div>
        </div>

        {site && (
          <div className="mt-5">
            <a href={site} target="_blank" rel="noreferrer">
              <p className="text-primary underline underline-offset-2 cursor-pointer">
                Visit
              </p>
            </a>
          </div>
        )}
      </div>

      {video && <video loop autoPlay muted src={video} controls />}

      {image && (
        <Image
          src={image}
          width={900}
          height={500}
          layout="responsive"
          objectFit="contain"
          alt={title}
        />
      )}
    </div>
  );
}
