import { useLanguage } from "../context/LanguageContext";
import ExperienceMap from "../components/ExperienceMap";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br  from-gray-900 via-slate-800 to-gray-950 text-white p-6">
      <div className="w-full max-w-5xl mb-8">
        <ExperienceMap />
      </div>
      {/* Profile Image */}
      <div className="rounded-full shadow-lg overflow-hidden w-80 h-80 border-4 border-white mb-6 transform hover:scale-105 transition">
        <img src="mugwaneza.jpg" alt="Manzi Audace" className="object-cover w-full h-full" />
      </div>

      {/* Info */}
      <div className="text-center space-y-2 mb-6">
        <h1 className="text-2xl font-bold">MUGWANEZA MANZI Audace</h1>
        <p className="text-sm text-violet-200">{t('contact.location')}</p>
        <p className="text-sm text-cyan-300 font-semibold">A2SV Training</p>
      </div>

      {/* Contact Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center max-w-md w-full">
        <a href="mailto:mmaudace@gmail.com" className="bg-white text-indigo-800 py-2 px-4 rounded-full hover:bg-indigo-200 transition shadow">
          📧 {t('common.email')}
        </a>
        <a href="mailto:mugwanezamanz_223010386@gmail.com" className="bg-white text-indigo-800 py-2 px-4 rounded-full hover:bg-indigo-200 transition shadow">
          📧 mugwanezamanz_223010386@gmail.com
        </a>
        <a href="mailto:mmudace@kwartisans.com" className="bg-white text-indigo-800 py-2 px-4 rounded-full hover:bg-indigo-200 transition shadow sm:col-span-2">
          📧 mmudace@kwartisans.com
        </a>
        <a href="tel:+250787652137" className="bg-white text-indigo-800 py-2 px-4 rounded-full hover:bg-indigo-200 transition shadow">
          📞 {t('common.phone')}
        </a>
        <a href="https://github.com/MUGWANEZAMANZI" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-800 py-2 px-4 rounded-full hover:bg-indigo-200 transition shadow">
          🐱 GitHub
        </a>
        <a href="https://www.linkedin.com/in/mugwaneza-manzi-audace-b404671a6/" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-800 py-2 px-4 rounded-full hover:bg-indigo-200 transition shadow">
          💼 LinkedIn
        </a>
        <a href="https://orcid.org/0009-0003-0610-2382" target="_blank" rel="noopener noreferrer" className="bg-white text-green-800 py-2 px-4 rounded-full hover:bg-green-200 transition shadow">
          🧬 ORCID
        </a>
        <a href="https://stackoverflow.com/users/12441724/mugwaneza-manzi-audace" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-800 py-2 px-4 rounded-full hover:bg-indigo-200 transition shadow col-span-full">
          🧠 Stack Overflow
        </a>
      </div>
    </div>
  );
};

export default Contact;
