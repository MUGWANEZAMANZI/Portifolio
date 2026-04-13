import { useLanguage } from "../context/LanguageContext";
import ExperienceMap from "../components/ExperienceMap";

const webProjects = [
  {
    title: 'Mbaza',
    descriptionEn: 'Live project site.',
    descriptionFr: 'Site du projet en ligne.',
    descriptionRw: 'Urubuga rw umushinga ruri live.',
    stack: ['Laravel', 'PHP', 'Rubix ML'],
    url: 'https://mbaza.kwartisans.com/',
  },
  {
    title: 'Dorm Link',
    descriptionEn: 'Live project site.',
    descriptionFr: 'Site du projet en ligne.',
    descriptionRw: 'Urubuga rw umushinga ruri live.',
    stack: ['Web Platform', 'Maps', 'Listings'],
    url: 'https://dorm.kwartisans.com/',
  },
  {
    title: 'Souriant',
    descriptionEn: 'Live project site.',
    descriptionFr: 'Site du projet en ligne.',
    descriptionRw: 'Urubuga rw umushinga ruri live.',
    stack: ['Responsive UI', 'Web Platform', 'Product Design'],
    url: 'https://souriant.kwartisans.com/',
  },
];

const mobileApps = [
  {
    title: 'Dorm Link',
    descriptionEn: 'Find affordable dorms and hostels in Rwanda with maps and listings.',
    descriptionFr: 'Trouvez des dortoirs et hostels abordables au Rwanda avec cartes et annonces.',
    descriptionRw: 'Shaka amacumbi ahendutse mu Rwanda ukoresheje amakarita n urutonde.',
    platformEn: 'Android (Google Play)',
    platformFr: 'Android (Google Play)',
    platformRw: 'Android (Google Play)',
    stack: ['Android', 'Google Play', 'Maps'],
    storeUrl: 'https://play.google.com/store/apps/details?id=com.kigaliwebartisans.dormlink',
  },
  {
    title: 'Mbaza AI',
    descriptionEn: 'AI legal assistant providing guidance based on Rwandan laws and procedures.',
    descriptionFr: 'Assistant juridique IA offrant des conseils selon les lois et procedures rwandaises.',
    descriptionRw: 'Umufasha wa AI mu mategeko utanga ubufasha bushingiye ku mategeko n imikorere yo mu Rwanda.',
    platformEn: 'Android (Google Play)',
    platformFr: 'Android (Google Play)',
    platformRw: 'Android (Google Play)',
    stack: ['Android', 'AI Assistant', 'Google Play'],
    storeUrl: 'https://play.google.com/store/apps/details?id=com.kigaliwebartisans.mbazaai',
  },
];

const Web = () => {
  const { language, t } = useLanguage();

  const pickText = (item) => {
    if (language === "fr") return item.descriptionFr;
    if (language === "rw") return item.descriptionRw;
    return item.descriptionEn;
  };

  const pickPlatform = (item) => {
    if (language === "fr") return item.platformFr;
    if (language === "rw") return item.platformRw;
    return item.platformEn;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <ExperienceMap />
      </div>
      {/* Web Projects Section */}
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">{t('web.projectsTitle')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {webProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden"
          >
            <div className="h-28 bg-gradient-to-r from-indigo-700 to-cyan-600 grid place-items-center border-b border-gray-200">
              <p className="text-white font-semibold tracking-wide">{project.title}</p>
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-3">{pickText(project)}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500 mb-2">{t('common.techStack')}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.stack.map((s) => (
                  <span key={s} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full border border-indigo-200">
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-indigo-500 hover:underline"
              >
                {t('web.viewLive')} ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Apps Section */}
      <h1 className="text-4xl font-bold text-center text-green-600 mt-20 mb-10">{t('web.mobileTitle')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {mobileApps.map((app, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">{app.title}</h2>
              <p className="text-gray-600 mb-2">{pickText(app)}</p>
              <p className="text-sm text-gray-500 mb-3">{pickPlatform(app)}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-2">{t('common.techStack')}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {app.stack.map((s) => (
                  <span key={s} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200">
                    {s}
                  </span>
                ))}
              </div>
              {app.storeUrl !== '#' ? (
                <a
                  href={app.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-green-500 hover:underline"
                >
                  {t('web.viewStore')} ↗
                </a>
              ) : (
                <span className="inline-block text-sm text-gray-400 italic">
                  {t('web.appStoreSoon')}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Web;
