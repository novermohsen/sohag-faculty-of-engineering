"use client";
import { useState } from "react";
function Button({ title, onClick, state }) {
  return (
    <button
      className={`bg-sky-600 py-2 px-3 text-slate-100 rounded-md hover:bg-sky-800 duration-150 cursor-pointer flex-1 ${
        state ? "bg-sky-800" : ""
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
function Card({ data, state = false }) {
  return (
    <div
      className={`${
        state ? "block" : "hidden"
      } text-2xl font-bold text-slate-900  p-4 bg-gray-200  rounded-md`}
    >
      {data}
    </div>
  );
}
function About() {
  const [currentId, setCurrentId] = useState(1);
  return (
    <section className="container my-10 bg-slate-100  p-4 rounded-md">
      <h1 className="my-5 py-2 text-4xl font-extrabold text-center border-b-3 border-sky-500 text-slate-900">
        عن الكلية
      </h1>
      <div className="my-8 border-b-4 border-sky-600 p-2  flex flex-wrap justify-center items-center gap-3 text-xl font-bold">
        <Button
          title="نشأة الكلية"
          onClick={() => setCurrentId(1)}
          state={currentId == 1}
        />
        <Button
          title="رسالة الكلية"
          onClick={() => setCurrentId(2)}
          state={currentId == 2}
        />
        <Button
          title="رؤية الكلية"
          onClick={() => setCurrentId(3)}
          state={currentId == 3}
        />
        <Button
          title="أهداف الكلية"
          onClick={() => setCurrentId(4)}
          state={currentId == 4}
        />
      </div>
      <Card
        data={`أنشئت كلية الهندسة بجامعة سوهاج بالقرار الجمهوري رقم 324 في أبريل لسنه 2007 ، وبدأت الدراسة بالكلية العام
 الجامعي 2008/2009.`}
        state={currentId == 1}
      />
      <Card
        data={`تعمل كلية الهندسة على تقديم برامج تعليمية مُتقدمة تتميز بالجوةة العالية، وتهتم بالمتغيرات المستقبلية التي تواجه
المهندسين، وتسعى الكلية إلى تعزيز الممارسة المهنية في المجالات الهندسية المُختلفة والمساهمة في تأمين احتياجات
المجتمع، ودلك من خلال الإبداع والابتكار المعرفي ونقل المعارف الهندسية إلى الأجيال الصاعده عبر التعليم والبحث العلمي
وعبر الشراكة مع المؤسسات والهيئات الحكومية.`}
        state={currentId == 2}
      />
      <Card
        data={`تتطلع كلية الهندسه بجامعة سوهاج أن تكون لها السبق في تقديم مهندس ذو درجة عالية من المعرفة والقدرات والمهارات
وله القدرة علي مواكبة التقدم السريع في المجالات الهندسيه ويستطيع المنافسه علي المستوي المحلي والإقليمي والعالمي.`}
        state={currentId == 3}
      />
      <Card
        data={
          <>
            <p>
              1- تقديم نمودج متطور للتعليم الهندسي المرتبط باحتياجات التنمية
              ويخدمة البيئة المحيطة ويساير الاتجاهات العالمية.
            </p>
            <p>
              2- توفير برامج أكاديمية متميزة ومعتمدة تلبي متطلبات التنمية وحاجة
              سوق العمل
            </p>
            <p>3- إعداد مهندسين منافسين على المستوى المحلي والدولي.</p>
            <p>4 –توفير بيئة عمل جاذبة ومحفزة للهيئة التدريسية والباحثين.</p>
            <p>
              5- توجيه منظومة البحث العلمي لتلبية إحتياجات التنمية وخلق فرص
              اقتصادية جديدة.
            </p>
            <p>
              6- رفع مستوى الشراكة مع الجهات الحكومية والمؤسسات الأكاديمية
              والصناعة لتعزيز مصادر الدعم والتمويل.
            </p>
            <p>7 –تحسين مستوى الخدمات المساندة من موارة بشرية ومرافق</p>
            <p>
              8-إ­­­­عداد دورات للتعليم المستمر والتدريب للمهندسين في مجالات
              تخصص الكلية
            </p>
          </>
        }
        state={currentId == 4}
      />
    </section>
  );
}
export default About;
