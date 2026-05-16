import { useState, useEffect } from "react";
import { Code } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Award,
  Briefcase,
  LayoutDashboard,
  Mail,
} from "lucide-react";
const profileImage = "/assets/profile.jpg";
const Layout = () => {
  const [language, setLanguage] = useState("id");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"));
  };

  // Hide horizontal scrollbar globally
  useEffect(() => {
    // Add CSS to hide horizontal scrollbar
    const style = document.createElement("style");
    style.textContent = `
      html, body {
        overflow-x: hidden;
        max-width: 100vw;
      }
      
      /* Hide scrollbar for Chrome, Safari and Opera */
      ::-webkit-scrollbar:horizontal {
        display: none;
      }
      
      /* Hide horizontal scrollbar for IE, Edge and Firefox */
      * {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;     /* Firefox */
      }
      
      *::-webkit-scrollbar:horizontal {
        display: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Add custom styles to hide scrollbars
  const hideScrollbarStyle = {
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // Internet Explorer 10+
    overflowX: "hidden",
    maxWidth: "100vw",
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900 overflow-x-hidden"
      style={hideScrollbarStyle}
    >
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-7 h-7 rounded-full object-cover shadow-sm ring-1 ring-white"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></div>
          </div>
          <span className="font-medium text-gray-800 text-sm">
            As'ad Mahmud A
          </span>
          <span className="text-blue-500 text-xs">✔</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="text-gray-600 bg-white border border-gray-200 hover:border-gray-300 px-2.5 py-1 rounded-md text-xs font-medium shadow-sm hover:shadow transition-all duration-200"
          >
            {language === "en" ? "EN" : "ID"}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="space-y-1">
              <span className="block w-4 h-0.5 bg-gray-600 rounded-full"></span>
              <span className="block w-4 h-0.5 bg-gray-600 rounded-full"></span>
              <span className="block w-4 h-0.5 bg-gray-600 rounded-full"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-60 border-r border-gray-200 flex-col fixed h-full bg-white/95 backdrop-blur-sm shadow-sm overflow-x-hidden">
        <SidebarContent toggleLanguage={toggleLanguage} language={language} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="w-60 bg-white/95 backdrop-blur-md p-0 flex flex-col h-full text-gray-900 shadow-xl overflow-x-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent
              toggleLanguage={toggleLanguage}
              language={language}
            />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div
        className="md:ml-60 min-h-screen bg-white/30 overflow-x-hidden"
        style={hideScrollbarStyle}
      >
        <div className="p-4 md:p-6 lg:p-8 w-full max-w-full">
          <div className="max-w-7xl mx-auto overflow-x-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarContent = ({ toggleLanguage, language }) => {
  const location = useLocation();

  return (
    <>
      {/* Profile Section */}
      <div className="p-5 flex flex-col items-center bg-gradient-to-b from-gray-50/80 to-white/80 border-b border-gray-100">
        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-3 shadow-md ring-2 ring-white/50">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
        </div>

        <h2 className="text-lg font-bold text-gray-800 mb-0.5 text-center leading-tight">
          Frontend Developer
        </h2>
        <div className="text-gray-500 text-xs mb-3">@asadmahmudakram</div>

        <div className="flex items-center gap-2 w-full">
          <button className="hire-me-btn flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-3 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex-1 text-sm">
            <div className="status-indicator w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-sm"></div>
            Hire me
          </button>
          <button
            onClick={toggleLanguage}
            className="text-gray-600 bg-white/80 hover:bg-white border border-gray-200 hover:border-gray-300 px-2.5 py-2 rounded-lg text-xs font-medium shadow-sm hover:shadow transition-all duration-200"
          >
            {language === "en" ? "EN" : "ID"}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-3 py-2 overflow-y-auto">
        {[
          { to: "/", label: "Home", icon: Home },
          { to: "/about", label: "About", icon: User },
          { to: "/skills", label: "Skills", icon: Code },
          { to: "/achievements", label: "Achievements", icon: Award },
          { to: "/projects", label: "Projects", icon: Briefcase },
          { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
          { to: "/contact", label: "Contact", icon: Mail },
        ].map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav-item flex items-center gap-3 px-3 py-2.5 mx-1 my-0.5 rounded-lg transition-all duration-200 text-sm ${
                isActive
                  ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium shadow-md"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 hover:shadow-sm"
              }`
            }
          >
            <Icon size={16} className="flex-shrink-0" />
            <span className="flex-1 truncate">{label}</span>
            {location.pathname === to && (
              <span className="text-white/90 font-medium text-xs">•</span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100 bg-gradient-to-t from-gray-50/50 to-white/50">
        <div className="text-gray-400 text-xs text-center space-y-0.5">
          <div className="font-medium">© 2025</div>
          <div className="leading-tight">As'ad Mahmud Akram</div>
          <div className="text-gray-300">All rights reserved</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
