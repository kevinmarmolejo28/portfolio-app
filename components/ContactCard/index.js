export default function ContactCard({
  title = "Title",
  description = "Description",
  icon = null,
  redirect = ".",
}) {
  return (
    <div
      className="bg-gray p-7 cursor-pointer
                shadow-lg rounded-md border border-gray
                hover:border-primary"
    >
      <a href={redirect} target="_blank" rel="noreferrer">
        <div className="flex justify-between">
          <p className="text-primary capitalize mb-3 font-medium text-lg">
            {title}
          </p>
          <div className="w-7 h-fit text-primary">{icon}</div>
        </div>
        <p className="text-lg">{description}</p>
      </a>
    </div>
  );
}
