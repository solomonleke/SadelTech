import {
  ArrowLeft,
  Home,
  User,
  Briefcase,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function MenuPage() {
  const theme = useTheme();

  const navigationItems = [
    {
      number: "01",
      title: "Home",
      subtitle: "Building Digital Excellence",
      href: "/",
      description: "Our mission and services overview",
    },
    {
      number: "02",
      title: "About",
      subtitle: "Our Story & Values",
      href: "/about",
      description: "Meet our team and learn our approach",
    },
    {
      number: "03",
      title: "Services",
      subtitle: "What We Offer",
      href: "/services",
      description: "Technology solutions we provide",
    },
    {
      number: "04",
      title: "Portfolio",
      subtitle: "Our Work",
      href: "/portfolio",
      description: "Featured projects and case studies",
    },
    {
      number: "05",
      title: "Contact",
      subtitle: "Let's Work Together",
      href: "/contact",
      description: "Start your next project with us",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full font-inter ${theme.text.primary}`}
      style={{
        background: theme.background,
      }}
    >
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 px-4 sm:px-6 py-4 flex justify-between items-center w-full">
        <a
          href="/"
          className={`flex items-center gap-3 ${theme.hover.text} transition-colors duration-200`}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold tracking-widest text-sm md:text-base">
            SADEL
          </span>
        </a>
      </header>

      {/* Main content */}
      <div className="pt-20 px-4 sm:px-6 md:px-16 pb-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Menu header */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <span
                className={`text-4xl sm:text-6xl md:text-7xl font-light ${theme.text.decoration}`}
              >
                Menu
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Navigation
              </span>
            </h1>
            <div className="h-[2px] w-12 sm:w-16 bg-gradient-to-r from-blue-600 to-purple-600 mt-3 sm:mt-4"></div>
          </div>

          {/* Navigation grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {navigationItems.map((item, index) => (
              <a
                key={item.number}
                href={item.href}
                className={`group relative ${theme.bg.overlay} ${theme.hover.bg} border ${theme.bg.border} hover:${theme.bg.borderHover} rounded-lg p-6 sm:p-8 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl`}
              >
                {/* Section number */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <span
                    className={`text-4xl sm:text-5xl md:text-6xl font-light ${theme.text.decoration} group-hover:${theme.isDark ? "text-white/40" : "text-gray-900/40"} transition-colors duration-300`}
                  >
                    {item.number}
                  </span>
                  <ExternalLink
                    size={18}
                    className={`${theme.text.faint} group-hover:${theme.text.muted} group-hover:scale-110 transition-all duration-300 flex-shrink-0`}
                  />
                </div>

                {/* Content */}
                <div>
                  <h2
                    className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 ${theme.hover.text} transition-colors duration-300`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={`${theme.text.muted} group-hover:${theme.text.secondary} mb-2 sm:mb-3 transition-colors duration-300 text-sm sm:text-base`}
                  >
                    {item.subtitle}
                  </p>
                  <p
                    className={`text-xs sm:text-sm ${theme.text.faint} group-hover:${theme.text.muted} transition-colors duration-300`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out"></div>
              </a>
            ))}
          </div>

          {/* Social links section */}
          <div
            className={`mt-16 sm:mt-20 pt-8 sm:pt-12 border-t ${theme.bg.border}`}
          >
            <h3
              className={`text-lg sm:text-xl font-semibold mb-6 sm:mb-8 ${theme.text.primary}`}
            >
              Connect With Sadel
            </h3>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6">
              <a
                href="https://github.com/sadel"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 ${theme.text.muted} ${theme.hover.text} transition-colors duration-200 text-sm sm:text-base`}
              >
                <ExternalLink size={16} className="flex-shrink-0" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/company/sadel"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 ${theme.text.muted} ${theme.hover.text} transition-colors duration-200 text-sm sm:text-base`}
              >
                <ExternalLink size={16} className="flex-shrink-0" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:hello@sadel.com"
                className={`flex items-center gap-3 ${theme.text.muted} ${theme.hover.text} transition-colors duration-200 text-sm sm:text-base`}
              >
                <Mail size={16} className="flex-shrink-0" />
                <span>Email</span>
              </a>
              <a
                href="tel:+1234567890"
                className={`flex items-center gap-3 ${theme.text.muted} ${theme.hover.text} transition-colors duration-200 text-sm sm:text-base`}
              >
                <Phone size={16} className="flex-shrink-0" />
                <span>Phone</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
