import NewsPostCard from "@/app/components/cards/NewsPostCard";
import notFound from "@/app/not-found";
import { getDepartmentsData } from "@/lib/getApiData";

export default async function Page({ params }) {
  const { path } = await params;
  let departmentsData = await getDepartmentsData();
  const department = departmentsData.find((news) => news.path == path);
  const specifiedNews = department["latest_news"] || [];
  if (!specifiedNews) throw notFound();
  let cards = specifiedNews.map((card, i) => {
    return (
      <NewsPostCard
        key={i}
        img={card?.thumbnail?.formats?.small?.url}
        title={card.title}
        alt={`صورة ${card.title}`}
        date={card.date}
        href={`/news/${card.id}`}
      />
    );
  });
  return (
    <main className="container px-5 my-8">
      <h1 className="font-bold text-3xl text-center text-slate-800 border-b-2 border-slate-500 pb-3">
        الأخبار الخاصة بقسم : {department.title}
      </h1>
      <section className="container grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 mt-6 p-2">
        {cards}
      </section>
    </main>
  );
}
