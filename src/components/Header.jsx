import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for hamburger and close
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/games', label: t('nav.games') },
    { path: '/certifications', label: t('nav.certifications') },
    { path: '/web', label: t('nav.web') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-300/20 bg-gradient-to-r from-indigo-950/95 via-violet-900/90 to-indigo-900/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(2,6,23,0.55)]">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-cyan-100 text-2xl font-extrabold tracking-wider drop-shadow-[0_0_16px_rgba(34,211,238,0.35)]">
          MUGWANEZA
        </div>

        <div className="hidden md:flex items-center gap-2 ml-4">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${language === "en"
              ? "bg-cyan-200 text-slate-900 border-cyan-100"
              : "text-cyan-100 border-cyan-200/40 hover:bg-cyan-400/10"
              }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("fr")}
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${language === "fr"
              ? "bg-cyan-200 text-slate-900 border-cyan-100"
              : "text-cyan-100 border-cyan-200/40 hover:bg-cyan-400/10"
              }`}
          >
            FR
          </button>
          <button
            onClick={() => setLanguage("rw")}
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${language === "rw"
              ? "bg-cyan-200 text-slate-900 border-cyan-100"
              : "text-cyan-100 border-cyan-200/40 hover:bg-cyan-400/10"
              }`}
          >
            RW
          </button>
        </div>

        {/* Hamburger Button (visible on small screens) */}
        <button
          className="text-white md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (mobile & desktop) */}
        <ul
          className={`fixed md:static top-0 left-0 w-full h-screen md:h-auto bg-indigo-950/95 md:bg-transparent flex flex-col md:flex-row gap-4 md:gap-3 items-center justify-center md:justify-end p-8 md:p-0 transition-all duration-300 z-40 ${isOpen ? "flex" : "hidden md:flex"
            }`}
        >
          <li className="md:hidden flex items-center gap-2 mb-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${language === "en"
                ? "bg-cyan-200 text-slate-900 border-cyan-100"
                : "text-cyan-100 border-cyan-200/40 hover:bg-cyan-400/10"
                }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${language === "fr"
                ? "bg-cyan-200 text-slate-900 border-cyan-100"
                : "text-cyan-100 border-cyan-200/40 hover:bg-cyan-400/10"
                }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("rw")}
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${language === "rw"
                ? "bg-cyan-200 text-slate-900 border-cyan-100"
                : "text-cyan-100 border-cyan-200/40 hover:bg-cyan-400/10"
                }`}
            >
              RW
            </button>
          </li>
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-full text-cyan-50 font-semibold transition-all duration-300 border ${isActive
                    ? "bg-cyan-300/20 border-cyan-200/70 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
                    : "border-transparent hover:border-cyan-200/40 hover:bg-cyan-500/10 hover:scale-105"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
