import NewsPage from "@/app/components/NewsPage.jsx";
export default async function page({ params }) {
  const { id } = await params;
  return <NewsPage id={id} />;
}
