export default function Tag({ text = "Tag" }) {
  return (
    <div className="bg-primary rounded-md px-2 py-1 w-fit h-fit">
      <p className="text-black text-sm font-semibold">{text}</p>
    </div>
  );
}
