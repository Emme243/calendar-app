export const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-slate-800 text-white py-3 px-8 flex justify-between items-center z-10">
      <span className="font-semibold">Emmanuel</span>
      <button className="">
        <i className="fas fa-sign-out"></i> &nbsp;
        <span>Salir</span>
      </button>
    </nav>
  );
};
