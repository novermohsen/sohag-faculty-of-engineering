import Link from "next/link";

export default function notFound() {
  return (
    <section className="w-full min-h-screen grid place-items-center bg-gray-200">
      <div>
        <h1 className="text-2xl sm:text-3xl text-center md:text-4xl lg:text-6xl font-extrabold text-amber-700">
          عفواً الصفحة غير موجودة !
        </h1>
        <Link
          key={2}
          href="/"
          className="block text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl p-2 mt-8 bg-amber-700 text-white"
        >
          الرجوع للصفحة الرئيسية
        </Link>
      </div>
    </section>
  );
}
