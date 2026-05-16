import { useState } from "react";
import { Briefcase, GraduationCap, Download } from "lucide-react";

const About = () => {
  const [visibleCareerIndexes, setVisibleCareerIndexes] = useState([]);
  const [visibleEduIndexes, setVisibleEduIndexes] = useState([]);

  const toggleCareerResponsibilities = (index) => {
    setVisibleCareerIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const toggleEduResponsibilities = (index) => {
    setVisibleEduIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const education = [
    {
      institution: "Universitas Teknologi Digital Indonesia",
      degree: "Diploma, Teknologi Komputer · GPA 3.83/4.00",
      period: "2023 - 2026",
      location: "Bantul, Daerah Istimewa Yogyakarta",
      logo: "/assets/utdi-logo.png",
      responsibilities: [
        "Meraih Juara 2 dalam lomba desain poster tingkat mahasiswa bertema Keselamatan dan Kesehatan Kerja (K3).",
        "Aktif mengikuti seminar dan workshop pengembangan teknologi komputer, keamanan jaringan, dan inovasi digital.",
        "Aktif mengikuti pelatihan mandiri dan bootcamp di luar kampus yang berfokus pada pengembangan teknologi komputer, keamanan jaringan, pengembangan frontend, dan desain UI/UX.",
        "Aktif terlibat dalam berbagai kepanitiaan organisasi, termasuk himpunan mahasiswa jurusan Teknologi Komputer dan Badan Eksekutif Mahasiswa (BEM) di kampus.",
        "Bertanggung jawab sebagai staf Public Relations HIMATEKKOM dalam mendesain materi publikasi dan mengelola komunikasi eksternal.",
        "Menjadi panitia pelaksana dalam kegiatan pelatihan Arduino dasar yang diselenggarakan oleh HIMATEKKOM di beberapa sekolah mitra.",
        "Berperan aktif dalam kepanitiaan BEM, khususnya dalam divisi acara dan dokumentasi untuk kegiatan kemahasiswaan dan pengembangan soft skill.",
      ],
      projects: [
        "Mendesain dan membangun website portofolio menggunakan React, Tailwind CSS, Vite, dan ESLint, serta di-deploy ke Vercel untuk menampilkan karya, sertifikat, dan pengalaman organisasi.",
        "Membangun sistem online exam berbasis web menggunakan HTML, CSS, JavaScript, PHP, dan MySQL, serta di-hosting di InfinityFree, dengan fitur soal dinamis, penilaian otomatis, dan rekap hasil ujian.",
      ],
      achievements: [
        "Dean's List selama 5 semester berturut-turut",
        "Juara 2 lomba desain poster K3 tingkat mahasiswa",
      ],
    },
  ];

  const careerExperiences = [
    {
      title: "Web Development Intern",
      company: "Diskominfo Kabupaten Klaten",
      location: "Klaten, Indonesia",
      period: "Mar 2025 - May 2025",
      type: "Internship",
      mode: "Onsite",
      logo: "/assets/diskominfo-logo.png",
      responsibilities: [
        "Mengembangkan website UMKM Kabupaten Klaten menggunakan framework Laravel.",
        "Merancang dan mengelola database menggunakan MySQL untuk mendukung sistem informasi UMKM.",
        "Berkolaborasi dengan tim Diskominfo dalam proses pengembangan dan pengujian aplikasi web.",
      ],
    },
    {
      title: "Divisi HUMAS Hubungan & Masyarakat",
      company:
        "Himpunan Mahasiswa Teknologi Komputer - Universitas Teknologi Digital Indonesia",
      location: "Bantul, Daerah Istimewa Yogyakarta",
      period: "Aug 2024 - Present",
      type: "Part-time",
      mode: "Onsite",
      logo: "/assets/himatekkom-logo.png",
      responsibilities: [
        "Menyusun dan mengirimkan surat kerja sama, undangan, dan proposal ke instansi eksternal.",
        "Mengelola media sosial HIMATEKKOM untuk publikasi kegiatan dan informasi penting.",
        "Menjalin komunikasi dengan organisasi lain, sponsor, media partner, serta alumni.",
      ],
      description:
        "Himpunan Mahasiswa Teknologi Komputer (HIMATEKKOM) merupakan organisasi mahasiswa di Universitas Teknologi Digital Indonesia yang mewadahi pengembangan minat, bakat, dan keterampilan mahasiswa Teknologi Komputer.",
    },
    {
      title: "Asisten Teknisi Jaringan - Praktik Kerja Lapangan",
      company: "Diskominfo Kabupaten Klaten",
      location: "Klaten, Indonesia",
      period: "Jun 2022 - Sep 2022",
      type: "Internship",
      mode: "Onsite",
      logo: "/assets/diskominfo-logo.png",
      responsibilities: [
        "Memperbaiki dan mengganti kabel jaringan yang rusak di sepanjang jalan dan titik layanan publik.",
        "Melakukan pengecekan konektivitas dan kestabilan jaringan pasca-perbaikan.",
        "Bekerja dalam tim lapangan dengan menerapkan standar keselamatan kerja dan efisiensi waktu.",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-black bg-white">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">About</h1>
        <p className="text-gray-600">Sebuah cerita pendek tentang saya</p>
        <div className="border-t border-gray-300 my-4"></div>
      </div>

      <div className="mb-12 text-gray-700 space-y-4">
        <p>
          Saya adalah mahasiswa Diploma semester 6 Program Studi Teknologi
          Komputer di Universitas Teknologi Digital Indonesia. Saya memiliki
          pengalaman dalam berbagai kegiatan organisasi kampus, didukung oleh
          kemampuan kerja sama tim dan komunikasi yang baik. Selain itu, saya
          juga memiliki minat serta pengalaman di bidang komputer, khususnya
          dalam pengembangan frontend dan desain UI/UX, yang saya tekuni melalui
          berbagai proyek dan pelatihan mandiri.
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <GraduationCap size={20} />
            Education
          </h2>
        </div>

        <p className="text-gray-600 mb-6">Riwayat pendidikan saya.</p>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-black/20 backdrop-blur-md p-4 rounded-lg shadow-xl shadow-black border border-black/10 hover:scale-[1.02] transition"
            >
              <div className="flex gap-4">
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-12 h-12 rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{edu.institution}</h3>
                  <p className="text-gray-700">{edu.degree}</p>
                  <div className="flex flex-wrap gap-x-4 text-gray-600 text-sm mt-2">
                    <div>{edu.period}</div>
                    <div>{edu.location}</div>
                  </div>

                  {edu.responsibilities && edu.responsibilities.length > 0 && (
                    <>
                      <button
                        className="mt-2 text-sm text-blue-600"
                        onClick={() => toggleEduResponsibilities(index)}
                      >
                        {visibleEduIndexes.includes(index)
                          ? "Hide activities"
                          : "Show activities"}
                      </button>
                      {visibleEduIndexes.includes(index) && (
                        <div className="mt-3">
                          <p className="text-gray-800 text-sm font-medium mb-1">
                            Activities & Responsibilities:
                          </p>
                          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                            {edu.responsibilities.map((res, idx) => (
                              <li key={idx}>{res}</li>
                            ))}
                          </ul>

                          {edu.projects?.length > 0 && (
                            <>
                              <p className="text-gray-800 text-sm font-medium mt-2 mb-1">
                                Projects:
                              </p>
                              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                {edu.projects.map((project, idx) => (
                                  <li key={idx}>{project}</li>
                                ))}
                              </ul>
                            </>
                          )}

                          {edu.achievements?.length > 0 && (
                            <>
                              <p className="text-gray-800 text-sm font-medium mt-2 mb-1">
                                Achievements:
                              </p>
                              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                {edu.achievements.map((achievement, idx) => (
                                  <li key={idx}>{achievement}</li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Briefcase size={20} />
          Career
        </h2>
        <p className="text-gray-600 mb-6">
          Pengalaman kerja dan kegiatan profesional saya.
        </p>

        <div className="space-y-4">
          {careerExperiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-black/20 backdrop-blur-md p-4 rounded-lg shadow-xl shadow-black border border-black/10 hover:scale-[1.02] transition"
            >
              <div className="flex gap-4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <p className="text-gray-700">{exp.company}</p>
                  <div className="flex flex-wrap gap-x-4 text-gray-600 text-sm mt-2">
                    <div>{exp.location}</div>
                    <div>
                      {exp.period}
                      {exp.duration ? ` · ${exp.duration}` : ""}
                    </div>
                    <div>
                      {exp.type} · {exp.mode}
                    </div>
                  </div>
                  {exp.description && (
                    <p className="mt-2 text-gray-800 text-sm">
                      {exp.description}
                    </p>
                  )}
                  {exp.responsibilities?.length > 0 && (
                    <>
                      <button
                        className="mt-2 text-sm text-blue-600"
                        onClick={() => toggleCareerResponsibilities(index)}
                      >
                        {visibleCareerIndexes.includes(index)
                          ? "Hide responsibilities"
                          : "Show responsibilities"}
                        </button>
                      {visibleCareerIndexes.includes(index) && (
                        <ul className="mt-2 list-disc list-inside text-gray-700 text-sm space-y-1">
                          {exp.responsibilities.map((res, idx) => (
                            <li key={idx}>{res}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;