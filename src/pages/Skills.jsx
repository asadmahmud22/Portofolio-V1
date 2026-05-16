import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        {
          name: "React",
          color: "bg-cyan-400",
          description: "Membangun UI interaktif dan SPA menggunakan React hooks, component-based architecture, dan state management.",
        },
        {
          name: "Next.js",
          color: "bg-black",
          description: "Mengembangkan aplikasi web full-stack dengan SSR, SSG, dan App Router untuk performa optimal.",
        },
        {
          name: "JavaScript",
          color: "bg-yellow-400",
          description: "Menguasai ES6+, async/await, DOM manipulation, dan logika pemrograman berbasis web.",
        },
        {
          name: "TypeScript",
          color: "bg-blue-600",
          description: "Menulis kode yang lebih aman dan terstruktur dengan static typing pada proyek React dan Node.js.",
        },
        {
          name: "Tailwind CSS",
          color: "bg-teal-400",
          description: "Membangun tampilan responsif dan modern secara cepat menggunakan utility-first CSS framework.",
        },
        {
          name: "HTML / CSS",
          color: "bg-orange-500",
          description: "Fondasi kuat dalam semantic HTML5 dan CSS3 termasuk flexbox, grid, dan animasi.",
        },
      ],
    },
    {
      category: "Backend Development",
      items: [
        {
          name: "Laravel",
          color: "bg-red-500",
          description: "Membangun aplikasi web berbasis MVC menggunakan Laravel, termasuk routing, Eloquent ORM, dan Blade templating.",
        },
        {
          name: "PHP",
          color: "bg-indigo-500",
          description: "Mengembangkan aplikasi web dinamis dan sistem backend menggunakan PHP native maupun framework Laravel.",
        },
        {
          name: "Node.js",
          color: "bg-green-500",
          description: "Membangun server-side application dan REST API menggunakan Node.js dengan Express.",
        },
        {
          name: "Python",
          color: "bg-blue-400",
          description: "Menggunakan Python untuk scripting, otomasi, dan eksplorasi data sederhana.",
        },
        {
          name: "REST APIs",
          color: "bg-purple-500",
          description: "Merancang dan mengonsumsi RESTful API untuk komunikasi antar layanan frontend dan backend.",
        },
        {
          name: "MySQL",
          color: "bg-orange-400",
          description: "Merancang skema database relasional, menulis query kompleks, dan mengelola data menggunakan MySQL.",
        },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        {
          name: "Git & GitHub",
          color: "bg-orange-600",
          description: "Version control menggunakan Git dengan workflow branching, pull request, dan kolaborasi tim di GitHub.",
        },
        {
          name: "Vercel",
          color: "bg-black",
          description: "Men-deploy aplikasi React dan Next.js ke Vercel dengan konfigurasi CI/CD otomatis dari GitHub.",
        },
        {
          name: "Linux",
          color: "bg-yellow-600",
          description: "Familiar dengan environment Linux untuk development, pengelolaan file, dan perintah terminal dasar.",
        },
        {
          name: "VS Code",
          color: "bg-blue-500",
          description: "Produktif menggunakan VS Code dengan berbagai ekstensi untuk efisiensi pengembangan web.",
        },
        {
          name: "Postman",
          color: "bg-orange-500",
          description: "Menguji dan mendokumentasikan REST API menggunakan Postman selama proses pengembangan backend.",
        },
        {
          name: "InfinityFree",
          color: "bg-green-600",
          description: "Men-hosting aplikasi web berbasis PHP dan MySQL secara gratis untuk keperluan proyek dan pembelajaran.",
        },
      ],
    },
    {
      category: "Design & UX",
      items: [
        {
          name: "Figma",
          color: "bg-purple-400",
          description: "Mendesain wireframe, mockup, dan prototype UI interaktif menggunakan Figma untuk kebutuhan proyek web.",
        },
        {
          name: "UI Design",
          color: "bg-pink-400",
          description: "Menerapkan prinsip desain visual seperti tipografi, warna, spacing, dan konsistensi antarmuka.",
        },
        {
          name: "UX Principles",
          color: "bg-indigo-500",
          description: "Memahami user flow, usability, dan desain berbasis pengguna untuk menciptakan pengalaman digital yang intuitif.",
        },
        {
          name: "Adobe Photoshop",
          color: "bg-blue-700",
          description: "Mengedit dan membuat aset visual seperti banner, poster, dan gambar untuk kebutuhan desain web dan publikasi.",
        },
      ],
    },
  ];

  const additionalSkills = [
    "Bootstrap", "jQuery", "MongoDB", "Firebase",
    "Arduino", "Canva", "Notion", "Trello",
    "Microsoft Office", "Google Workspace", "Responsive Design", "SEO Basics",
  ];

  const timeline = [
    {
      year: "Mar 2025 - May 2025",
      role: "Web Development Intern",
      company: "Diskominfo Kabupaten Klaten",
      description:
        "Mengembangkan website UMKM Kabupaten Klaten menggunakan Laravel dan MySQL, serta berkolaborasi dengan tim dalam pengujian dan deployment aplikasi.",
    },
    {
      year: "Aug 2024 - Present",
      role: "Divisi HUMAS",
      company: "HIMATEKKOM - UTDI",
      description:
        "Mengelola komunikasi eksternal, media sosial, dan materi publikasi organisasi mahasiswa Teknologi Komputer.",
    },
    {
      year: "Jun 2022 - Sep 2022",
      role: "Asisten Teknisi Jaringan - PKL",
      company: "Diskominfo Kabupaten Klaten",
      description:
        "Membantu perbaikan infrastruktur jaringan di lapangan dan memastikan konektivitas layanan publik tetap stabil.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4 text-black">My Skills</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Teknologi dan alat yang saya gunakan untuk menciptakan pengalaman
            digital yang luar biasa.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl border border-gray-200 p-6 hover:border-green-500 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-6 text-black flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-600 mr-3 animate-pulse"></span>
                {skillCategory.category}
              </h2>
              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-green-400 transition-all duration-200"
                  >
                    <span
                      className={`mt-1 w-3 h-3 rounded-full flex-shrink-0 ${skill.color}`}
                    ></span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {skill.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-gray-100 rounded-xl border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Additional Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-200 rounded-full text-sm border border-gray-300 hover:border-green-500 hover:text-green-600 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="bg-gray-100 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold mb-8 text-black">
            Experience Timeline
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-green-500"
              >
                <div className="absolute -left-2.5 top-1 w-4 h-4 rounded-full bg-green-500 border-4 border-white"></div>
                <div className="mb-1">
                  <span className="text-sm text-green-600">{item.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-black">{item.role}</h3>
                <p className="text-gray-600 mb-2">{item.company}</p>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;