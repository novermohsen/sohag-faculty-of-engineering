import Image from "next/image";
import Link from "next/link";

export default async function page({ params }) {
  const { postId } = await params;
  const response = await fetch(
    `https://eng.sohag-univ.edu.eg/main/wp-json/wp/v2/posts/${postId}`
  );
  const post = await response.json();
  return (
    <section className="container my-10 bg-slate-100  p-4 rounded-md">
      <h1 className="my-5 py-2 text-4xl font-extrabold text-center border-b-3 border-amber-500 text-slate-800 ">
        {post?.title?.rendered}
      </h1>
      <div className="w-full rounded-sm overflow-hidden my-2">
        <Image
          src={post?.yoast_head_json?.og_image[0]?.url}
          width={1920}
          height={1080}
          className="aspect-video"
          alt="news image"
          priority
          fetchPriority="high"
          blurDataURL="Base64"
        />
      </div>
      <div className="text-slate-900  p-4 w-full bg-slate-200 rounded-md wordpress-descriotion">
        <div dangerouslySetInnerHTML={{ __html: post?.content?.rendered }} />
      </div>
      <div className="flex justify-between items-center m-4">
        <div>
          <p className="text-amber-600 m-3 font">
            تم النشر في : {(post?.date).slice(0, post?.date.indexOf("T"))}
          </p>
          <p className="text-amber-600 m-3 font">
            منشور بواسطة : {post?.yoast_head_json?.author}
          </p>
        </div>
        <Link
          href="/news/old-news"
          className="p-2 bg-amber-700 text-xl text-white rounded-md "
        >
          الرجوع
        </Link>
      </div>
    </section>
  );
}
