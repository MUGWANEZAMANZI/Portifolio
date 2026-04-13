import { useLanguage } from "../context/LanguageContext";
import ExperienceMap from "../components/ExperienceMap";

const gamesData = [
  {
    title: 'BugsVsBunnies',
    team: 'Team Kronos of CFL',
    descriptionEn: 'Bugs Vs Bunnies is an engaging tower defense game.',
    descriptionFr: 'Bugs Vs Bunnies est un jeu de tower defense engageant.',
    descriptionRw: 'Bugs Vs Bunnies ni umukino mwiza wa tower defense.',
    stack: ['Unity', 'C#', 'Tower Defense'],
    image: 'https://img.itch.zone/aW1hZ2UvMjgzNDQ3NS8xNzIxNTE4Mi5qcGc=/original/6rl8uh.jpg',
    trailer: 'https://www.youtube.com/embed/BpwBTb_BDgY',
  },
  {
    title: 'RunesVsRobots',
    team: 'Team Freezer of BSL',
    descriptionEn: 'This is a sci-fi tower defense game.',
    descriptionFr: 'Ceci est un jeu de tower defense de science-fiction.',
    descriptionRw: 'Uyu ni umukino wa sci-fi wo kurinda umunara.',
    stack: ['Unity', 'C#', 'Sci-Fi TD'],
    image: 'https://img.itch.zone/aW1nLzE4ODEzMTUxLnBuZw==/original/60PkJS.png',
    trailer: 'https://www.youtube.com/embed/Y4VPANNZZBA',
  },
  {
    title: 'License Master',
    team: 'Pulse of BSL',
    descriptionEn: 'An educational driving simulation game.',
    descriptionFr: 'Un jeu de simulation de conduite educatif.',
    descriptionRw: 'Ni umukino wo kwigisha gutwara imodoka.',
    stack: ['Unity', 'C#', 'Simulation'],
    image: 'https://img.itch.zone/aW1hZ2UvMzE5MTc4NS8xOTM2NjEzMy5qcGc=/original/rHtnvg.jpg',
    trailer: 'https://www.youtube.com/embed/fIKVIjys9qY',
  },
  {
    title: 'NanoCore',
    team: 'BitFinders of GameDev.tv',
    descriptionEn: 'Tower defense game. Place towers during build phase, spend Bytes to upgrade in attack phase, and defend the CPU from viruses.',
    descriptionFr: 'Jeu de tower defense. Placez des tours pendant la phase de construction, depensez des Bytes pour les ameliorer et defendez le CPU contre les virus.',
    descriptionRw: 'Umukino wa tower defense. Shyira amatorero, koresha Bytes uyazamure, kandi urinde CPU ku virusi.',
    stack: ['Unity', 'C#', 'Tower Defense'],
    image: 'https://img.itch.zone/aW1hZ2UvMzU3NTM4MS8yMTM0NDQ5MC5wbmc=/794x1000/qIlPrM.png',
    trailer: null,

  },
  {
    title: 'Torpedo',
    team: 'MUGWANEZA MANZI Audace',
    descriptionEn: 'In the undiscovered sea you aim to sink all ships.',
    descriptionFr: 'Dans une mer inexploree, vous devez couler tous les navires.',
    descriptionRw: 'Mu nyanja itaravumburwa ugomba kurindura amato yose.',
    stack: ['Unity', 'C#', '2D Gameplay'],
    image: 'https://img.itch.zone/aW1hZ2UvMjgzNDk0Ny8xNjkzNzM5OS5qcGc=/original/63ZG5t.jpg',
    trailer: null, // No trailer
  },
  {
    title: 'Bake',
    descriptionEn: 'Bake your cuisine and lounge.',
    descriptionFr: 'Cuisinez, patissez et detendez-vous.',
    descriptionRw: 'Teka ibiryo byawe kandi uruhuke.',
    stack: ['Unity', 'C#', 'Casual Gameplay'],
    image: 'https://img.itch.zone/aW1hZ2UvMjgyMTkwOS8xNjg1NzQ4MC5wbmc=/original/FU72D2.png',
    trailer: null, // No trailer
  },
  {
    title: 'Ikinyoni Flarping Bird',
    team: 'MUGWANEZA MANZI Audace',
    descriptionEn: 'Flary Bird follows Ikinyoni, a bold bird navigating Mars while answering questions about life in space.',
    descriptionFr: 'Flary Bird suit Ikinyoni, un oiseau audacieux sur Mars, tout en repondant a des questions sur la vie dans l espace.',
    descriptionRw: 'Flary Bird ikurikira Ikinyoni ku mubumbe wa Mars, igasubiza ibibazo ku buzima bwo mu isanzure.',
    stack: ['Unity', 'C#', 'Quiz Mechanics'],
    image: 'https://img.itch.zone/aW1hZ2UvMzMzMzE3Ny8yMDQ1OTk5MC5wbmc=/original/fF%2FHCG.png', // Optional image or placeholder
    trailer: 'https://www.youtube.com/embed/9su6s9R5PWY',
  },
  {
    title: 'The Chase – Animation Showcase',
    team: 'MUGWANEZA MANZI Audace',
    descriptionEn: 'A movie made with Unity, combining animation, storytelling, and game dev art.',
    descriptionFr: 'Un film realise avec Unity, combinant animation, narration et art du developpement de jeux.',
    descriptionRw: 'Filime yakozwe muri Unity ihuza animation, inkuru n ubuhanzi bwo gukora imikino.',
    stack: ['Unity', 'Cinematic', 'Animation'],
    image: 'https://i.ytimg.com/vi/xPTxwFbbbX4/maxresdefault.jpg',
    trailer: 'https://www.youtube.com/embed/xPTxwFbbbX4',
  },
];


const Games = () => {
  const { language, t } = useLanguage();

  const pickDescription = (game) => {
    if (language === "fr") return game.descriptionFr;
    if (language === "rw") return game.descriptionRw;
    return game.descriptionEn;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <ExperienceMap />
        <h1 className="text-4xl font-bold mb-10 text-center">🎮 {t('games.title')}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {gamesData.map((game, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{game.title}</h2>
                {game.team && (
                  <p className="text-sm text-gray-500 italic mb-2">{t('common.by')} {game.team}</p>
                )}
                <p className="text-gray-700 text-sm mb-2">{pickDescription(game)}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 mb-2">{t('common.techStack')}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {game.stack.map((s) => (
                    <span key={s} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full border border-indigo-200">
                      {s}
                    </span>
                  ))}
                </div>
                {game.trailer ? (
                  <div className="aspect-video mb-2">
                    <iframe
                      className="w-full h-full rounded-xl"
                      src={game.trailer}
                      title={game.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-200 flex items-center justify-center text-sm text-gray-600 rounded-xl mb-2">
                    🎬 {t('common.trailerSoon')}
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};


export default Games;
