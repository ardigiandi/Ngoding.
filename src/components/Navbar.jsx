import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-y";

  return (
    <div className={`navbar fixed w-full transition-all py-4 ${scrollActive}`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="sm:text-2xl text-xl font-bold">Ardi Keren</h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:flex-row gap-8 md:shadow-none md:text-black md:translate-y-0 md:static md:bg-transparent md:p-0 md:m-0 md:transition-none md:w-auto md:h-auto fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-400 bg-sky-400 font-bold text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="ri-home-2-line text-xl md:hidden block"></i>
              <a href="#home" className="font-medium opacity-75">
                Beranda
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-information-line text-xl md:hidden block"></i>
              <a href="#about" className="font-medium opacity-75">
                Tentang Kami
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-settings-3-line text-xl md:hidden block"></i>
              <a href="#services" className="font-medium opacity-75">
                Layanan
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-image-line text-xl md:hidden block"></i>
              <a href="#proyek" className="font-medium opacity-75">
                Proyek
              </a>
            </li>
          </ul>
          <div className="sosial flex items-center gap-2">
            <a
              href="#sosial"
              className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transtition-all"
            >
              Sosial Media
            </a>
            <i
              className="ri-menu-3-line text-3xl md:hidden block"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
