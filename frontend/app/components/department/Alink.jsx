function Alink({ href, name }) {
  return (
    <a
      href={href}
      className="bg-sky-700 hover:bg-sky-800 duration-150 text-slate-100 px-1 py-2 rounded-md text-center "
    >
      {name}
    </a>
  );
}
export default Alink;
