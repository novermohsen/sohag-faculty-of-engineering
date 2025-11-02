"use client";
import React, { useState, useEffect } from "react";
const slidesData = [
  {
    subTitle: "مرحباً بكم في موقع",
    title: "كلية الهندسة جامعة سوهاج",
    description: `تعمل كلية الهندسة بجامعة سوهاج على تقديم تعليم هندسي متميز وتقدم بحث
            علمي مواكب لتطورات العصر فى ضوء التنمية المستدامة والمعايير القومية
            وقيم المجتمع النبيلة`,
  },
  {
    subTitle: "",
    title: "نشأة الكلية",
    description: `أنشئت كلية الهندسة بجامعة سوهاج بالقرار الجمهوري رقم 324 في أبريل لسنه 2007 ، وبدأت الدراسة بالكلية العام
 الجامعي 2008/2009.`,
  },
  {
    subTitle: "",
    title: "رؤية الكلية",
    description: `تتطلع كلية الهندسه بجامعة سوهاج أن تكون لها السبق في تقديم مهندس ذو درجة عالية من المعرفة والقدرات والمهارات
وله القدرة علي مواكبة التقدم السريع في المجالات الهندسيه ويستطيع المنافسه علي المستوي المحلي والإقليمي والعالمي.`,
  },
];

const ImagesSlides = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };
  const goToSlide = (index) => {
    setSlideIndex(index);
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <div className="relative min-h-screen overflow-hidden">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center p-8 text-center transition-opacity duration-1000 ease-in-out landing-page ${
              index === slideIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== slideIndex}
          >
            <div className="w-full h-full font-bold flex justify-center items-center flex-col bg-opacity-50 p-8 rounded-xl transform transition-transform duration-1000 ease-out">
              <h3 className="text-xl sm:2xl md:text-4xl text-slate-50 animate-[showUp_.6s_linear]">
                {slide.subTitle || " "}
              </h3>
              <h1 className="text-2xl sm:text-3xl md:text-5xl text-amber-600  my-5 animate-[showUp_.6s_ease-in]">
                {slide.title}
              </h1>
              <p className="text-slate-300 text-xl font-normal md:text-2xl animate-[showUp_.6s_ease-in] max-w-[90%] mx-auto">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex  gap-3">
          {slidesData.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition duration-300   ${
                index === slideIndex
                  ? "bg-amber-600 scale-125 shadow-md"
                  : "bg-gray-400 hover:bg-gray-200"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesSlides;
