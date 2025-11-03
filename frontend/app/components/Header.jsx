"use client";
import Image from "next/image";
import LogoImage from "@/public/images/logo.webp";
import Link from "next/link";
import { FaRegChartBar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
function Header() {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <>
      <header className="w-full sticky top-0 left-0 z-50 bg-gray-100 shadow-xl">
        <section className="relative max-w-7xl mx-auto flex justify-between items-center flex-col sm:flex-row font-bold">
          <div className="bg-slate-100 w-full sm:w-max flex flex-1 justify-between py-3 px-4 text-2xl relative z-7">
            <Link href="/" className="flex items-center gap-4" key={1}>
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
                setShowNavBar(!showNavBar);
              }}
            >
              <FaRegChartBar className="font-bold" />
            </button>
          </div>
          <nav
            className={`w-full flex-3 bg-gray-100 sm:bg-transparent absolute z-5 sm:static duration-200  sm:flex text-[16px] ${
              showNavBar ? "top-full" : "-top-[200%]"
            }`}
            id="navBar"
          >
            <ul className="divide-slate-900 divide-y sm:divide-none sm:flex items-center gap-.5 ">
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
                  href="/preparing"
                  className="flex items-center justify-center gap-0.5 li-icon-rotate"
                >
                  الخدمات الطلابية
                  <IoIosArrowDown />
                </Link>
                <div className="perant relative hidden z-40">
                  <div className="flex flex-col sm:absolute sm:left-[50%] sm:translate-x-[-50%] bg-white divide-slate-100 divide-y-2 rounded-md sm:w-[150%]">
                    <Link href="/preparing" className="Link-list">
                      محاضرات إلكترونية
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      شؤون التعليم و الطلاب
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      برامج البكالوريوس
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      اتحاد الطلاب
                    </Link>
                  </div>
                </div>
              </li>
              <li className="li-nav-bar links-lists">
                <Link
                  href="/preparing"
                  className="flex items-center justify-center gap-0.5 li-icon-rotate"
                >
                  أعضاء هيئة التدريس
                  <IoIosArrowDown />
                </Link>
                <div className="perant relative hidden z-40">
                  <div className="flex flex-col sm:absolute sm:left-[50%] sm:translate-x-[-50%] bg-white divide-slate-100 divide-y-2 rounded-md sm:w-[150%]">
                    <Link href="/preparing" className="Link-list">
                      مواقع أعضاء هيئة التدريس
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      منح وبعثات
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      منح وبعثات
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      بوابة الخدمات الجامعية
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      صندوق علاج أعضاء هيئة التدريس
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      إرشادات هامة
                    </Link>
                  </div>
                </div>
              </li>
              <li className="li-nav-bar links-lists">
                <Link
                  href="/preparing"
                  className="flex items-center justify-center gap-0.5 li-icon-rotate"
                >
                  وحدات و مراكز الكلية
                  <IoIosArrowDown />
                </Link>
                <div className="perant relative hidden z-40">
                  <div className="flex flex-col sm:absolute sm:left-[50%] sm:translate-x-[-50%] bg-white divide-slate-100 divide-y-2 rounded-md  sm:w-[150%]">
                    <Link href="/preparing" className="Link-list">
                      مركز الاستشارات الهندسية والخدمات المقدمة
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      وحدة ضمان الجوده
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      وحدة الإنتاج
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      وحدة التقويم و الامتحانات و الطلاب
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      وحدة الخدمات الالكترونية (IT)
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      البوابة الإلكترونية
                    </Link>
                  </div>
                </div>
              </li>
              <li className="li-nav-bar links-lists">
                <Link
                  href="/preparing"
                  className="flex items-center justify-center gap-0.5 li-icon-rotate"
                >
                  الإدارة
                  <IoIosArrowDown />
                </Link>
                <div className="perant relative hidden z-40">
                  <div className="flex flex-col sm:absolute left-0 bg-white divide-slate-100 divide-y-2 rounded-md  sm:w-max">
                    <Link href="/preparing" className="Link-list">
                      كلمة العميد
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      قطاع شؤون التعليم و الطلاب
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      قطاع شؤون الدراسات العليا
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      مجلس الكلية
                    </Link>
                    <Link href="/preparing" className="Link-list">
                      أمين الكلية
                    </Link>
                    <Link href="/preparing" className="Link-list">
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
        className={`fixed top-0 left-0 w-full min-h-screen bg-[#000000b3] z-20 cursor-pointer sm:hidden ${
          showNavBar ? "block" : "hidden"
        }`}
        onClick={() => {
          setShowNavBar(!showNavBar);
        }}
      ></div>
    </>
  );
}
export default Header;
