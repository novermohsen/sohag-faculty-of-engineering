export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-10 h-10 border-6 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">جارٍ تحميل الصفحة</p>
    </div>
  );
}
