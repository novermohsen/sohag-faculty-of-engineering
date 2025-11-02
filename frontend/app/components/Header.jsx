"use client";
import Image from "next/image";
import LogoImage from "@/public/images/logo.webp";
import Link from "next/link";
import { FaRegChartBar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
function Header() {
  return (
    <>
      <header className="shadow-xl w-full sticky top-0 left-0 z-50 bg-gray-100">
        <section className="max-w-7xl mx-auto  flex justify-between items-center flex-col sm:flex-row font-bold">
          <div className="w-full sm:w-max flex flex-1 justify-between py-3 px-4 text-2xl">
            <Link
              href="/"
              className="flex items-center gap-4 select-none"
              key={1}
            >
              <Image
                src={LogoImage}
                width={33}
                height={33}
                alt="logo image"
                className="w-auto h-auto"
                priority
              />
              كلية الهندسة
            </Link>
            <button
              className="cursor-pointer sm:hidden"
              onClick={() => {
                document.getElementById("navBar").classList.toggle("hidden");
                document.getElementById("overlay").classList.toggle("hidden");
              }}
            >
              <FaRegChartBar className="font-bold" />
            </button>
          </div>
          <nav
            className="w-full flex-3 bg-gray-100 sm:bg-transparent hidden sm:flex show-nav text-[16px]"
            id="navBar"
          >
            <ul className="divide-slate-500 divide-y sm:divide-none sm:flex gap-.5 ">
              <li className="li-nav-bar">
                <Link href="/about-college">عن الكلية</Link>
              </li>
              <li className="li-nav-bar">
                <Link href="/news">أحدث الأخبار</Link>
              </li>
              <li className="li-nav-bar links-lists">
                <Link
                  href="/departments"
                  className="flex items-center justify-center gap-0.5 li-icon-rotate"
                >
                  الأقسام العلمية
                  <IoIosArrowDown />
                </Link>
                <div className="perant relative hidden z-40">
                  <div className="flex flex-col sm:absolute sm:left-[50%] sm:translate-x-[-50%] bg-white divide-slate-100 divide-y-2 rounded-md sm:w-[150%]">
                    <Link
                      href="/departments/architecture"
                      className="Link-list"
                    >
                      الهندسة المعمارية
                    </Link>
                    <Link href="/departments/civil" className="Link-list">
                      الهندسة المدنية
                    </Link>
                    <Link href="/departments/electrical" className="Link-list">
                      الهندسة الكهربائية
                    </Link>
                    <Link href="/departments/computer" className="Link-list">
                      هندسة الحاسبات و الذكاء الاصطناعي
                    </Link>
                  </div>
                </div>
              </li>
              <li className="li-nav-bar links-lists">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-0.5 li-icon-rotate"
                  prefetch={false}
                >
                  الخدمات الطلابية
                  <IoIosArrowDown />
                </Link>
                <div className="perant relative hidden z-40">
                  <div className="flex flex-col sm:absolute sm:left-[50%] sm:translate-x-[-50%] bg-white divide-slate-100 divide-y-2 rounded-md sm:w-[150%]">
                    <Link href="/" className="Link-list" prefetch={false}>
                      محاضرات إلكترونية
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      شؤون التعليم و الطلاب
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      برامج البكالوريوس
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      اتحاد الطلاب
                    </Link>
                  </div>
                </div>
              </li>
              <li className="li-nav-bar links-lists">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-0.5 li-icon-rotate"
                  prefetch={false}
                >
                  أعضاء هيئة التدريس
                  <IoIosArrowDown />
                </Link>
                <div className="perant relative hidden z-40">
                  <div className="flex flex-col sm:absolute sm:left-[50%] sm:translate-x-[-50%] bg-white divide-slate-100 divide-y-2 rounded-md sm:w-[150%]">
                    <Link href="/" className="Link-list" prefetch={false}>
                      مواقع أعضاء هيئة التدريس
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      منح وبعثات
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      منح وبعثات
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      بوابة الخدمات الجامعية
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      صندوق علاج أعضاء هيئة التدريس
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      إرشادات هامة
                    </Link>
                  </div>
                </div>
              </li>
              <li className="li-nav-bar links-lists">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-0.5 li-icon-rotate"
                  prefetch={false}
                >
                  وحدات و مراكز الكلية
                  <IoIosArrowDown />
                </Link>
                <div className="perant relative hidden z-40">
                  <div className="flex flex-col sm:absolute sm:left-[50%] sm:translate-x-[-50%] bg-white divide-slate-100 divide-y-2 rounded-md  sm:w-[150%]">
                    <Link href="/" className="Link-list" prefetch={false}>
                      مركز الاستشارات الهندسية والخدمات المقدمة
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      وحدة ضمان الجوده
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      وحدة الإنتاج
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      وحدة التقويم و الامتحانات و الطلاب
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      وحدة الخدمات الالكترونية (IT)
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      البوابة الإلكترونية
                    </Link>
                  </div>
                </div>
              </li>
              <li className="li-nav-bar links-lists">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-0.5 li-icon-rotate"
                  prefetch={false}
                >
                  الإدارة
                  <IoIosArrowDown />
                </Link>
                <div className="perant relative hidden z-40">
                  <div className="flex flex-col sm:absolute left-0 bg-white divide-slate-100 divide-y-2 rounded-md  sm:w-max">
                    <Link href="/" className="Link-list" prefetch={false}>
                      كلمة العميد
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      قطاع شؤون التعليم و الطلاب
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      قطاع شؤون الدراسات العليا
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      مجلس الكلية
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      أمين الكلية
                    </Link>
                    <Link href="/" className="Link-list" prefetch={false}>
                      الدراسات العليا
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <div
        className="hidden fixed top-0 left-0 w-full min-h-screen bg-[#000000b3] z-0 cursor-pointer"
        id="overlay"
        onClick={() => {
          document.getElementById("navBar").classList.toggle("hidden");
          document.getElementById("overlay").classList.add("hidden");
        }}
      ></div>
    </>
  );
}
export default Header;
