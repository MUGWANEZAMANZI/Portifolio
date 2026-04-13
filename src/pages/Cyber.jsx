import { useLanguage } from "../context/LanguageContext";
import ExperienceMap from "../components/ExperienceMap";

function Cyber() {
  const { language, t } = useLanguage();

  const certifications = [
    {
      title: "Quantum Business Foundations",
      entity: "IBM Quantum",
      descriptionEn: "Introduction to quantum computing concepts and value landscape for business and research applications.",
      descriptionFr: "Introduction aux concepts de l'informatique quantique et a la creation de valeur pour les applications business et recherche.",
      descriptionRw: "Intangiriro ku bitekerezo bya quantum computing n akamaro kayo mu bucuruzi no mu bushakashatsi.",
      time: "2025",
      image: "Quantum_Business_foundations.jpg"
    },
    {
      title: "Basics of Quantum Information",
      entity: "IBM Quantum",
      descriptionEn: "Core principles of quantum information, qubits, and fundamental operations relevant to quantum algorithms.",
      descriptionFr: "Principes fondamentaux de l'information quantique, des qubits et des operations de base pour les algorithmes quantiques.",
      descriptionRw: "Amahame y ibanze y amakuru ya quantum, qubits n ibikorwa by ibanze bijyanye na algorithms za quantum.",
      time: "2025",
      image: "basics_of_quantum_information.jpg"
    },
    {
      title: "Digital Forensics",
      entity: "ThinkCyber",
      descriptionEn: "Windows-focused digital forensics including acquisition & triage, registry and event log analysis, common artifacts, Volatility usage, and evidence handling (chain of custody).",
      descriptionFr: "Forensique numerique orientee Windows incluant acquisition, triage, analyse du registre et des journaux, artefacts courants, Volatility et gestion des preuves.",
      descriptionRw: "Digital forensics yibanze kuri Windows harimo acquisition, triage, isesengura rya registry na logs, gukoresha Volatility no gucunga ibimenyetso.",
      time: "6 March 2025",
      image: "windows.jpg"
    },
    {
      title: "SOC Analyst",
      entity: "ThinkCyber",
      descriptionEn: "Students mastered Windows domain operations, used Sysmon for event logging, configured firewalls and IDS, and worked with ELK and Splunk for SIEM. They also covered threat hunting with MITRE ATT&CK, log analysis, and incident response.",
      descriptionFr: "Maitrise des operations de domaine Windows, utilisation de Sysmon pour la journalisation, configuration de pare-feu et IDS, et usage de ELK et Splunk pour le SIEM. Le parcours a inclus threat hunting avec MITRE ATT&CK, analyse de logs et reponse a incident.",
      descriptionRw: "Abanyeshuri bize ibikorwa bya Windows domain, gukoresha Sysmon, firewall na IDS, ELK na Splunk muri SIEM, threat hunting hamwe na MITRE ATT&CK no gusubiza ibibazo by umutekano.",
      time: "2025",
      image: "soc.jpg"
    },
    {
      title: "Network research",
      entity: "ThinkCyber",
      descriptionEn: "Set up a system to install required applications, check network anonymity, accept scan targets, connect remotely via SSH, run Whois and port scans, and save logs locally for auditing.",
      descriptionFr: "Mise en place d'un systeme pour installer les applications requises, verifier l'anonymat reseau, accepter des cibles de scan, se connecter en SSH, executer Whois et scans de ports, puis conserver les journaux localement.",
      descriptionRw: "Kubaka sisiteme ishyiraho apps zikenewe, igenzura anonymity y urusobe, yakira scan targets, ikoresha SSH, ikora Whois na port scans kandi ikabika logs.",
      time: "2024",
      image: "network.jpg"
    },
    {
      title: "Python Fundamentals",
      entity: "ThinkCyber",
      descriptionEn: "Developed a Python tool to analyze auth logs, extract key security events, identify anomalies, and document findings with proper code comments and proof of functionality.",
      descriptionFr: "Developpement d'un outil Python pour analyser les logs d'authentification, extraire les evenements de securite, identifier les anomalies et documenter les resultats.",
      descriptionRw: "Nakoze igikoresho cya Python gisesengura auth logs, kigakuramo ibyingenzi by umutekano, kikamenya anomalies kandi kikandika ibisubizo.",
      time: "2024",
      image: "python.jpg"
    },
    {
      title: "Linux Fundamentals",
      entity: "ThinkCyber",
      descriptionEn: "Created a Bash script to display Linux version, network information, disk usage, largest directories, and CPU monitoring with periodic updates.",
      descriptionFr: "Creation d'un script Bash pour afficher la version Linux, les informations reseau, l'utilisation disque, les plus grands repertoires et le suivi CPU avec mise a jour periodique.",
      descriptionRw: "Nakoze script ya Bash yerekana Linux version, network info, disk usage, directories nini na CPU monitoring buri gihe.",
      time: "2024",
      image: "linux.jpg"
    },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 p-8">
      <div className="max-w-7xl mx-auto mb-8">
        <ExperienceMap />
      </div>
      <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">🎓 {t('cyber.title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-300"
          >
            <div className="w-full h-64 md:h-72 bg-gray-900 rounded-t-2xl grid place-items-center p-3 pb-6">
              <img
                src={cert.image}
                alt={cert.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-5 pt-2 md:pt-4">
              <h2 className="text-xl font-semibold text-cyan-300 mb-1">{cert.title}</h2>
              <h3 className="text-sm text-gray-400 mb-3">{cert.entity} • {cert.time}</h3>
              <p className="text-sm text-gray-300">{language === "fr" ? cert.descriptionFr : language === "rw" ? cert.descriptionRw : cert.descriptionEn}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cyber;