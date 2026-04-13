import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { language } = useLanguage();
  const pick = (en, fr, rw) => (language === "fr" ? fr : language === "rw" ? rw : en);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [activeChapter, setActiveChapter] = useState(0);

  const t = {
    researcher: pick("Computer Vision & Machine Learning Researcher", "Chercheur en vision par ordinateur et machine learning", "Umushakashatsi muri Computer Vision na Machine Learning"),
    competitor: pick("Competitive Programmer with 100+ solved problems", "Programmeur competitif avec plus de 100 problemes resolus", "Umukinnyi wa porogaramu z amarushanwa ufite ibibazo birenga 100 yakemuye"),
    location: pick("Kigali, Rwanda • Research at Kigali Web Artisans", "Kigali, Rwanda • Recherche chez Kigali Web Artisans", "Kigali, Rwanda • Ubushakashatsi muri Kigali Web Artisans"),
    viewPubs: pick("View Publications (ORCID)", "Voir les publications (ORCID)", "Reba inyandiko z ubushakashatsi (ORCID)"),
    downloadCv: pick("Download CV", "Telecharger CV", "Kuramo CV"),
    contact: pick("Contact", "Contact", "Twandikire"),
    emailMe: pick("Email Me", "Envoyer un email", "Nyandikira kuri imeyili"),
    affiliation: pick("Affiliation", "Affiliation", "Aho abarizwa"),
    storyMode: pick("Interactive CV Story Mode", "Mode histoire CV interactif", "Uburyo bw inkuru ya CV"),
    riverJourney: pick("Experience River", "Riviere d experience", "Uruzi rw ubunararibonye"),
    riverHint: pick("Follow the flow from one milestone to the next.", "Suivez le flux d une etape a la suivante.", "Kurikira umugezi uva ku ntambwe imwe ujya ku yindi."),
    quickFacts: pick("Quick Facts", "Faits rapides", "Amakuru yihuse"),
    codingProfiles: pick("Coding Profiles", "Profils coding", "Konti za coding"),
    questLog: pick("Quest Log", "Journal de quetes", "Urutonde rw intego"),
    status: pick("Status", "Statut", "Imiterere"),
    selectedHighlights: pick("Selected Highlights", "Highlights selectionnes", "Ibyingenzi byatoranyijwe"),
    competitiveProgramming: pick("Competitive Programming", "Programmation competitive", "Programming y amarushanwa"),
    programmingLanguages: pick("Programming Languages Used", "Langages de programmation utilises", "Indimi za programming nkoresha"),
    primary: pick("Primary", "Principal", "Ibanze"),
    working: pick("Working", "Operationnel", "Nkoresha neza"),
    learning: pick("Learning", "En apprentissage", "Ndacyiga"),
    archiveTitle: pick("Other Work (Archive)", "Autres travaux (Archive)", "Ibindi bikorwa (Archive)"),
    archiveDesc: pick("Games, cybersecurity, web and mobile projects previously built.", "Jeux, cybersecurite, projets web et mobile realises.", "Imikino, cybersecurite, imishinga ya web na mobile yakozwe mbere."),
    visitPlatform: pick("Visit platform", "Visiter la plateforme", "Jya ku rubuga"),
    view: pick("View", "Voir", "Reba"),
    comingSoon: pick("Coming Soon", "Bientot disponible", "Biraje vuba"),
    cancel: pick("Cancel", "Annuler", "Hagarika"),
    sendMessage: pick("Send Me a Message", "M envoyer un message", "Ohereza ubutumwa"),
    subject: pick("Subject", "Sujet", "Insanganyamatsiko"),
    messagePlaceholder: pick("Your message...", "Votre message...", "Andika ubutumwa bwawe..."),
    send: pick("Send", "Envoyer", "Ohereza")
  };

  const handleSend = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:mmaudace@gmail.com?subject=${subject}&body=${body}`;
    setIsModalOpen(false);
  };

  const interests = pick(
    ["Computer Vision", "Machine Learning", "Quantum Computing", "Competitive Programming"],
    ["Vision par ordinateur", "Machine learning", "Informatique quantique", "Programmation competitive"],
    ["Computer Vision", "Machine Learning", "Quantum Computing", "Competitive Programming"]
  );

  const codingProfiles = [
    {
      platform: "LeetCode",
      detail: pick("100+ solved problems across top platforms", "100+ problemes resolus sur les principales plateformes", "100+ ibibazo byakemuwe ku mbuga zikomeye"),
      url: "https://leetcode.com/u/kM54AuXGaW/"
    },
    {
      platform: "Codeforces",
      detail: pick("Regular problem solving and contest practice", "Resolution reguliere de problemes et entrainement concours", "Gukemura ibibazo buri gihe no kwitegura amarushanwa"),
      url: "https://codeforces.com/profile/mugwaneza"
    },
    {
      platform: "HackerRank",
      detail: pick("Algorithm, SQL, and problem-solving track work", "Travail en algorithmie, SQL et problem solving", "Imyitozo ya algorithm, SQL no gukemura ibibazo"),
      url: "https://www.hackerrank.com/profile/mmaudace"
    }
  ];

  const quickFacts = [
    { label: pick("Focus", "Focus", "Intego"), value: pick("Computer Vision, ML, Quantum", "Vision par ordinateur, ML, quantique", "Computer Vision, ML, Quantum") },
    { label: pick("Competitive", "Competition", "Amarushanwa"), value: pick("100+ solved coding challenges", "100+ challenges de coding resolus", "100+ ibibazo bya coding byakemuwe") },
    { label: pick("Languages", "Langues", "Indimi"), value: "English, French, Kinyarwanda" },
    { label: "Game Design", value: pick("Former game designer at P1 Games", "Ancien game designer chez P1 Games", "Yabaye game designer muri P1 Games") },
    { label: pick("Affiliation", "Affiliation", "Aho abarizwa"), value: "Kigali Web Artisans, University of Rwanda" },
    { label: pick("Location", "Lieu", "Aho abarizwa"), value: "Kigali, Rwanda" }
  ];

  const chapters = [
    {
      name: "Prologue",
      title: pick("From Kigali to research labs", "De Kigali aux laboratoires", "Kuva i Kigali kugera mu laboratwari"),
      text: pick("I build intelligent systems that connect research and real-world utility, with a core focus on computer vision and machine learning.", "Je construis des systemes intelligents qui relient la recherche a l impact reel, avec un focus fort en vision par ordinateur et machine learning.", "Nubaka sisiteme z ubwenge zihuriza ubushakashatsi n imikoreshereze nyayo, nibanda kuri computer vision na machine learning."),
      reward: "+25 Research XP"
    },
    {
      name: "Episode I",
      title: pick("The Arena of Competitive Programming", "L arene de la programmation competitive", "Urubuga rw amarushanwa ya programming"),
      text: pick("Across LeetCode, Codeforces, and HackerRank, I solved 100+ algorithmic challenges to sharpen speed, logic, and implementation precision.", "Sur LeetCode, Codeforces et HackerRank, j ai resolu plus de 100 challenges algorithmiques pour renforcer vitesse, logique et precision d implementation.", "Kuri LeetCode, Codeforces na HackerRank, nakemuye ibibazo birenga 100 bya algorithm kugira ngo nongere umuvuduko, logic n ubunyamwuga mu gushyira mu bikorwa."),
      reward: "+35 Algorithm XP"
    },
    {
      name: "Episode II",
      title: pick("Designer of playable worlds", "Designer de mondes jouables", "Umushushanyi w isi zikinika"),
      text: pick("At P1 Games, I designed gameplay systems and collaborated on production-ready projects, merging narrative thinking with technical execution.", "Chez P1 Games, j ai concu des systemes de gameplay et collabore sur des projets prets a la production, en combinant narration et execution technique.", "Muri P1 Games, nashushanyije sisiteme za gameplay kandi nkorana n abandi ku mishinga yiteguye gukora, mpuza inkuru n ishyirwa mu bikorwa rya tekinike."),
      reward: "+20 Design XP"
    },
    {
      name: "Epilogue",
      title: pick("Current mission", "Mission actuelle", "Intego y ubu"),
      text: pick("Advance AI and computer vision research, publish practical work, and keep building products that people can use immediately.", "Faire avancer la recherche en IA et vision par ordinateur, publier des travaux concrets, et continuer a livrer des produits utiles.", "Guteza imbere ubushakashatsi muri AI na computer vision, gutangaza imirimo ifatika no gukomeza gukora products zifasha abantu."),
      reward: pick("Quest updated", "Quete mise a jour", "Intego yavuguruwe")
    }
  ];

  const currentChapter = chapters[activeChapter];

  const quests = [
    { name: pick("Solve 100+ coding challenges", "Resoudre 100+ challenges de coding", "Gukemura ibibazo bya coding birenga 100"), status: pick("Completed", "Termine", "Byarangiye"), tone: "emerald" },
    { name: pick("Publish CV/ML research outputs", "Publier des resultats en CV/ML", "Gutangaza ibisubizo by ubushakashatsi bwa CV/ML"), status: pick("In Progress", "En cours", "Biracyakorwa"), tone: "cyan" },
    { name: pick("Ship impactful AI products", "Livrer des produits IA a impact", "Gushyira hanze products za AI zifite akamaro"), status: pick("Active", "Actif", "Birakora"), tone: "amber" },
  ];

  const quickLinks = [
    { name: "LeetCode", href: "https://leetcode.com/u/kM54AuXGaW/" },
    { name: "Codeforces", href: "https://codeforces.com/profile/mugwaneza" },
    { name: "HackerRank", href: "https://www.hackerrank.com/profile/mmaudace" },
    { name: "ORCID", href: "https://orcid.org/0009-0003-0610-2382" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/mugwaneza-manzi-audace-b404671a6/" },
    { name: "GitHub", href: "https://github.com/MUGWANEZAMANZI" }
  ];

  const journeyStops = [
    {
      stage: "01",
      title: pick("Foundations", "Fondations", "Urufatiro"),
      detail: pick("Linux, Python, cybersecurity base", "Base Linux, Python, cybersecurite", "Ubumenyi bw ibanze muri Linux, Python na cybersecurite")
    },
    {
      stage: "02",
      title: "P1 Games",
      detail: pick("Gameplay systems and game design", "Systemes de gameplay et game design", "Sisiteme za gameplay na game design")
    },
    {
      stage: "03",
      title: pick("Competitive Coding", "Coding competitif", "Coding y amarushanwa"),
      detail: pick("100+ problems solved", "100+ problemes resolus", "Ibibazo birenga 100 byakemuwe")
    },
    {
      stage: "04",
      title: "Kigali Web Artisans",
      detail: pick("Applied AI products and research", "Produits IA appliques et recherche", "Products za AI zikoreshwa n ubushakashatsi")
    }
  ];

  const highlights = [
    {
      kind: pick("Research", "Recherche", "Ubushakashatsi"),
      title: pick("Computer Vision & ML research pipeline", "Pipeline de recherche en vision et ML", "Pipeline y ubushakashatsi bwa Computer Vision na ML"),
      meta: "2025",
      linkText: "ORCID",
      url: "https://orcid.org/0009-0003-0610-2382"
    },
    {
      kind: pick("Competitive Programming", "Programmation competitive", "Programming y amarushanwa"),
      title: pick("LeetCode Profile", "Profil LeetCode", "Konti ya LeetCode"),
      meta: pick("Ongoing", "En cours", "Birakomeje"),
      linkText: pick("View LeetCode", "Voir LeetCode", "Reba LeetCode"),
      url: "https://leetcode.com/u/kM54AuXGaW/"
    },
    {
      kind: pick("Competitive Programming", "Programmation competitive", "Programming y amarushanwa"),
      title: pick("Codeforces Profile", "Profil Codeforces", "Konti ya Codeforces"),
      meta: pick("Ongoing", "En cours", "Birakomeje"),
      linkText: pick("View Codeforces", "Voir Codeforces", "Reba Codeforces"),
      url: "https://codeforces.com/profile/mugwaneza"
    },
    {
      kind: pick("Competitive Programming", "Programmation competitive", "Programming y amarushanwa"),
      title: pick("HackerRank Profile", "Profil HackerRank", "Konti ya HackerRank"),
      meta: pick("Ongoing", "En cours", "Birakomeje"),
      linkText: pick("View HackerRank", "Voir HackerRank", "Reba HackerRank"),
      url: "https://www.hackerrank.com/profile/mmaudace"
    },
    {
      kind: pick("Research Project", "Projet de recherche", "Umushinga w ubushakashatsi"),
      title: "Mbaza AI — legal assistant (AI)",
      meta: pick("Applied AI", "IA appliquee", "AI ikoreshwa"),
      linkText: pick("Code", "Code", "Code"),
      url: "https://github.com/MUGWANEZAMANZI"
    },
    {
      kind: pick("Open Data", "Donnees ouvertes", "Amakuru afunguye"),
      title: pick("Coming Soon — Computer vision dataset", "Bientot disponible — Dataset vision", "Biraza vuba — dataset ya computer vision"),
      meta: pick("Open data", "Donnees ouvertes", "Amakuru afunguye"),
      linkText: pick("Overview", "Apercu", "Incamake"),
      url: "#"
    }
  ];

  const programmingLanguages = [
    { name: "Java", level: t.primary, use: pick("Algorithmic problem solving and core application logic", "Resolution de problemes algorithmiques et logique applicative", "Gukemura ibibazo bya algorithms n imikorere nyamukuru ya porogaramu") },
    { name: "Python", level: t.primary, use: pick("AI/ML research, scripting, and automation", "Recherche IA/ML, scripts et automatisation", "Ubushakashatsi bwa AI/ML, scripts na automation") },
    { name: "JavaScript", level: t.primary, use: pick("Frontend interfaces and web application behavior", "Interfaces frontend et comportement des applications web", "Imigaragarire ya frontend n imikorere ya web apps") },
    { name: "PHP", level: t.working, use: pick("Backend APIs and Laravel services", "APIs backend et services Laravel", "APIs za backend na services za Laravel") },
    { name: "C", level: t.working, use: pick("Low-level programming and performance-focused tasks", "Programmation bas niveau et taches orientees performance", "Programming yo hasi no imirimo yibanda ku muvuduko") },
    { name: "C++", level: t.working, use: pick("System-level logic and optimized implementations", "Logique systeme et implementations optimisees", "Logique ya systeme n ishyirwa mu bikorwa rinoze") },
    { name: "Brainfuck", level: t.learning, use: pick("Esoteric language experimentation and logic challenges", "Experimentation en langage esoterique et defis logiques", "Gukora igerageza mu ndimi zidasanzwe no kwitoza logic") },
    { name: "SQL", level: t.working, use: pick("Database querying and relational data modeling", "Requetes SQL et modelisation relationnelle", "Kubaza database na modelisation y amakuru afitanye isano") },
    { name: "ORM", level: t.working, use: pick("Data access layers with object-relational mapping", "Couches d acces aux donnees avec mapping objet-relationnel", "Uburyo bwo kubona amakuru ukoresheje object-relational mapping") },
    { name: "VHDL", level: t.learning, use: pick("Hardware description and digital logic exploration", "Description materielle et exploration de logique numerique", "Ibisobanuro bya hardware no gusuzuma logic digital") },
    { name: "Bash", level: t.working, use: pick("CLI workflows, scripting, and environment automation", "Flux CLI, scripts et automatisation d environnement", "Imikorere ya CLI, scripts na automation y environment") },
  ];

  const translateRole = (role) => {
    if (language === "rw") {
      const rwMap = {
        "Level Designer": "Umushushanyi w ibisabwa ku rwego",
        "Lead Game Designer": "Umuyobozi wa game design",
        "Team Leader/Designer": "Umuyobozi w itsinda / Designer",
        "Team Leader/Game Designer": "Umuyobozi w itsinda / Game designer",
        "Game Developer": "Utegura umukino",
        "SOC Analyst": "Umusesenguzi wa SOC",
        "Full Stack": "Umukora Full Stack",
        "Laravel + Rubix PHP": "Laravel + Rubix PHP"
      };
      return rwMap[role] || role;
    }
    if (language !== "fr") return role;
    const map = {
      "Level Designer": "Designer de niveaux",
      "Lead Game Designer": "Lead game designer",
      "Team Leader/Designer": "Chef d equipe / Designer",
      "Team Leader/Game Designer": "Chef d equipe / Game designer",
      "Game Developer": "Developpeur de jeux",
      "SOC Analyst": "Analyste SOC",
      "Full Stack": "Developpeur full stack",
      "Laravel + Rubix PHP": "Laravel + Rubix PHP"
    };
    return map[role] || role;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-x-hidden">
      {/* Subtle backdrop for a cleaner research aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>

      <div className="relative z-10 p-4 lg:p-6">
        {/* Hero */}
        <header className="mb-6 px-2 animate-fade-in max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-6 items-start">
            <aside className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur p-4 md:p-5">
              <img
                src="mugwaneza.jpg"
                alt="MUGWANEZA Profile"
                className="w-full h-auto object-contain rounded-2xl border border-white/15 shadow-xl"
              />

              <div className="mt-4 space-y-3 text-left">
                <div className="flex items-center gap-2 text-gray-200">
                  <span className="text-xl">📧</span>
                  <p className="text-sm">mmaudace@gmail.com</p>
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <span className="text-xl">📞</span>
                  <p className="text-sm">+250 787 652 137</p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 rounded-xl font-bold"
              >
                {t.emailMe}
              </button>
            </aside>

            <div className="text-center xl:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                MUGWANEZA MANZI Audace
              </h1>
              <p className="mt-2 text-base md:text-lg text-gray-300 font-medium">
                {t.researcher}
              </p>
              <p className="mt-1 text-base md:text-lg text-cyan-300 font-semibold">
                {t.competitor}
              </p>
              <p className="mt-1 text-sm md:text-base text-gray-400">
                {t.location}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 justify-center xl:justify-start">
                {interests.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 text-gray-200 border border-white/10 text-xs md:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center xl:justify-start gap-3">
                <a
                  href="https://orcid.org/0009-0003-0610-2382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg"
                >
                  {t.viewPubs}
                </a>
                <a
                  href="/MUGWANEZA%20MANZI%20AUDACE%20CV%20(4).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10"
                >
                  {t.downloadCv}
                </a>
                <a
                  href="mailto:mmaudace@gmail.com"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold"
                >
                  {t.contact}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-violet-300/25 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-violet-950/40 p-4 text-left shadow-lg shadow-violet-950/30">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h3 className="text-violet-200 text-sm font-bold uppercase tracking-wide">{t.storyMode}</h3>
              <span className="text-xs text-violet-300 border border-violet-300/40 rounded-full px-3 py-1">{currentChapter.reward}</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              {chapters.map((chapter, idx) => (
                <button
                  key={chapter.name}
                  onClick={() => setActiveChapter(idx)}
                  className={`text-sm rounded-lg border px-3 py-2 text-left transition-all duration-300 ${idx === activeChapter
                    ? "border-violet-300 bg-violet-400/20 text-white"
                    : "border-white/10 bg-slate-900/40 text-gray-300 hover:border-violet-300/40"
                    }`}
                >
                  {chapter.name}
                </button>
              ))}
            </div>

            <div className="rounded-xl border border-violet-200/20 bg-black/20 p-4">
              <h4 className="text-base md:text-lg font-bold text-white">{currentChapter.title}</h4>
              <p className="text-sm text-gray-300 mt-2">{currentChapter.text}</p>
            </div>
          </div>

          <div className="mt-5 relative overflow-hidden rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-4 md:p-5 shadow-lg shadow-cyan-950/25">
            <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 1000 260" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="riverGlow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <polygon points="0,220 130,150 230,210 360,130 470,205 620,120 760,195 890,135 1000,220 1000,260 0,260" fill="#1e293b" opacity="0.75" />
              <polygon points="0,240 170,180 290,230 430,170 580,240 740,165 880,235 1000,190 1000,260 0,260" fill="#0f172a" opacity="0.95" />
              <path d="M30 145 C140 110, 250 195, 360 150 C470 105, 580 205, 690 155 C800 110, 900 170, 970 145" stroke="url(#riverGlow)" strokeWidth="9" fill="none" strokeLinecap="round" />
            </svg>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-cyan-200 text-sm font-bold uppercase tracking-wide">{t.riverJourney}</h3>
              <p className="text-xs text-cyan-100/80">{t.riverHint}</p>
            </div>

            <div className="relative z-10 mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
              {journeyStops.map((stop) => (
                <div key={stop.stage} className="rounded-xl border border-white/15 bg-slate-900/70 p-3 backdrop-blur-sm">
                  <p className="text-xs font-semibold text-cyan-300">Stage {stop.stage}</p>
                  <h4 className="text-sm font-bold text-white mt-1">{stop.title}</h4>
                  <p className="text-xs text-gray-300 mt-1">{stop.detail}</p>
                </div>
              ))}
            </div>

            <div className="river-arrow pointer-events-none absolute top-[54%] left-[5%] text-cyan-300 text-xl md:text-2xl">➤</div>
          </div>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-4 text-left">
            <div className="rounded-2xl border border-cyan-300/20 bg-slate-900/70 p-4">
              <h3 className="text-cyan-200 text-sm font-bold mb-3 uppercase tracking-wide">{t.quickFacts}</h3>
              <div className="space-y-2">
                {quickFacts.map((fact, idx) => (
                  <div key={idx} className="grid grid-cols-[85px_1fr] gap-2 text-sm">
                    <span className="text-gray-400">{fact.label}</span>
                    <span className="text-gray-200">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-amber-300/20 bg-slate-900/70 p-4">
              <h3 className="text-amber-200 text-sm font-bold mb-3 uppercase tracking-wide">{t.codingProfiles}</h3>
              <div className="grid grid-cols-1 gap-2">
                {codingProfiles.map((profile, idx) => (
                  <a
                    key={idx}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-200 hover:border-amber-300/40 hover:bg-white/5 transition-colors duration-300"
                  >
                    <span className="font-semibold text-white">{profile.platform}</span>
                    <span className="text-gray-400"> - {profile.detail}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-fuchsia-300/20 bg-slate-900/70 p-4">
              <h3 className="text-fuchsia-200 text-sm font-bold mb-3 uppercase tracking-wide">{t.programmingLanguages}</h3>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang) => (
                  <span
                    key={lang.name}
                    className="text-xs px-2 py-1 rounded-full bg-fuchsia-500/15 text-fuchsia-100 border border-fuchsia-300/30"
                  >
                    {lang.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-300/20 bg-slate-900/70 p-4">
              <h3 className="text-emerald-200 text-sm font-bold mb-3 uppercase tracking-wide">{t.questLog}</h3>
              <div className="grid grid-cols-1 gap-2 mb-3">
                {quests.map((quest, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg border px-3 py-2 text-sm ${quest.tone === "emerald"
                      ? "border-emerald-300/30 bg-emerald-500/10"
                      : quest.tone === "cyan"
                        ? "border-cyan-300/30 bg-cyan-500/10"
                        : "border-amber-300/30 bg-amber-500/10"
                      }`}
                  >
                    <p className="text-white">{quest.name}</p>
                    <p className="text-xs text-gray-300 mt-1">{t.status}: {quest.status}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 px-2 py-2 text-sm text-gray-200 text-center hover:border-emerald-300/40 hover:bg-white/5 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Main Section */}
        <div className="max-w-7xl mx-auto">
          <div className="space-y-10">
            <div className="animate-slide-up">
              <div className="rounded-3xl border border-fuchsia-300/20 bg-gradient-to-br from-slate-900/90 to-slate-800/80 p-6 mb-8 shadow-lg shadow-fuchsia-900/20">
                <h2 className="text-2xl font-bold text-fuchsia-200 mb-4">{t.programmingLanguages}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {programmingLanguages.map((lang) => (
                    <div key={lang.name} className="rounded-2xl border border-fuchsia-200/20 bg-slate-800/70 p-4 hover:border-fuchsia-200/40 transition-colors duration-300">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base font-semibold text-white">{lang.name}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-fuchsia-500/15 text-fuchsia-200 border border-fuchsia-300/30">{lang.level}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">{lang.use}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-slate-900/90 to-slate-800/80 p-6 mb-8 shadow-lg shadow-cyan-900/20">
                <h2 className="text-2xl font-bold text-cyan-200 mb-4">{t.competitiveProgramming}</h2>
                <p className="text-sm text-gray-300 mb-5">{pick("Consistent algorithmic problem solving with over 100 completed challenges across LeetCode, Codeforces, and HackerRank.", "Pratique algorithmique reguliere avec plus de 100 challenges termines sur LeetCode, Codeforces et HackerRank.", "Gukemura ibibazo bya algorithm buri gihe, harimo ibirenga 100 byarangiye kuri LeetCode, Codeforces na HackerRank.")}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {codingProfiles.map((profile, idx) => (
                    <div key={idx} className="rounded-2xl border border-cyan-300/20 bg-slate-800/70 p-4 hover:border-cyan-300/40 transition-colors duration-300">
                      <h3 className="text-base font-semibold text-white">{profile.platform}</h3>
                      <p className="text-xs text-gray-400 mt-1">{profile.detail}</p>
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-cyan-300 hover:text-cyan-200 text-sm"
                      >
                        {t.visitPlatform} ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-amber-300/20 bg-gradient-to-br from-slate-900/90 to-slate-800/80 p-6 shadow-lg shadow-amber-900/20">
                <h2 className="text-2xl font-bold text-amber-200 mb-4">{t.selectedHighlights}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {highlights.map((h, idx) => (
                    <div key={idx} className="rounded-2xl border border-amber-200/20 bg-slate-800/70 p-5 hover:border-amber-200/40 transition-colors duration-300">
                      <p className="text-xs text-gray-400 mb-1">{h.kind}</p>
                      <h3 className="text-base font-semibold text-white">{h.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{h.meta}</p>
                      <div className="mt-3">
                        <a
                          href={h.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-300 hover:text-amber-200 text-sm"
                        >
                          {h.linkText} ↗
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h2 className="text-xl font-bold text-gray-200 mb-4">{t.archiveTitle}</h2>
                <p className="text-sm text-gray-400 mb-6">{t.archiveDesc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[
                    ["BugsVsBunnies", "Level Designer", "https://nizitowns.itch.io/bugs-vs-bunnies-td"],
                    ["RunesVsRobots", "Lead Game Designer", "https://chiferito.itch.io/project-tower"],
                    ["License Master", "Team Leader/Designer", "https://mugwanezamanzi.itch.io/license-master"],
                    ["NanoCore", "Team Leader/Game Designer", "https://xamsav.itch.io/nanocore-defense-protocol"],
                    ["Ikinyoni Bird", "Game Developer", "https://mugwanezamanzi.itch.io/ikinyoni-bird"],
                    ["Checker", "SOC Analyst", "https://github.com/MUGWANEZAMANZI/checker"],
                    ["Agakurura Tracker", "Full Stack", "https://agakurura-production.up.railway.app/"],
                    ["Mbaza AI", "Laravel + Rubix PHP", "https://github.com/MUGWANEZAMANZI"]
                  ].map(([name, role, url], j) => (
                    <div key={j} className="rounded-2xl border border-white/10 bg-slate-800/60 p-5">
                      <h3 className="text-base font-semibold text-white">{name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{translateRole(role)}</p>
                      <div className="mt-3">
                        {url ? (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-300 hover:text-cyan-200 text-sm"
                          >
                            {t.view} ↗
                          </a>
                        ) : (
                          <span className="text-amber-400 text-sm">{t.comingSoon}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-4 animate-fade-in">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 w-full max-w-md border border-white/20 shadow-2xl transform animate-scale-in">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center space-x-2">
              <span>💬</span>
              <span>{t.sendMessage}</span>
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder={t.subject}
                className="w-full bg-slate-700/50 border border-white/20 px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder={t.messagePlaceholder}
                className="w-full bg-slate-700/50 border border-white/20 px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl transition-colors duration-300"
              >
                {t.cancel}
              </button>
              <button
                onClick={handleSend}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                {t.send} 🚀
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes river-flow {
          0% { left: 5%; transform: translateY(0); opacity: 0.8; }
          25% { transform: translateY(-4px); opacity: 1; }
          50% { transform: translateY(4px); opacity: 0.9; }
          75% { transform: translateY(-3px); opacity: 1; }
          100% { left: 92%; transform: translateY(0); opacity: 0.75; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .river-arrow {
          animation: river-flow 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
