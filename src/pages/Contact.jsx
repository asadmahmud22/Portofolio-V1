import { useState } from "react";
import Swal from "sweetalert2";
import { Send, Instagram, Linkedin, Mail, Github, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "portofolio_asad22",
        "portofolio_asad22",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "MMbCVpYodQFmKujx0"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Berhasil!",
            text: "Pesan kamu berhasil dikirim.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
            background: "#ffffff",
            color: "#000",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Gagal mengirim email", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Terjadi kesalahan. Coba lagi nanti.",
            confirmButtonColor: "#d33",
            confirmButtonText: "Tutup",
            background: "#ffffff",
            color: "#000",
          });
        }
      );
  };

  return (
    // ✅ background full width, tidak ada max-w di level ini
    <div className="min-h-screen w-full bg-white text-black">
      {/* ✅ inner container: padding responsif, tidak ada max-w yang terlalu sempit */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-6">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl text-center font-bold mb-2">Contact</h1>
          <p className="text-gray-600 text-center text-sm sm:text-base">Mari hubungi saya</p>
          <hr className="border-gray-200 mt-6" />
        </div>

        {/* Social Media Section */}
        <h2 className="text-lg sm:text-xl mb-4 font-medium">Temukan saya di media sosial</h2>

        {/* ✅ Grid responsif: 1 kolom → 2 kolom → 2 kolom (mengisi ruang) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ContactCard
            title="Stay in Touch"
            description="Reach out via email for any inquiries or collaborations."
            link="mailto:asadmahmudakram@gmail.com"
            buttonText="Go to Gmail"
            bg="bg-red-50 border border-red-100"
            icon={<Mail size={26} />}
            buttonBg="bg-red-600 hover:bg-red-700"
          />
          <ContactCard
            title="Follow My Journey"
            description="Stay updated with my latest posts and stories on Instagram."
            link="https://instagram.com/asaddakram"
            buttonText="Go to Instagram"
            bg="bg-gradient-to-br from-purple-100 to-pink-100 border border-pink-100"
            icon={<Instagram size={26} />}
            buttonBg="bg-pink-600 hover:bg-pink-700"
          />
          <ContactCard
            title="Let's Connect"
            description="Connect for collaboration or explore my professional experience."
            link="https://linkedin.com/in/asad-mahmud-akram"
            buttonText="Go to LinkedIn"
            bg="bg-blue-50 border border-blue-100"
            icon={<Linkedin size={26} />}
            buttonBg="bg-blue-600 hover:bg-blue-700"
          />
          <ContactCard
            title="Join the Fun"
            description="Follow me on TikTok for entertaining and engaging content."
            link="https://www.tiktok.com/@asad-akram"
            buttonText="Go to TikTok"
            bg="bg-gray-50 border border-gray-200"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            }
            buttonBg="bg-gray-700 hover:bg-gray-800"
          />
          {/* ✅ GitHub — full width span 2 kolom */}
          <div className="sm:col-span-2">
            <ContactCard
              title="Explore the Code"
              description="Explore the source code for all my projects on GitHub."
              link="https://github.com/asadmahmud22"
              buttonText="Go to GitHub"
              bg="bg-gray-100 border border-gray-200"
              icon={<Github size={26} />}
              buttonBg="bg-gray-900 hover:bg-black"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-10">
          <h2 className="text-lg sm:text-xl mb-5 font-medium">Or send me a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <InputField
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="bg-gray-100 border border-gray-300 rounded p-3 text-black w-full focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none text-sm sm:text-base"
              required
            />
            <button
              type="submit"
              className="bg-gray-900 text-white w-full py-3 px-6 rounded flex items-center justify-center gap-2 hover:bg-black transition text-sm sm:text-base"
            >
              Send Email <Send size={16} />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-gray-400 text-xs sm:text-sm pb-6">
          <p>COPYRIGHT © 2025</p>
          <p>As'ad Mahmud Akram. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ title, description, link, buttonText, bg, icon, buttonBg }) => (
  <div className={`${bg} rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 h-full`}>
    <div className="flex justify-between items-start gap-3">
      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-semibold mb-1.5">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className={`${buttonBg} text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg flex items-center gap-1.5 transition text-xs sm:text-sm font-medium`}>
            {buttonText} <ArrowUpRight size={13} />
          </button>
        </a>
      </div>
      <div className="p-2 bg-black/8 rounded-lg flex-shrink-0 text-gray-600">{icon}</div>
    </div>
  </div>
);

const InputField = ({ name, value, onChange, placeholder, type = "text" }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="bg-gray-100 border border-gray-300 rounded p-3 text-black w-full focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base"
    required
  />
);

export default Contact;