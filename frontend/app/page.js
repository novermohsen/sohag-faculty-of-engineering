import Image from "next/image";
import DeanImage from "@/public/images/dean-word.webp";
import logo from "@/public/images/logo.webp";
import zadImage from "@/public/images/zadPhoto.webp";
import { GoMoveToStart } from "react-icons/go";
import Link from "next/link";
import { getNewsData } from "@/lib/getApiData";
import NewsPostCard from "./components/cards/NewsPostCard";
export default async function Home() {
  let newsData = await getNewsData();
  if (newsData != null) {
    newsData.length = 3;
  }
  return (
    <>
      <section className="landing-page flex justify-center items-center">
        <div className="mt-8 font-bold text-center">
          <h3 className="text-3xl md:text-4xl text-slate-50 animate-[showUp_.6s_linear]">
            مرحباً بكم فى موقع
          </h3>
          <h1 className="text-5xl md:text-6xl text-amber-600  my-5 animate-[showUp_.6s_ease-in]">
            كلية الهندسة جامعة سوهاج
          </h1>
          <p className="text-slate-300 text-xl md:text-2xl animate-[showUp_.6s_ease-in] max-w-[80%] mx-auto">
            تعمل كلية الهندسة بجامعة سوهاج على تقديم تعليم هندسي متميز وتقدم بحث
            علمي مواكب لتطورات العصر فى ضوء التنمية المستدامة والمعايير القومية
            وقيم المجتمع النبيلة
          </p>
        </div>
      </section>
      <section className="border-y-2 border-slate-100">
        <div className="container flex justify-center items-center flex-col gap-5 md:flex-row py-5 sm:py-10 md:py-20">
          <Image
            width={400}
            height={300}
            src={DeanImage}
            priority={true}
            alt="صورة السيد عميد الكلية"
            className="max-w-1/4 rounded-full size-4/5"
          />
          <div className="text-slate-800 text-center">
            <h3 className=" font-bold text-3xl mb-5">
              كلمة عميد الكلية <br />
              أ.د/طلعت علي أحمد
            </h3>
            <p className="text-xl  p-3">
              أبنائي وبناتي طلاب كلية الهندسة – جامعة سوهاج أهلاً ومرحباً بكم في
              كليتكم التي تعد من منارات العلوم الهندسية المنتشرة في أرجاء مصرنا
              الحبيبة والتي تمد قلاع الصناعة والتنمية بالمهندسين المميزين الذين
              يساهمون في بناء وتعمير وطننا العزيز فمن المعلوم أن المهندسين هم
              صناع النهضة وأساس التطوير لأوطانهم وبالتالي فإن هذا الشرف العظيم
              يمنح لكليات الهندسة التي هي المصانع المغذية للوطن بهؤلاء
              المهندسين. كما أنه من عظيم الشرف لنا ان نستقبل في هذا العام
              الدراسي الجديد أبناء أعزاء جدد متفوقين متميزين نبذل قصارى جهدنا في
              أن يكونوا نواة في نهضة مصرنا العزيزة علينا. إن كلية الهندسة بسوهاج
              تٌعد أحد كليات الهندسة المتميزة في مصر والتي تخطو الي الامام لتكون
              احد قلاع التنمية في مصرنا الغالية حيث تحتوى على 6 برامج لمرحلة
              البكالوريوس هي : برنامج الهندسة المدنية – برنامج هندسة
              الالكترونيات والاتصالات – برنامج هندسة القوي والالات الكهربية –
              برنامج هندسة الحاسبات والذكاء الاصطناعي – برنامج الهندسة المعمارية
              – برنامج هندسة الانشاءات بالإضافة الي برامج الدراسات العليا (دبلوم
              – ماجستير – دكتوراه) رسالتي لكم حب الوطن حب الوطن حب الوطن واكتساب
              المعارف والمهارات اللازمة لتحملو راية بناء وطننا الغالي وايضا
              ممارسة الأنشطة المختلفة الرياضية والفنية والعلمية.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <h3 className="text-center font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-950">
          أحدث أخبار و فعاليات الكلية
        </h3>
        <div className="my-15 container grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 p-5 md:p-2">
          {newsData.map((card, i) => {
            return (
              <NewsPostCard
                key={i}
                img={card?.thumbnail?.formats?.small?.url}
                title={card.title}
                alt={`صورة ${card.title}`}
                date={card.publishedAt}
                href={`news/${card.id}`}
              />
            );
          })}
          <Link
            href="news"
            className="mt-5 px-3 border-2 flex items-center justify-center hover:scale-105 duration-150 gap-2 py-2 rounded-sm bg-slate-800 text-white md:col-start-1 md:col-end-4 font-bold text-2xl text-center"
          >
            أحدث الأخبار و الفعاليات <GoMoveToStart />
          </Link>
        </div>
      </section>
      <section className="mt-20 p-4">
        <h3 className="text-center font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-950">
          خدمات
        </h3>
        <div className="container my-15 flex flex-col md:flex-row gap-2">
          <div className="flex-1">
            <h4 className="py-2 px-4 font-bold text-xl cursor-pointer text-center border-slate-400 border-2 text-slate-950 rounded-sm">
              خدمات الطلاب
            </h4>
            <ul className="mx-7 mt-4 text-xl text-amber-700 leading-15 font-bold list-disc">
              <li className="hover:text-amber-900 hover:underline duration-100">
                <a href="http://193.227.59.130/ZAD/Zad.aspx" target="blank">
                  جداول المحاضرات
                </a>
              </li>
              <li className="hover:text-amber-900 hover:underline duration-100">
                <a
                  href="http://www.sohag-univ.edu.eg/?page_id=1641"
                  target="blank"
                >
                  جداول الامتحانات
                </a>
              </li>
              <li className="hover:text-amber-900 hover:underline duration-100">
                <a
                  href="http://www.sohag-univ.edu.eg/?page_id=578"
                  target="blank"
                >
                  البريد الجامعي
                </a>
              </li>
              <li className="hover:text-amber-900 hover:underline duration-100">
                <a href="http://193.227.59.130/ZAD/Zad.aspx" target="blank">
                  نتائج الامتحانات
                </a>
              </li>
              <li className="hover:text-amber-900 hover:underline duration-100">
                <a href="https://www.sohag-univ.edu.eg/ar/1-2/" target="blank">
                  مكتبة مستندات
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="py-2 px-4 font-bold text-xl cursor-pointer text-center border-slate-400 border-2 text-slate-950 rounded-sm">
              خدمات أعضاء هيئة التدريس
            </h4>
            <ul className="mx-7 mt-4 text-xl text-amber-700 leading-15 font-bold list-disc">
              <li className="hover:text-amber-900 hover:underline duration-100">
                <a href="https://staffsites.sohag-univ.edu.eg/" target="blank">
                  مواقع اعضاء هيئة التدريس
                </a>
              </li>
              <li className="hover:text-amber-900 hover:underline duration-100">
                <a href="https://sso.scu.eg/" target="blank">
                  التقدم لترقيات أعضاء هيئة التدريس
                </a>
              </li>
              <li className="hover:text-amber-900 hover:underline duration-100">
                <a href="https://cdm.edu.eg/cdm/" target="blank">
                  منح و بعثات
                </a>
              </li>
              <li className="hover:text-amber-900 hover:underline duration-100">
                <a href="https://www.sohag-univ.edu.eg/ar/1-2/" target="blank">
                  بوابة الخدمات الجامعية
                </a>
              </li>
              <li className="hover:text-amber-900 hover:underline duration-100">
                <a
                  href="https://www.sohag-univ.edu.eg/ar/?page_id=3872"
                  target="blank"
                >
                  استراحة الجامعة بالقاهرة
                </a>
              </li>
              <li className="hover:text-amber-900 hover:underline duration-100">
                <a
                  href="https://www.sohag-univ.edu.eg/ar/elementor-35114/"
                  target="blank"
                >
                  صندوق علاج أعضاء هيئة التدريس
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <a
              href="http://zadeng.sohag-univ.edu.eg/User_Interface/Login.Mobile.aspx"
              className="w-full py-2 px-4 font-bold text-xl cursor-pointer text-center flex justify-center items-center flex-col border-slate-400 border-2 text-slate-950  rounded-sm "
              target="blank"
            >
              <h5> نظام زاد</h5>
              <Image
                src={zadImage}
                alt=""
                className="max-w-full"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="mt-20 px-4 py-20 bg-slate-800  text-slate-100">
        <div className="container flex justify-center items-center flex-col md:flex-row gap-8">
          <div className="flex justify-center items-center flex-col gap-3 flex-1">
            <Image
              src={logo}
              alt="شعار الكلية"
              className="max-w-[200px]"
              loading="lazy"
            />
            <h3 className="font-bold text-xl">عنوان مقر الكلية :</h3>
            <h4>
              جمهورية مصر العربية – محافظة سوهاج – مدينة سوهاج الجديدة – كلية
              الهندسة
            </h4>
            <p className="font-bold text-xl">الاتصال بنا :</p>
            <p className="my-4">
              التليفون :
              <a
                href="tel:0932338515"
                className="border border-slate-300 px-2 py-1 rounded-sm hover:scale-105 duration-100"
              >
                0932338515
              </a>
              -
              <a
                href="tel:0932330630"
                className="border border-slate-300 px-2 py-1 rounded-sm hover:scale-105 duration-100"
              >
                0932330630
              </a>
            </p>
            <p>
              البريد الإلكتروني :
              <a
                href="mailto:dean@eng.sohag.edu.eg"
                className="border border-slate-300 px-2 py-1 rounded-sm hover:scale-105 duration-100"
              >
                dean@eng.sohag.edu.eg
              </a>
            </p>
          </div>
          <div className="flex-1 h-[500px]">
            <h4 className="font-bold text-3xl text- mb-5 text-center">
              خريطة الوصول للكلية
            </h4>
            <iframe
              className="w-full h-full rounded-md"
              loading="lazy"
              src="https://maps.google.com/maps?q=%D9%83%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D8%A9%20%D8%AC%D8%A7%D9%85%D8%B9%D8%A9%20%D8%B3%D9%88%D9%87%D8%A7%D8%AC&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
              title="كلية الهندسة جامعة سوهاج"
              aria-label="كلية الهندسة جامعة سوهاج"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
