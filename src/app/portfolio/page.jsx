import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function PortfolioPage() {
  const theme = useTheme();

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack web application with payment integration",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics and reporting",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com",
    },
    {
      title: "Mobile Weather App",
      description: "Cross-platform mobile app with location-based weather data",
      technologies: ["React Native", "Expo", "OpenWeather API"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/project4",
      demo: "https://project4-demo.com",
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/project5",
      demo: "https://project5-demo.com",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio site with modern design and animations",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/yourusername/project6",
      demo: "https://project6-demo.com",
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
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight">Sadel</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}
            >
              Home
            </a>
            <a
              href="/about"
              className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}
            >
              About
            </a>
            <a
              href="/services"
              className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}
            >
              Services
            </a>
            <a
              href="/portfolio"
              className={`${theme.text.primary} hover:text-blue-600 transition-colors font-medium`}
            >
              Portfolio
            </a>
            <a
              href="/contact"
              className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}
            >
              Contact
            </a>
          </nav>

          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p
            className={`text-xl leading-relaxed mb-8 ${theme.text.secondary} max-w-3xl mx-auto`}
          >
            Here are some of our favorite projects that showcase our skills and
            passion for creating innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Featured Project */}
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className={`${theme.bg.overlay} border ${theme.bg.border} rounded-lg overflow-hidden mb-8 sm:mb-12`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div
                    className={`aspect-video lg:aspect-auto ${theme.bg.overlayHover} flex items-center justify-center`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <div className="mb-3">
                      <span
                        className={`text-xs uppercase tracking-wider ${theme.text.faint}`}
                      >
                        Featured Project
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                      {project.title}
                    </h2>
                    <p className={`${theme.text.muted} mb-6 leading-relaxed`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 ${theme.bg.overlayHover} rounded-full text-xs font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 ${theme.text.muted} ${theme.hover.text} transition-colors duration-200 text-sm`}
                      >
                        <Github size={16} />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 ${theme.text.muted} ${theme.hover.text} transition-colors duration-200 text-sm`}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className={`group ${theme.bg.overlay} border ${theme.bg.border} rounded-lg overflow-hidden hover:${theme.bg.borderHover} transition-all duration-300 hover:scale-105`}
                >
                  <div
                    className={`aspect-video ${theme.bg.overlayHover} flex items-center justify-center overflow-hidden`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-current transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p
                      className={`${theme.text.muted} text-sm mb-4 line-clamp-2`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-1 ${theme.bg.overlayHover} rounded text-xs`}
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span
                          className={`px-2 py-1 ${theme.bg.overlayHover} rounded text-xs ${theme.text.faint}`}
                        >
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 ${theme.text.muted} ${theme.hover.text} transition-colors duration-200 text-xs`}
                      >
                        <Github size={14} />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 ${theme.text.muted} ${theme.hover.text} transition-colors duration-200 text-xs`}
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <h3
              className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${theme.text.primary}`}
            >
              Interested in Working Together?
            </h3>
            <p
              className={`${theme.text.muted} mb-4 sm:mb-6 text-sm sm:text-base max-w-2xl mx-auto`}
            >
              We're always excited to take on new challenges and collaborate on
              interesting projects. Let's discuss how we can bring your ideas to
              life.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-16 px-6 border-t ${theme.bg.border}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-xl tracking-tight">Sadel</span>
              </div>
              <p className={`${theme.text.secondary} max-w-md mb-6`}>
                Building digital excellence through innovative technology
                solutions and exceptional user experiences.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className={`space-y-2 ${theme.text.secondary}`}>
                <li>
                  <a
                    href="/services"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className={`space-y-2 ${theme.text.secondary}`}>
                <li>
                  <a
                    href="/about"
                    className="hover:text-blue-600 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`mt-12 pt-8 border-t ${theme.bg.border} text-center ${theme.text.secondary}`}
          >
            <p>&copy; 2024 Sadel. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
