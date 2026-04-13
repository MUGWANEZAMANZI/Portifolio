import { createContext, useContext, useMemo, useState } from "react";
import { tr } from "../i18n/translations";

const LanguageContext = createContext(null);
const supportedLanguages = ["en", "fr", "rw"];

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem("site-language") || "en";
        return supportedLanguages.includes(saved) ? saved : "en";
    });

    const updateLanguage = (nextLanguage) => {
        const normalized = supportedLanguages.includes(nextLanguage) ? nextLanguage : "en";
        setLanguage(normalized);
        localStorage.setItem("site-language", normalized);
    };

    const value = useMemo(
        () => ({ language, setLanguage: updateLanguage, t: (path) => tr(language, path) }),
        [language]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }
    return ctx;
};
