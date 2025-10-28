import Image from "next/image";
import Link from "next/link";

function NewsPostCard({ img, alt, title, date, href = "/" }) {
  return (
    <Link
      href={href}
      className="border-2 border-slate-200 rounded-xl overflow-hidden cursor-pointer text-slate-950 hover:underline duration-150 hover:scale-105"
    >
      <Image
        width={300}
        height={300}
        sizes="(max-width: 768px) 100vw, 50vw"
        // src={`${process.env.STRAPI_HOST}${img}`}
        src={img}
        alt={alt || "image undefined"}
        className="max-h-50 hover:scale-105 duration-150 w-full aspect-video"
      />
      <h4 className="mt-4 font-bold text-2xl p-3 text-center">{title}</h4>
      <p className="text-center text-slate-600 my-4 px-3">{date}</p>
    </Link>
  );
}
export default NewsPostCard;
