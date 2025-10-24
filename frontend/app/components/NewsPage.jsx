import { getNewsData } from "@/lib/getApiData";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

async function SingleNewsPage({ id }) {
  let news = await getNewsData();
  let singleNew = news.find((e) => +e.id === +id);
  let updatedAtDate = new Date(singleNew.updatedAt);
  let printedUpDatedAt = `${updatedAtDate.getFullYear()}-${
    updatedAtDate.getMonth() + 1
  }-${updatedAtDate.getDate()}`;
  return (
    <section className="container my-10 bg-slate-100  p-4 rounded-md">
      <h1 className="my-5 py-2 text-4xl font-extrabold text-center border-b-3 border-amber-500 text-slate-800 ">
        {singleNew?.title}
      </h1>
      <div className="BlocksRenderer text-slate-900  p-4 w-full bg-slate-200 rounded-md">
        <BlocksRenderer content={singleNew?.description || []} />
      </div>
      <div className="flex justify-between items-center m-4">
        <p className="text-amber-600 m-3 font">
          تم التحديث في :{printedUpDatedAt}
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
