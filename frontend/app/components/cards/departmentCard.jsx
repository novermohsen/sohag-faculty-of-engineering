import Image from "next/image";
import Link from "next/link";

function CardDepartment({ img, alt, title, href }) {
  return (
    <Link
      href={`departments/${href}`}
      className="p-3 border-2 hover:scale-105 duration-150 border-gray-300 bg-gray-100 rounded-sm"
    >
      <div className="h-[180px] w-full overflow-hidden rounded-sm">
        <Image
          // src={`${process.env.STRAPI_HOST}${img}`}
          src={img}
          width={450}
          height={350}
          alt={alt}
          className="w-full h-full object-fill"
        />
      </div>
      <h4 className="text-center text-2xl font-bold mt-3 ">{title}</h4>
    </Link>
  );
}
export default CardDepartment;
