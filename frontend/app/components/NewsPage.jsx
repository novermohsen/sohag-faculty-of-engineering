import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";
// github app
async function SingleNewsPage({ singleNew }) {
  return (
    <section className="container my-10 bg-slate-100  p-4 rounded-md">
      <h1 className="my-5 py-2 text-4xl font-extrabold text-center border-b-3 border-amber-500 text-slate-800 ">
        {singleNew?.title}
      </h1>
      <div className="w-full rounded-sm overflow-hidden my-2">
        <Image
          src={singleNew?.thumbnail?.formats?.medium?.url}
          width={1920}
          height={1080}
          className="aspect-video"
          alt="news image"
          priority
          fetchPriority="high"
          blurDataURL="Base64"
        />
      </div>
      <div className="BlocksRenderer text-slate-900  p-4 w-full bg-slate-200 rounded-md">
        <BlocksRenderer content={singleNew?.description || []} />
      </div>
      <div className="flex justify-between items-center m-4">
        <p className="text-amber-600 m-3 font">
          تم النشر في :{singleNew?.date}
        </p>
        <Link
          href="/news"
          className="p-2 bg-amber-700 text-xl text-white rounded-md "
        >
          الرجوع
        </Link>
      </div>
    </section>
  );
}
export default SingleNewsPage;
