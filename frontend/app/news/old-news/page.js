"use client";
import { getWordpressData } from "@/lib/getApiData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [pageId, setPageId] = useState(1);
  useEffect(() => {
    async function getData() {
      const response = await getWordpressData(pageId);
      const postsArray = Array.isArray(response) ? response : [];
      setData(postsArray);
    }
    getData();
  }, [pageId]);
  const cards = data.map((card, i) => {
    return (
      <Link
        key={i}
        href={`/news/old-news/${card?.id}`}
        className="border-2 border-slate-200 rounded-xl overflow-hidden cursor-pointer text-slate-950 hover:underline duration-150 hover:scale-105"
      >
        {card?.yoast_head_json?.og_image != undefined ? (
          <Image
            width={300}
            height={300}
            sizes="(max-width: 768px) 100vw, 50vw"
            src={card?.yoast_head_json?.og_image[0]?.url}
            alt={"image card"}
            className="max-h-50 hover:scale-105 duration-150 w-full aspect-video"
            priority={true}
          />
        ) : (
          <h1>image not found</h1>
        )}
        <h4 className="mt-4 font-bold text-2xl p-3 text-center">
          {card?.title?.rendered}
        </h4>
        <p className="text-center text-slate-600 my-4 px-3">
          {(card?.date).slice(0, card?.date.indexOf("T"))}
        </p>
      </Link>
    );
  });
  return (
    <div className="container my-5">
      <section className=" grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 mt-6 p-2">
        {cards}
      </section>
      {data.length == 0 ? (
        <div className="flex flex-col items-center justify-center">
          <div className="w-10 h-10 border-6 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">جارٍ تحميل الصفحة</p>
        </div>
      ) : null}
      <div className="mt-5 flex justify-center items-center gap-3">
        <button
          className="px-6 rounded-sm py-3 bg-slate-900 text-white text-xl cursor-pointer"
          onClick={() => {
            pageId > 0 ? setPageId(pageId - 1) : setPageId(1);
            scroll(0, 0);
          }}
        >
          السابق
        </button>
        <button
          className="px-6 rounded-sm py-3 bg-slate-900 text-white text-xl cursor-pointer"
          onClick={() => {
            setPageId(pageId + 1);
            scroll(0, 0);
          }}
        >
          التالي
        </button>
      </div>
    </div>
  );
}
