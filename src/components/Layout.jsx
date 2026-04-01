import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Award,
  Briefcase,
  LayoutDashboard,
  MessageCircle,
  Mail,
  Globe,
} from "lucide-react";

const profileImage = "/assets/profile.jpg";

const Layout = () => {
  const location = useLocation();

  const [language, setLanguage] = useState("en");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Tambahan untuk mobile menu

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"));
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-black text-white px-5 py-3">
        <div className="flex items-center gap-2">
          <img
  src={profileImage}
  alt="Profile"
  className="w-8 h-8 rounded-full object-cover"
/>
          <span className="font-semibold">As'ad Mahmud A</span>
          <span className="text-blue-900">✔</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="text-gray-300 border border-gray-600 px-2 py-1 rounded-full text-xs"
          >
            {language === "en" ? "US" : "ID"}
          </button>
          <button
            onClick={toggleTheme}
            className="text-gray-300 border border-gray-600 p-1 rounded-full"
          >
            <Globe size={14} />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300"
          >
            <div className="space-y-1">
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Sidebar untuk Desktop */}
      <div className="hidden md:flex w-64 border-r border-gray-800 flex-col fixed h-full">
        <SidebarContent
          toggleLanguage={toggleLanguage}
          toggleTheme={toggleTheme}
          language={language}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* Sidebar untuk Mobile (Overlay) */}
      {isMenuOpen && (
  <div
    className="fixed inset-0 z-50 bg-black bg-opacity-70 flex md:hidden"
    onClick={() => setIsMenuOpen(false)} // klik area luar sidebar
  >
    <div
      className="w-64 bg-black p-6 flex flex-col h-full"
      onClick={(e) => e.stopPropagation()} // cegah close jika klik di dalam
    >
      <SidebarContent
        toggleLanguage={toggleLanguage}
        toggleTheme={toggleTheme}
        language={language}
        isDarkMode={isDarkMode}
      />
    </div>
  </div>
)}


      {/* Main Content */}
      <div className="md:ml-64 p-8 overflow-y-auto h-screen">
        <Outlet />
      </div>
    </div>
  );
};

const SidebarContent = ({ toggleLanguage, toggleTheme, language, isDarkMode }) => {
  const location = useLocation();

  return (
    <>
      <div className="p-6 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold">Web Developer</h2>
        <div className="text-gray-400 text-sm">@asadmahmudakram</div>

        <div className="flex items-center gap-3 mt-2">
          <button className="hire-me-btn flex items-center gap-2">
            <div className="status-indicator w-2 h-2 rounded-full bg-green-500"></div>
            Hire me.
          </button>

          <button
            onClick={toggleLanguage}
            className="text-gray-400 text-sm border border-gray-700 rounded-full px-3 py-1 hover:bg-gray-700/50 transition"
          >
            {language === "en" ? "us" : "id"}
          </button>

          <button
            onClick={toggleTheme}
            className="text-gray-400 text-sm border border-gray-700 rounded-full p-1 hover:bg-gray-700/50 transition"
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>

      <nav className="mt-2 flex-2">
        {[
          { to: "/", label: "Home", icon: Home },
          { to: "/about", label: "About", icon: User },
          { to: "/achievements", label: "Achievements", icon: Award },
          { to: "/projects", label: "Projects", icon: Briefcase },
         
          
          { to: "/contact", label: "Contact", icon: Mail },
        ].map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive ? "nav-item active-nav-item" : "nav-item text-gray-400"
            }
          >
            <Icon size={18} />
            <span>{label}</span>
            {location.pathname === to && <span className="ml-auto">→</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-6 text-gray-400 text-xs text-center">
        <div>COPYRIGHT © 2025</div>
        <div>As'ad Mahmud Akram. All rights reserved.</div>
      </div>
    </>
  );
};

export default Layout;
