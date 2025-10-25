export const metadata = {
  title: {
    default: "عن كلية الهندسة جامعة سوهاج",
    template: "%s | كلية الهندسة جامعة سوهاج",
  },
  description: `،أنشئت كلية الهندسة بجامعة سوهاج بالقرار الجمهوري رقم 324 في أبريل لسنه 2007 ، وبدأت الدراسة بالكلية العام الجامعي 2008/2009، رؤية الكلية: تتطلع كلية الهندسه بجامعة سوهاج أن تكون لها السبق في تقديم مهندس ذو درجة عالية من المعرفة والقدرات والمهارات وله القدرة علي مواكبة التقدم السريع في المجالات الهندسيه ويستطيع المنافسه علي المستوي المحلي والإقليمي والعالمي،رسالة الكلية : تعمل كلية الهندسة على تقديم برامج تعليمية مُتقدمة تتميز بالجوةة العالية، وتهتم بالمتغيرات المستقبلية التي تواجه المهندسين، وتسعى الكلية إلى تعزيز الممارسة المهنية في المجالات الهندسية المُختلفة والمساهمة في تأمين احتياجات المجتمع، ودلك من خلال الإبداع والابتكار المعرفي ونقل المعارف الهندسية إلى الأجيال الصاعده عبر التعليم والبحث العلمي وعبر الشراكة مع المؤسسات والهيئات الحكومية،`,
  keywords: [
    "عن هندسة سوهاج",
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
    title: "عن كلية الهندسة - جامعة سوهاج",
    description:
      "اكتشف البرامج الأكاديمية والبحثية المتميزة في قلب الصعيد. مستقبل الهندسة يبدأ هنا.",
    url: "sohag-faculty-of-engineering.vercel.app",
    siteName: "كلية الهندسة جامعة سوهاج",
    images: [
      {
        url: "https://raw.githubusercontent.com/novermohsen/sohag-faculty-of-engineering/refs/heads/main/frontend/app/icon/metadataImage.png",
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
    title: "عن كلية الهندسة جامعة سوهاج",
    description:
      "الموقع الرسمي لـ كلية الهندسة بجامعة سوهاج. برامج مدنية، حاسبات، اتصالات، وقوى.",
    images:
      "https://raw.githubusercontent.com/novermohsen/sohag-faculty-of-engineering/refs/heads/main/frontend/app/icon/metadataImage.png",
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
    canonical: "sohag-faculty-of-engineering.vercel.app/about-college",
    languages: {
      "ar-EG": "sohag-faculty-of-engineering.vercel.app/about-college",
      "x-default": "sohag-faculty-of-engineering.vercel.app/about-college",
    },
  },
};
export default function AboutCollege({ children }) {
  return children;
}
