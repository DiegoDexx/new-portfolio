import { useEffect, useRef, useState } from "react";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import ChangeTheme from "../ui/changeTheme";
//importar i118n
import { useTranslation } from "react-i18next";
import "../../i118n";

const curriculum = "/files/CV_Diego2026.pdf";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => i18n.changeLanguage(e.target.value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNav = () => setOpen(false);

  return (
    <header
      className="
      container-main
        sticky top-0 z-50
        bg-white/80 dark:bg-[#181827]/80
        text-black dark:text-white
        border-b border-black/10 dark:border-white/10
        backdrop-blur
        transition-colors duration-300
      "
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 select-none" onClick={handleNav}>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-wide">
              <span>MY </span>
              <span className="text-[#F6339A]">PORTFOLIO</span>
            </h2>
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-6">
           <a
            href="/"
            className="
              
              text-sm font-medium transition
            "
            onClick={handleNav}
          >
            Home
          </a>

          <a
            href="https://oryonlabs.net"
            target="_blank"
            rel="noreferrer"
            className="
             
              text-sm font-medium transition
            "
            onClick={handleNav}
          >
            Oryon Labs
          </a>


            {/* Acciones */}
            <div className="flex items-center gap-3">
              <ChangeTheme />

              {/* Idioma */}
              <div
                className="
                  flex items-center gap-2 px-3 py-2 rounded-xl
                  bg-black/5 border border-black/10
                  dark:bg-white/10 dark:border-white/10
                  transition-colors duration-300
                "
                title="Idioma"
              >
                <span className="text-black/70 dark:text-white/80">🌐</span>
                <select
                  value={i18n.language}
                  onChange={handleLanguageChange}
                  className="bg-transparent border-none text-sm text-black/70 dark:text-white/80 focus:outline-none"
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </select>
              </div>

              {/* Download CV */}
              <a
                href={curriculum}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2 px-4 py-2 rounded-xl
                  bg-[#F6339A] text-white text-sm font-semibold
                  hover:brightness-110 transition
                "
              >
                <FaDownload />
                {t("downloadCV")}
              </a>
            </div>
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            className="
              md:hidden w-10 h-10 rounded-xl
              bg-black/5 hover:bg-black/10 border border-black/10
              dark:bg-white/10 dark:hover:bg-white/15 dark:border-white/10
              flex items-center justify-center transition
            "
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <FaTimes className="text-black dark:text-white" /> : <FaBars className="text-black dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          ref={menuRef}
          className="
            md:hidden
            border-t border-black/10 dark:border-white/10
            bg-white dark:bg-[#181827]
            text-black dark:text-white
            transition-colors duration-300
          "
        >
          <div className="container-main py-4 flex flex-col gap-3">
            <a
              href="/"
              className="text-black/80 hover:text-black dark:text-white/90 dark:hover:text-white text-sm font-medium transition"
              onClick={handleNav}
            >
              Home
            </a>

            <a
              href="https://oryonlabs.net"
              target="_blank"
              rel="noreferrer"
              className="text-black/80 hover:text-black dark:text-white/90 dark:hover:text-white text-sm font-medium transition"
              onClick={handleNav}
            >
              Oryon Labs
            </a>

            <div className="flex items-center gap-3 pt-2">
              <ChangeTheme />

              <div
                className="
                  flex items-center gap-2 px-3 py-2 rounded-xl
                  bg-black/5 border border-black/10
                  dark:bg-white/10 dark:border-white/10
                  transition-colors duration-300
                "
              >
                <span className="text-black/70 dark:text-white/80">🌐</span>
                <span className="text-sm">Español</span>
              </div>

              <a
                href={curriculum}
                target="_blank"
                rel="noreferrer"
                className="
                  ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl
                  bg-[#F6339A] text-white text-sm font-semibold
                  hover:brightness-110 transition
                "
                onClick={handleNav}
              >
                <FaDownload />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
