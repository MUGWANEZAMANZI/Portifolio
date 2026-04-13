import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  const [monthlyVisits, setMonthlyVisits] = useState(0);

  useEffect(() => {
    const monthKey = new Date().toISOString().slice(0, 7);
    const storageKey = "portfolio-visits-by-month";
    const sessionKey = `portfolio-visit-counted-${monthKey}`;

    try {
      const raw = localStorage.getItem(storageKey);
      const counts = raw ? JSON.parse(raw) : {};

      if (!sessionStorage.getItem(sessionKey)) {
        counts[monthKey] = (counts[monthKey] || 0) + 1;
        localStorage.setItem(storageKey, JSON.stringify(counts));
        sessionStorage.setItem(sessionKey, "1");
      }

      setMonthlyVisits(Number(counts[monthKey] || 0));
    } catch {
      setMonthlyVisits(0);
    }
  }, []);

  const monthLabel = useMemo(() => {
    const localeMap = {
      en: "en-US",
      fr: "fr-FR",
      rw: "rw-RW",
    };

    return new Date().toLocaleString(localeMap[language] || "en-US", {
      month: "long",
      year: "numeric",
    });
  }, [language]);

  return (
    <footer className="mt-10 border-t border-cyan-300/20 bg-slate-950/75 backdrop-blur px-4 py-6 text-white">
      <p className="text-center text-sm text-slate-200">
        &copy; {new Date().getFullYear()} MUGWANEZA MANZI Audace. {t('footer.rights')}
      </p>
      <p className="text-center text-xs text-cyan-200 mt-2">
        {t('footer.visitsThisMonth')}: {monthlyVisits} ({monthLabel})
      </p>
    </footer>
  );
};

export default Footer;
