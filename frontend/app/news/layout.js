export const metadata = {
  title: "صفحة أحدث الأخبار",
  description: "يتم الإعلان في هذه الصحفة عن أحدث الأخبار و أهمها ",
  keywords: [
    "أحدث أخبار هندسة سوهاج",
    "أحدث أخبار كلية الهندسة جامعة سوهاج",
    " أحدث أخبار  برامج الهندسة",
    "أحدث أخبار قبول جامعة سوهاج",
    "هندسة مدنية",
    "هندسة حاسبات",
    "جامعة سوهاج",
  ],
  openGraph: {
    title: "صفحة أحدث الأخبار",
    description: "يتم الإعلان في هذه الصحفة عن أحدث الأخبار و أهمها ",
    url: "sohag-faculty-of-engineering.vercel.app/news",
    siteName: "كلية الهندسة جامعة سوهاج",
    images: [
      {
        url: "https://raw.githubusercontent.com/novermohsen/sohag-faculty-of-engineering/refs/heads/main/frontend/app/icon/metadataImage.png",
        width: 1200,
        height: 630,
        alt: "شعار كلية الهندسة جامعة سوهاج",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": "-1",
    },
  },
  alternates: {
    canonical: "sohag-faculty-of-engineering.vercel.app/news",
    languages: {
      "ar-EG": "sohag-faculty-of-engineering.vercel.app/news",
      "x-default": "sohag-faculty-of-engineering.vercel.app/news",
    },
  },
};

export default function newsLayout({ children }) {
  return children;
}
