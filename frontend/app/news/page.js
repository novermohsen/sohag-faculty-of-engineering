import { getNewsData } from "@/lib/getApiData";
import NewsPostCard from "@/app/components/cards/NewsPostCard.jsx";

export default async function News() {
  const newsData = await getNewsData();
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
    <section className="container grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 mt-6 p-2">
      {cards}
    </section>
  );
}
