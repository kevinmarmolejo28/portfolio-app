/* Own Components */
import Tag from "components/Tag";

export default function ProjectCard({
  title = "Title",
  description = "Description",
  technologies = [{ id: 1, name: "Tech" }],
  video = "",
  hrefVisit = null,
}) {
  return (
    <div
      className="grid grid-cols-1 gap-10 sm:grid-cols-2
              bg-gray-dark shadow-lg rounded-md
              p-8 sm:p-12 min-w-[300px]"
    >
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-primary font-bold text-lg">{title}</p>
          <p className="font-light text-lg mb-12">{description}</p>

          <p className="text-primary font-bold text-lg">Used Technologies</p>
          <div className="flex space-x-2 mt-1">
            {technologies.map((item) => (
              <Tag key={item.id} text={item.name} />
            ))}
          </div>
        </div>

        {hrefVisit && (
          <div>
            <a href={hrefVisit}>
              <p className="text-primary underline underline-offset-2 cursor-pointer">
                Visit
              </p>
            </a>
          </div>
        )}
      </div>

      <video loop autoPlay muted src={video} />
    </div>
  );
}
