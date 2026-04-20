import React from "react";
import { BadgeCheck, Link } from "lucide-react";

const projects = [
  {
    title: "Personal Website",
    description:
      "Situs pribadi dan portofolio milik As'ad Mahmud Akram, seorang pengembang web yang berfokus pada frontend development. Dibuat menggunakan React, Tailwind CSS, dan Vite, serta di-deploy melalui Vercel, situs ini menampilkan profil, keahlian, layanan, hingga proyek-proyek yang pernah dikerjakan secara profesional dan modern.",
    image: "/projects/site.png",
    tech: ["react", "tailwind", "eslint", "vite", "vercel"],
    featured: true,
    link: "https://asadmahmudakram.vercel.app",
  },
  {
    title: "Website UMKM ",
    description:
      "Website UMKM Kabupaten Klaten",
    image: "/projects/Website_Magang.png",
    tech: ["laravel", "js", "php", "mysql"],
    featured: true,
    link: "",
  },
  {
    title: "Design UI/UX APP Store Shoes",
    description:
      "Desain antarmuka pengguna (UI/UX) aplikasi mobile Shoes Store ini dibuat menggunakan Figma dan menggambarkan alur e-commerce lengkap mulai dari pendaftaran akun, pencarian produk, detail produk, proses checkout, hingga komunikasi langsung dengan penjual.",
    image: "/projects/app-shoes.png",
    tech: ["figma"],
    featured: true,
    link: "https://www.figma.com/design/7ceElGN2RimU2X0ekNFn6e/UI-UX-Wireframe-for-Mobile-E-Commerce?node-id=0-1&t=4RZxXMDp6kqbzDfw-1",
  },
  {
    title: "SiDompet - Aplikasi Pengelolaan Keuangan SiDompet",
    description: "SiDompet adalah aplikasi mobile sederhana untuk mencatat dan mengelola pemasukan serta pengeluaran harian pengguna. Dibangun menggunakan Kotlin dengan database SQLite, aplikasi ini dirancang untuk membantu pengguna dalam merencanakan dan memantau kondisi keuangan pribadi secara efisien.",
    image: "/projects/app-SiDompet.png",
    tech: ["kotlin", "sqlite"],
    link: "#",
  },
  {
    title: "Online Exam Siswa",
    description:
      "Aplikasi Online Exam Siswa adalah sistem ujian berbasis web yang memungkinkan siswa untuk login dan mengikuti ujian secara online dengan aman dan efisien. Dibangun menggunakan HTML, CSS, JavaScript, PHP, dan MySQL, aplikasi ini mendukung proses autentikasi pengguna, manajemen soal, dan penyimpanan hasil ujian.",
    image: "/projects/online-exam.png",
    tech: ["html", "css", "js", "php", "mysql", "infinity"],
    link: "https://asadmahmud.42web.io/index.php",
  },
  {
    title: "Website MyLinksPage",
    description: "Website sederhana yang menampilkan tautan pribadi pengguna dalam satu halaman, menyerupai layanan Linktree. Dibuat menggunakan HTML, CSS, dan JavaScript, website ini cocok untuk menampilkan semua akun media sosial atau portofolio secara ringkas dan mudah diakses.",
    image: "/projects/my-link.png",
    tech: ["html", "css","js"],
    link: "https://my-link-lemon.vercel.app/",
  },
  {
    title: "Website tampilan Katalog Kopi",
    description: "Sebuah website katalog sederhana bertema kopi, menampilkan berbagai jenis produk kopi beserta deskripsi singkatnya. Dibangun menggunakan HTML dan CSS, tampilan website ini dirancang untuk menarik minat pengunjung dengan desain minimalis dan modern.",
    image: "/projects/kopi-senja.png",
    tech: ["html", "css"],
    link: "https://kopisenja-rouge.vercel.app/",
  },
  {
    title: "Website tampilan Kuliner Khas Jogja",
    description: "Website informatif yang menampilkan beragam kuliner khas Yogyakarta. Dibuat menggunakan HTML dan CSS, proyek ini bertujuan untuk memperkenalkan makanan tradisional Jogja dengan visual menarik dan layout sederhana.",
    image: "/projects/kuliner-khas-jogja.png",
    tech: ["html", "css"],
    link: "https://kuliner-jogja-rho.vercel.app/",
  },
];

const techIcons = {
  html: "/icons/html.svg",
  css: "/icons/css.svg",
  php: "/icons/php.svg",
  ts: "/icons/ts.svg",
  mysql: "/icons/mysql.svg",
  js: "/icons/js.svg",
  react: "/icons/react.svg",
  vue: "/icons/vue.svg",
  next: "/icons/nextjs.svg",
  tailwind: "/icons/tailwind.svg",
  vercel: "/icons/vercel.svg",
  infinity: "/icons/infinity.svg",
  eslint: "/icons/eslint.svg",
  vite: "/icons/vite.svg",
  kotlin: "/icons/kotlin.svg",
  figma: "/icons/figma.svg",
  sqlite: "/icons/sqlite.svg",
};

const Projects = () => {
  return (
    <div className="text-white ">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      <p className="text-gray-400 mb-6 text-center">
        Several projects that I have worked on, both private and open source.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/30 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-md hover:scale-[1.02] transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-45 object-cover rounded-md mb-3"
            />

            {project.featured && (
              <div className="absolute top-2 right-2 bg-blue-600 text-xs px-2 py-1 rounded-full">
                <BadgeCheck size={12} className="inline-block mr-1" />
                Featured
              </div>
            )}

            <h3 className="text-md font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech, index) => (
                <img
                  key={index}
                  src={techIcons[tech]}
                  alt={tech}
                  title={tech}
                  className="w-5 h-5"
                />
              ))}
            </div>
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-sm text-blue-400 hover:underline"
              >
                <Link size={14} />
                Visit Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
