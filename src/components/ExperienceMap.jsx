import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const ExperienceMap = () => {
    const { language } = useLanguage();
    const location = useLocation();

    const pick = (en, fr, rw) => (language === "fr" ? fr : language === "rw" ? rw : en);

    const zones = useMemo(
        () => [
            { id: "/", label: pick("Origin", "Origine", "Intangiriro") },
            { id: "/games", label: "P1 Games" },
            { id: "/certifications", label: pick("Skill Tree", "Arbre de competences", "Igiti cy ubumenyi") },
            { id: "/web", label: "Kigali Web Artisans" },
            { id: "/contact", label: pick("Alliance Gate", "Porte d alliance", "Irembo ry ubufatanye") },
        ],
        [language]
    );

    const activeIndex = zones.findIndex((z) => z.id === location.pathname);

    return (
        <section className="relative overflow-hidden rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-4 md:p-5 shadow-lg shadow-cyan-950/25 mb-8">
            <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 1000 260" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                    <linearGradient id="mapRiverGlow" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                <polygon points="0,220 130,150 230,210 360,130 470,205 620,120 760,195 890,135 1000,220 1000,260 0,260" fill="#1e293b" opacity="0.75" />
                <polygon points="0,240 170,180 290,230 430,170 580,240 740,165 880,235 1000,190 1000,260 0,260" fill="#0f172a" opacity="0.95" />
                <path d="M30 145 C140 110, 250 195, 360 150 C470 105, 580 205, 690 155 C800 110, 900 170, 970 145" stroke="url(#mapRiverGlow)" strokeWidth="9" fill="none" strokeLinecap="round" />
            </svg>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-cyan-200 text-sm font-bold uppercase tracking-wide">
                    {pick("World Experience Map", "Carte mondiale des experiences", "Ikarita y urugendo rw ubunararibonye")}
                </h3>
                <p className="text-xs text-cyan-100/80">{pick("Travel through each zone.", "Parcourez chaque zone.", "Nyura muri buri gace.")}</p>
            </div>

            <div className="relative z-10 mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">
                {zones.map((zone, idx) => (
                    <Link
                        key={zone.id}
                        to={zone.id}
                        className={`rounded-xl border p-3 backdrop-blur-sm transition-all duration-300 ${idx === activeIndex
                            ? "border-cyan-300/60 bg-cyan-500/15 shadow-[0_0_20px_rgba(34,211,238,0.28)] -translate-y-1"
                            : "border-white/15 bg-slate-900/70 hover:border-cyan-300/45 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(6,182,212,0.2)]"
                            }`}
                    >
                        <p className="text-[11px] uppercase tracking-wide text-cyan-300">Zone {idx + 1}</p>
                        <h4 className="text-sm font-bold text-white mt-1">{zone.label}</h4>
                    </Link>
                ))}
            </div>

            <div className="map-arrow pointer-events-none absolute top-[52%] left-[5%] text-cyan-300 text-xl md:text-2xl">➤</div>

            <style>{`
        @keyframes map-flow {
          0% { left: 5%; transform: translateY(0); opacity: 0.8; }
          25% { transform: translateY(-4px); opacity: 1; }
          50% { transform: translateY(4px); opacity: 0.9; }
          75% { transform: translateY(-3px); opacity: 1; }
          100% { left: 92%; transform: translateY(0); opacity: 0.75; }
        }

        .map-arrow {
          animation: map-flow 7s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default ExperienceMap;
