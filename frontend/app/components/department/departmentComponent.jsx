import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Alink from "./Alink";

function DepartmentCompnent({
  title,
  description = [],
  specializtions = [],
  articles = [],
  type,
}) {
  let articlesComponent = articles.map((article, i) => {
    return (
      <div
        className="my-5 bg-slate-100   p-3 rounded-sm scroll-mt-60"
        id={i + 1}
        key={i}
      >
        <div className="text-amber-900  font-bold text-3xl mb-4">
          {article.article_name}:
        </div>
        <section className="BlocksRenderer">
          {<BlocksRenderer content={article.article_description} />}
        </section>
      </div>
    );
  });
  let specializtionComponent =
    specializtions.length > 0 ? (
      <div
        className="my-5 bg-slate-100 p-3 rounded-sm scroll-mt-60"
        id="specializtions"
      >
        <section className="text-2xl">
          <span className="text-amber-900 font-bold text-3xl">
            تخصصات القسم
          </span>
          :
          {specializtions.map((ele, i) => {
            return (
              <p key={i} className="my-2 text-slate-900 text-2xl">{`${i + 1}- ${
                ele.specializtion
              }.`}</p>
            );
          })}
        </section>
      </div>
    ) : null;
  let articleAnchorLinks = articles.map((article, i) => {
    return <Alink key={i} href={`#${i + 1}`} name={article.article_name} />;
  });
  return (
    <section className="container px-5 my-8">
      <h1 className="font-bold text-3xl text-center text-slate-800 border-b-2 border-slate-500 pb-3">
        القسم : {title}
      </h1>
      <nav className="w-full p-2 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2  bg-gray-300 mt-2 rounded-md font-bold">
        <Alink href="#aboutSection" name=" نبذة عن القسم" />
        <Alink href="#specializtions" name=" التخصصات" />
        {articleAnchorLinks}
      </nav>
      <div
        className="my-5 bg-slate-100 p-3 rounded-sm scroll-mt-60"
        id="aboutSection"
      >
        <section className="bg-slate-100">
          <span className="text-amber-900 font-bold text-3xl">
            نبذة عن القسم :
          </span>
          <section className="BlocksRenderer">
            {<BlocksRenderer content={description} />}
          </section>
        </section>
      </div>
      {specializtionComponent}
      {articlesComponent}
      <p className="my-5 bg-amber-600  p-3 rounded-sm text-center font-bold text-3xl">
        هذا البرنامج : {type}
      </p>
    </section>
  );
}
export default DepartmentCompnent;
