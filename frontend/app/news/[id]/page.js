import NewsPage from "@/app/components/NewsPage.jsx";
import { getNewsData } from "@/lib/getApiData";

export async function generateMetadata({ params }) {
  const { id } = await params;
  let news = await getNewsData(`?filters[id][$eq]=${id}&populate=*`);
  const singleNew = await news[0];
  return {
    title: singleNew?.title,
    description: singleNew?.title,
    keywords: [singleNew?.title],
    authors: [
      {
        name: "كلية الهندسة جامعة سوهاج",
        url: "sohag-faculty-of-engineering.vercel.app",
      },
      {
        name: "NOVER MOHSEN",
      },
    ],
    openGraph: {
      title: singleNew?.title,
      description: singleNew?.title,
      url: `https://sohag-faculty-of-engineering.vercel.app/news/${singleNew?.id}`,
      siteName: "كلية الهندسة جامعة سوهاج",
      images: [
        {
          url: singleNew?.thumbnail?.formats?.medium?.url,
          width: 1200,
          height: 630,
          alt: singleNew?.title,
        },
      ],
      locale: "ar_AR",
      type: "website",
    },
    twitter: {
      title: singleNew?.title,
      description: singleNew?.title,
      images: singleNew?.thumbnail?.formats?.mediummedium?.url,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    verification: {
      google: "BFuqjbTvtG-3RjehxhKP1ZlUalh-wvdN--pXqvF1yY4",
    },
    alternates: {
      canonical: `https://sohag-faculty-of-engineering.vercel.app/news/${singleNew?.id}`,
      languages: {
        "ar-EG": `https://sohag-faculty-of-engineering.vercel.app/news/${singleNew?.id}`,
        "x-default": `https://sohag-faculty-of-engineering.vercel.app/news/${singleNew?.id}`,
      },
    },
  };
}

export default async function page({ params }) {
  const { id } = await params;
  let news = await getNewsData(`?filters[id][$eqi]=${id}&populate=*`);
  const singleNew = await news[0];
  console.log(singleNew);
  if (!news[0]) throw notFound();
  return <NewsPage singleNew={singleNew} />;
}
