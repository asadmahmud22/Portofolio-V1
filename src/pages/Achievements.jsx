import { useState } from "react";
import { Search, Filter, X } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Belajar Dasar Pemrograman Javascript",
    org: "Dicoding Indonesia",
    date: "May 19, 2025 - May 19 2028",
    img: "/certs/dicoding-dasar-javascript.jpg",
    link: "https://www.dicoding.com/certificates/1RXYE8RLQZVM",
    category: "bootcamp",
  },
  {
    id: 2,
    title: "Belajar Dasar Pemrograman Web",
    org: "Dicoding Indonesia",
    date: "January 2025",
    img: "/certs/dicoding-dasar-web.jpg",
    link: "https://www.dicoding.com/certificates/L4PQE4064PO1",
    category: "bootcamp",
  },
  {
    id: 3,
    title: "Belajar Dasar Pemrograman dengan Java",
    org: "Dicoding Indonesia",
    date: "May 2025",
    img: "/certs/dicocing-dasar-java.jpg",
    link: "https://www.dicoding.com/certificates/1RXYE8TRQZVM",
    category: "bootcamp",
  },
  {
    id: 4,
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    org: "Dicoding Indonesia",
    date: "May 2025",
    img: "/certs/dicoding-cloud-aws.png",
    link: "https://www.dicoding.com/certificates/JMZVE70MRPN9",
    category: "bootcamp",
  },
  {
    id: 5,
    title: "CCNA: Introduction to Networks course",
    org: "Cisco Networking Academy",
    date: "19 Desember 2024",
    img: "/certs/ccna-introduction-networks.jpg",
    link: "https://www.credly.com/badges/58e0d233-ad2a-4557-89da-718c50c48373/public_url",
    category: "bootcamp",
  },
  {
    id: 6,
    title: "Introduction to UX Research",
    org: "MySkill Short Class",
    date: "July 2025",
    img: "/certs/MySkill-Introduction-to-UX-Research.png",
    link: "",
    category: "bootcamp",
  },
  {
    id: 7,
    title: "Wireframing in UI/UX Design",
    org: "MySkill Short Class",
    date: "May 2025",
    img: "/certs/myskill-uiux-wireframing.jpg",
    link: "",
    category: "bootcamp",
  },
  {
    id: 8,
    title: "Data Visualization with Looker Data Studio",
    org: "MySkill Short Class",
    date: "May 2025",
    img: "/certs/MySkill-Data-Visualization-with-Looker-Data-Studio.png",
    link: "",
    category: "bootcamp",
  },
  {
    id: 9,
    title: "Website Development: Front End",
    org: "MySkill Short Class",
    date: "June 17, 2025",
    img: "/certs/MySkill-Website-Development-Frontend.png",
    link: "",
    category: "bootcamp",
  },
  {
    id: 10,
    title: "Guide to Learn SQL with AI at DQLab",
    org: "DQLab (berkolaborasi dengan Xeratic dan Universitas Multimedia Nusantara)",
    date: "05 Mei 2025",
    img: "/certs/dqlab-sql-ai.jpg",
    link: "",
    category: "bootcamp",
  },
  {
    id: 11,
    title:
      "Juara 2 Lomba Desain Poster bertema Keselamatan dan Kesehatan Kerja (K3)",
    org: "STIKES Mitra Husada Karanganyar",
    date: "February 2025",
    img: "/certs/penghargaan-juara2-desain-poster-k3.png",
    link: "",
    category: "competition",
  },
  {
    id: 12,
    title:
      "Peserta Lomba desain poster dengan tema “Keselamatan dan Kesehatan Kerja",
    org: "Himpunan Mahasiswa Program Studi Keselamatan dan Kesehatan Kerja (K3), STIKES Mitra Husada Karanganyar",
    date: "February 2025",
    img: "/certs/peserta-kompetisi-desain-poster.jpg",
    link: "",
    category: "competition",
  },
  {
    id: 13,
    title: "Participant Infographic Poster, 4C National Competition 2024",
    org: " Universitas Brawijaya",
    date: "December 2025",
    img: "/certs/peserta-4C-2024-bidang-poster-infografis.jpg",
    link: "",
    category: "competition",
  },
  {
    id: 14,
    title: "Sertifikat Praktek Kerja Lapangan",
    org: "Dinas Komunikasi dan Informatika Kabupaten Klaten",
    date: "20 Juni 2022 – 24 September 2022",
    img: "/certs/pkl-diskominfo-klaten.jpg",
    link: "",
    category: "intern",
  },
  {
    id: 23,
    title: "Sertifikat Penghargaan Bidang Humas dan Keanggotaan",
    org: "Himpunan Mahasiswa Jurusan Teknologi Komputer (HIMATEKKOM) - Universitas Teknologi Digital Indonesia",
    date: "01 Agustus 2025",
    img: "/certs/SertifikatPH-Himatekkom_Asad-Mahmud-Akram.png",
    link: "",
    category: "organization",
  },

  {
    id: 24,
    title: "Panitia UNIFEST 2025 - Sie PDD",
    org: "UNIFEST 2025 - Universitas Teknologi Digital Indonesia",
    date: "12–13 Juli 2025",
    img: "/certs/Sertifikat-Panitia-Unifest-2025.png",
    link: "",
    category: "organization",
  },

  {
    id: 15,
    title:
      "Sertifikat Panitia Kegiatan Goes to School #6 (Introduction and Basic Training on Arduino Microcontrollers) ",
    org: "Himpunan Mahasiswa Teknologi Komputer - Universitas Teknologi Digital Indonesia",
    date: "20 Mei 2024",
    img: "/certs/panitia-gts6.jpg",
    link: "",
    category: "organization",
  },
  {
    id: 16,
    title:
      "Sertifikat Panitia Kegiatan Goes to School #7 (Let's Learn Future Technology with IoT) ",
    org: "Himpunan Mahasiswa Teknologi Komputer - Universitas Teknologi Digital Indonesia",
    date: "20 Februari 2025",
    img: "/certs/panitia-gts7.png",
    link: "",
    category: "organization",
  },
  {
    id: 17,
    title:
      "Peserta Seminar Keamanan Siber di Era Digital Peluang dan Tantangan",
    org: "CyberHub - In Universitas Teknologi Digital Indonesia",
    date: "Yogyakarta, 23 Maret 2024",
    img: "/certs/seminar-keamanan-siber-diera-digital-peluangdantantangan.png",
    link: "",
    category: "webinar and seminar",
  },
  {
    id: 18,
    title: "Peserta Seminar Peluang dan Resiko Keuangan Digital",
    org: "Universitas Teknologi Digital Indonesia",
    date: "Yogyakarta, 25 may 2025",
    img: "/certs/seminar-peluang-dan-resiko-keuangan-digital.png",
    link: "",
    category: "webinar and seminar",
  },
  {
    id: 19,
    title:
      "Peserta Webinar How to Build a Strong Personal Branding on Linkedln",
    org: "TalentaHub - Indonesia",
    date: "Yogyakarta, 15 Maret 2025",
    img: "/certs/webinar-how-to-build-a-strong-personal-branding-on-linkedln.jpg",
    link: "",
    category: "webinar and seminar",
  },
  {
    id: 20,
    title: "Webinar Nasional Inovasi Smart City Berbasis IoT",
    org: "Program Studi S1 Teknik Informatika Universitas Sains",
    date: "25 September 2024",
    img: "/certs/webinar-inovasi-smart-city-berbasis-iot.png",
    link: "",
    category: "webinar and seminar",
  },
  {
    id: 21,
    title: "Soft Skill Webinar 5 Project Management",
    org: "DBS Foundation Coding Camp 2024",
    date: "Bandung, 12 Juni 2024",
    img: "/certs/soft-skill-webinar-5-project-management-dbs-foundation-coding.png",
    link: "",
    category: "webinar and seminar",
  },
  {
    id: 22,
    title: "Soft Skill Webinar 7 Effective Communication",
    org: "DBS Foundation Coding Camp 2024",
    date: "Bandung, 26 Juni 2024",
    img: "/certs/soft-skill-webinar-7-effective-communication-dbs-foundation-coding-camp.png",
    link: "",
    category: "webinar and seminar",
  },

  // Tambahkan item lain seperti di gambar...
];

const Achievements = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(null);

  const filteredAchievements = achievements.filter(
    (ach) =>
      (filter === "all" ? true : ach.category === filter) &&
      ach.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto bg-white text-black relative z-0 min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Achievements</h1>
      <p className="mb-6 text-gray-600 text-center">
        Koleksi sertifikat dan lencana yang telah saya peroleh sepanjang
        perjalanan saya.
      </p>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        {/* Dropdown Filter */}
        <div className="relative inline-block text-left w-full md:w-64">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow px-4 py-2 bg-black/70 text-white text-sm font-medium hover:bg-black/80 focus:outline-none"
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {open && (
            <div className="origin-top-left absolute left-0 mt-2 w-full rounded-md shadow-lg bg-black/90 ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1 text-white">
                {[
                  "all",
                  "intern",
                  "bootcamp",
                  "competition",
                  "organization",
                  "webinar and seminar",
                ].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFilter(cat);
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-black/70"
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search */}
        <div className="relative w-full md:flex-1">
          <input
            type="text"
            placeholder="Cari berdasarkan judul sertifikat..."
            className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-black/30"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredAchievements.map((ach) => (
          <div
            key={ach.id}
            onClick={() => setModal(ach)}
            className="relative bg-black/20 backdrop-blur-md p-4 rounded-lg shadow-xl shadow-black border border-black/10 hover:scale-[1.02] transition"
          >
            <img
              src={ach.img}
              alt={ach.title}
              className="w-full h-46 object-cover"
            />
            <div className="p-4 text-black">
              <h3 className="text-lg font-semibold">{ach.title}</h3>
              <p className="text-sm">{ach.org}</p>
              <p className="text-xs text-gray-600">{ach.date}</p>
              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-blue-600 text-sm underline inline-block"
                  onClick={(e) => e.stopPropagation()}
                >
                  Lihat Sertifikat
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAchievements.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          Tidak ada data yang cocok.
        </p>
      )}

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="relative max-w-3xl w-full mx-4 bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black hover:text-red-500"
              onClick={() => setModal(null)}
            >
              <X size={24} />
            </button>
            <img
              src={modal.img}
              alt={modal.title}
              className="w-full object-contain max-h-[90vh]"
            />
            <div className="p-4 text-black">
              <h3 className="text-xl font-semibold">{modal.title}</h3>
              <p className="text-sm">{modal.org}</p>
              <p className="text-xs text-gray-600">{modal.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
