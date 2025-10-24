import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  display: "swap",
});
export const metadata = {
  title: {
    default: "كلية الهندسة جامعة سوهاج - الموقع الرسمي",
    template: "%s | كلية الهندسة جامعة سوهاج",
  },
  description:
    "الموقع الرسمي لكلية الهندسة بجامعة سوهاج. اكتشف برامجنا الأكاديمية: الهندسة المدنية، الاتصالات والإلكترونيات، القوى الكهربائية، وهندسة الحاسبات. دليلك للقبول والأبحاث.",
  icons: {
    icon: "/icon/icon.png",
    apple: "/icon/icon.png",
  },
  keywords: [
    "هندسة سوهاج",
    "كلية الهندسة جامعة سوهاج",
    "برامج الهندسة",
    "قبول جامعة سوهاج",
    "هندسة مدنية",
    "هندسة حاسبات",
    "جامعة سوهاج",
  ],
  authors: [
    {
      name: "كلية الهندسة جامعة سوهاج",
      url: "https://sohag-faculty-of-engineering.vercel.app/",
    },
  ],
  openGraph: {
    title: "كلية الهندسة - جامعة سوهاج",
    description:
      "اكتشف البرامج الأكاديمية والبحثية المتميزة في قلب الصعيد. مستقبل الهندسة يبدأ هنا.",
    url: "https://sohag-faculty-of-engineering.vercel.app/",
    siteName: "كلية الهندسة جامعة سوهاج",
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    site: "https://sohag-faculty-of-engineering.vercel.app/",
    creator: "@SohagUnivEng",
    title: "كلية الهندسة جامعة سوهاج",
    description:
      "الموقع الرسمي لـ كلية الهندسة بجامعة سوهاج. برامج مدنية، حاسبات، اتصالات، وقوى.",
    images: "[رابط صورة شعار الكلية أو مبنى الكلية بدقة 1200x630 بكسل]",
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
    canonical: "https://sohag-faculty-of-engineering.vercel.app/",
    languages: {
      "ar-EG": "https://sohag-faculty-of-engineering.vercel.app/",
      "x-default": "https://sohag-faculty-of-engineering.vercel.app/",
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
