import Image from "next/image";

export default function Banner({
  name,
  imgUrl,
}: {
  name: string;
  imgUrl: string;
}) {
  return (
    <div className="block p-1 m-0 w-screen h-[80vh] relative">
      <Image
        src={imgUrl}
        alt={`${name}img`}
        fill={true}
        priority
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
