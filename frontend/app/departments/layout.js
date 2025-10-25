export const metadata = {
  title: "الأقسام العلمية و البرامج",
  description:
    "تحتوي كلية هندسة جامعة سوهاج على العديد من الأقسام و البرامج و أهمها : قسم الهندسة المدنيةو قسم الهندسة الكهربائية و قسم هندسة الإنشاءات و قسم هندسة الحاسب و الذكاء الاصطناعي",
  keywords: [
    "الأقسام العلمية و البرامج",
    "عن كلية الهندسة جامعة سوهاج",
    "برامج الهندسة",
    "قبول جامعة سوهاج",
    "هندسة مدنية",
    "هندسة حاسبات",
    "جامعة سوهاج",
  ],
  icons: {
    icon: "/icon/icon.png",
    apple: "/icon/icon.png",
  },
  authors: [
    {
      name: "كلية الهندسة جامعة سوهاج",
      url: "sohag-faculty-of-engineering.vercel.app",
    },
    {
      name: "NOVER MOHSEN",
      url: "sohag-faculty-of-engineering.vercel.app",
    },
  ],
  openGraph: {
    title: "الأقسام العلمية و البرامج كلية الهندسة جامعة سوهاج",
    description:
      "اكتشف البرامج الأكاديمية والبحثية المتميزة في قلب الصعيد. مستقبل الهندسة يبدأ هنا.",
    url: "sohag-faculty-of-engineering.vercel.app",
    siteName: "كلية الهندسة جامعة سوهاج",
    images: [
      {
        url: "/icon/metadataImage.png",
        width: 1200,
        height: 630,
        alt: "صورة كلية الهندسة جامعة سوهاج",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "/icon/metadataImage.png",
    site: "sohag-faculty-of-engineering.vercel.app",
    creator: "NOVER | ER",
    title: "الأقسام العلمية و البرامج كلية الهندسة جامعة سوهاج",
    description:
      "الموقع الرسمي لـ كلية الهندسة بجامعة سوهاج. برامج مدنية، حاسبات، اتصالات، وقوى.",
    images: "/icon/metadataImage.png",
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
  verification: {
    google: "BFuqjbTvtG-3RjehxhKP1ZlUalh-wvdN--pXqvF1yY4",
  },
  alternates: {
    canonical: "sohag-faculty-of-engineering.vercel.app/departments",
    languages: {
      "ar-EG": "sohag-faculty-of-engineering.vercel.app/departments",
      "x-default": "sohag-faculty-of-engineering.vercel.app/departments",
    },
  },
};
export default function RootLayout({ children }) {
  return children;
}
