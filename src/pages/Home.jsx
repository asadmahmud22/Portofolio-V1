import { Code, Coffee, GraduationCap, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { GiH2O } from "react-icons/gi";

const skills = [
  { name: "Html", color: "border-orange-500", logo: "/logos/html.svg" },
  { name: "JavaScript", color: "border-yellow-500", logo: "/logos/js.svg" },
  { name: "PHP", color: "border-blue-600", logo: "/logos/php.svg" },
  { name: "sqlite", color: "border-red-600", logo: "/logos/sqlite.svg" },
  { name: "Next.js", color: "border-green-500", logo: "/logos/nextjs.svg" },
  { name: "Vite", color: "border-purple-900", logo: "/logos/vite.svg" },
  { name: "GitHub", color: "border-gray-800", logo: "/logos/github.svg" },
  { name: "Kotlin", color: "border-purple-700", logo: "/logos/kotlin.svg" },
  {
    name: "TailwindCSS",
    color: "border-blue-500",
    logo: "/logos/tailwind.svg",
  },
  { name: "CSS", color: "border-blue-500", logo: "/logos/css.svg" },
  {
    name: "Autoprefixer",
    color: "border-blue-500",
    logo: "/logos/autoprefixer.svg",
  },
  { name: "Mysql", color: "border-blue-500", logo: "/logos/mysql.svg" },
  { name: "Invinity", color: "border-purple-500", logo: "/logos/infinity.svg" },
  { name: "Eslint", color: "border-blue-500", logo: "/logos/eslint.svg" },
  { name: "Vercel", color: "border-purple-700", logo: "/logos/vercel.svg" },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
      .animate-marquee-right {
        animation: marquee-right 35s linear infinite;
      }
      @media (max-width: 740px) {
        .animate-marquee { animation: marquee 15s linear infinite; }
        .animate-marquee-right { animation: marquee-right 20s linear infinite; }
      }
      .marquee-container:hover .animate-marquee,
      .marquee-container:hover .animate-marquee-right {
        animation-play-state: paused;
      }

      /* Mobile Horizontal Grid Animation */
      @media (max-width: 640px) {
        .flip-card {
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 0.5rem;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .rotateY-180 {
          transform: rotateY(180deg);
        }

        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .flip-card:hover {
          transform: translateY(-4px);
          transition: transform 0.3s ease;
        }

        .flip-card-inner {
          transition: transform 0.6s;
        }
      }
    `;
    document.head.appendChild(style);

    // Trigger animation for mobile
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      document.head.removeChild(style);
      clearTimeout(timer);
    };
  }, []);

  // Split skills into rows of 3 for mobile
  const skillRows = [];
  for (let i = 0; i < skills.length; i += 3) {
    skillRows.push(skills.slice(i, i + 3));
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Status */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
            <div className="text-sm text-gray-600">Status</div>
            <div className="text-left sm:text-right">
              <div className="text-green-600 text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                Available for work
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 my-3 sm:my-4"></div>
        </div>

        {/* Intro */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
            FULLSTACK DEVELOPER
          </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
            Hi, I'm As'ad Mahmud Akram
          </h2>
          

          <div className="flex flex-col gap-1 sm:gap-2 text-gray-600 mb-4 sm:mb-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              Based in Klaten, Indonesia <span className="text-sm">🇮🇩</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              Onsite
            </div>
          </div>

          <div className="text-gray-700 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Saya adalah mahasiswa Teknologi Komputer di Universitas Teknologi
              Digital Indonesia angkatan 2023. Sebagai seorang pengembang
              perangkat lunak yang antusias, saya memiliki fokus utama pada
              pengembangan frontend dengan pengalaman menggunakan React serta
              pemahaman berbagai teknologi web. Selain itu, saya juga memiliki
              ketertarikan dan pengalaman dalam desain UI/UX, dengan tujuan
              menciptakan antarmuka yang fungsional sekaligus menarik secara
              visual.
            </p>
          </div>
        </div>

        {/* Resume Section */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
            <div className="flex flex-wrap gap-2">
              <a
                href="/src/assets/As'ad Mahmud Akram_Portofolio.pdf"
                download
                className="bg-black/10 hover:bg-black/20 text-black text-xs sm:text-sm px-3 py-2 rounded-full border border-black/20 hover:scale-[1.02] transition flex items-center gap-2 justify-center min-w-[120px]"
              >
                <Download size={14} />
                Portfolio
              </a>
              <a
                href="/src/assets/As'ad Mahmud Akram_CV.pdf"
                download
                className="bg-black/10 hover:bg-black/20 text-black text-xs sm:text-sm px-3 py-2 rounded-full border border-black/20 hover:scale-[1.02] transition flex items-center gap-2 justify-center min-w-[120px]"
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-300 my-6 sm:my-8" />

          {/* Skills */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Code size={20} className="sm:w-6 sm:h-6" />
              <h2 className="text-lg sm:text-xl font-semibold">Skills</h2>
            </div>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              My professional skills and technologies
            </p>

            {/* Mobile: Horizontal Grid 3 Columns */}
            <div className="block sm:hidden">
              <div className="space-y-3">
                {skillRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-3 gap-2">
                    {row.map((skill, colIndex) => (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`
                          flip-card h-20 w-full
                          ${isVisible ? "animate-slide-in-right" : "opacity-0"}
                        `}
                        style={{
                          animationDelay: `${(rowIndex * 3 + colIndex) * 100}ms`,
                        }}
                      >
                        <div className="flip-card-inner h-full w-full relative">
                          {/* Front */}
                          <div
                            className={`
                            flip-card-front absolute inset-0 
                            text-black px-2 py-2 flex flex-col items-center justify-center gap-1 
                            border ${skill.color} bg-black/5 rounded-lg shadow-sm 
                            backface-hidden
                          `}
                          >
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-5 h-5 object-contain"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                            <span className="text-xs font-medium text-center leading-tight">
                              {skill.name}
                            </span>
                          </div>

                          {/* Back */}
                          <div
                            className={`
                            flip-card-back absolute inset-0 
                            text-white px-2 py-2 flex items-center justify-center
                            border ${skill.color} bg-gradient-to-br from-gray-800 to-gray-900 
                            rounded-lg shadow-sm backface-hidden
                            rotateY-180
                          `}
                          >
                            <span className="text-xs font-bold text-center">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Marquee layout (tidak ada flip animation) */}
            <div className="hidden sm:block">
              {/* Marquee left to right */}
              <div className="overflow-hidden relative marquee-container mb-4">
                <div className="flex w-max animate-marquee gap-3">
                  {skills.concat(skills).map((skill, index) => (
                    <div
                      key={index}
                      className={`text-black px-4 py-2 flex items-center gap-2 border ${skill.color} bg-black/5 backdrop-blur-md rounded-lg shadow-md whitespace-nowrap hover:bg-black/10 transition-all duration-300`}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-4 h-4 object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Marquee right to left */}
              <div className="overflow-hidden relative marquee-container">
                <div className="flex w-max animate-marquee-right gap-3">
                  {skills.concat(skills).map((skill, index) => (
                    <div
                      key={index}
                      className={`text-black px-4 py-2 flex items-center gap-2 border ${skill.color} bg-black/5 backdrop-blur-md rounded-lg shadow-md whitespace-nowrap hover:bg-black/10 transition-all duration-300`}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-4 h-4 object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Coffee size={18} className="sm:w-5 sm:h-5" />
              <h2 className="text-lg sm:text-xl font-semibold">Service</h2>
            </div>
            <div className="text-gray-700 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Sebagai seorang pengembang frontend lepas, saya berdedikasi
                untuk menciptakan situs web yang luar biasa dan solusi web
                strategis untuk merek, perusahaan, institusi, dan startup.
                Dengan pengalaman yang mendalam dalam pengembangan web modern,
                saya siap membantu mewujudkan visi digital Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
