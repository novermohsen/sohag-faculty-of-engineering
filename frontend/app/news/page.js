import { getNewsData } from "@/lib/getApiData";
import NewsPostCard from "@/app/components/cards/NewsPostCard.jsx";
import Link from "next/link";

export default async function News() {
  const newsData = await getNewsData(
    `?fields[0]=title&fields[1]=id&fields[2]=date&populate[thumbnail][fields][0]=formats&sort=createdAt:desc`
  );
  let cards = newsData.map((card, i) => {
    return (
      <NewsPostCard
        key={i}
        img={card?.thumbnail?.formats?.small?.url}
        title={card.title}
        alt={`صورة ${card.title}`}
        date={card.date}
        href={`news/${card.id}`}
      />
    );
  });
  return (
    <>
      <section className="container grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 mt-6 p-2">
        {cards}
      </section>
      <Link
        className="bg-slate-900 text-white p-3 fixed bottom-5 right-5 rounded-sm"
        href="/news/old-news"
        prefetch={false}
      >
        أخبار سابقة
      </Link>
    </>
  );
}
