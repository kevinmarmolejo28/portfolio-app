/* Next */
import Image from "next/image";

export default function IconCard({
  text = "Text",
  src = "/png/photo.png",
  alt = "",
}) {
  return (
    <div
      className="rounded-md bg-gray shadow-lg aspect-square 
                text-center p-2"
    >
      <div className="w-full p-4">
        <Image
          src={src}
          alt={alt}
          width={35}
          height={35}
          className="rounded-lg"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
}
