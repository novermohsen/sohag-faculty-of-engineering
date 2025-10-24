import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  display: "swap",
});
export const metadata = {
  title: "الصفحة الرئيسية لموقع كلية الهندسة جامعة سوهاج",
  description: `مرحباً بكم في الموقع الرسمي لكلية الهندسة جامعة سوهاج حيث أنشئت الكلية بقرار الجمهورى رقم 324 لسنة 2007م وأنشئت اللائحة بقرار وزارى رقم 259 بتاريخ 9/2/2009 م وتمت الدراسة بها العام الدراسى 2008-2009 م وتم تخريج أول دفعة منها العام الدراسى 2012-2013 م.`,
  icons: {
    icon: "/icon/icon.png",
    apple: "/icon/icon.png",
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
