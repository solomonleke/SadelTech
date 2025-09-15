import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github, Briefcase } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const PortfolioPage = () => {
  const theme = useTheme();
  const { isDark } = theme;

  const projects = [
    {
      id: 1,
      title: "Multi-State Healthcare Management Systems",
      description:
        "Comprehensive digital transformation of state hospital operations with AI-powered patient management and cloud-native architecture.",
      image: "/hmsImage.jpeg",
      technologies: ["AI", "Cloud", "Healthcare", "Enterprise"],
      github: "https://github.com/sadeltech",
      live: "https://sadeltech.com",
      category: "Healthcare",
      featured: true,
    },
    {
      id: 2,
      title: "OneByOne Scholarship Platform",
      description:
        "A personalized scholarship and mentorship platform supporting underprivileged students with AI-driven matching algorithms.",
      image: "/onebyone.png",
      technologies: ["AI", "Web Platform", "EdTech"],
      github: "https://github.com/sadeltech",
      live: "https://onebyone.ng/",
      category: "Web Platform",
      featured: true,
    },
    {
      id: 3,
      title: "EZYGPS - IoT Location Sharing Platform",
      description:
        "Cross-platform mobile application with hardware integration for real-time location sharing using Google Maps API and Arduino.",
      image: "/app.jpeg",
      technologies: ["IoT", "Mobile App", "React Native", "C++"],
      github: "https://github.com/sadeltech",
      live: "https://sadeltech.com",
      category: "IoT",
      featured: false,
    },
    {
      id: 4,
      title: "Crystals Trading Hub",
      description:
        "Crystals Trading Hub is an innovative platform focused on transforming trading education. I developed the website to provide accessible, in-depth trading knowledge paired with dedicated mentorship, aimed at fostering informed decision-making and long-term success for aspiring traders.",
      image: "/crystals.webp",
      technologies: ["Fintech", "Web3", "Trading"],
      github: "https://github.com/sadeltech",
      live: "https://crystals-alpha.vercel.app/",
      category: "Web Platform",
      featured: false,
    },
    {
      id: 5,
      title: "LetMeIn",
      description:
        "LETMEIN is an access control software that enables it customers to manage access to thier living space. It achieves this by creating a network of three application. Estate Manager / Admin application, Resident / User Application and Security Application. I and my Team worked together on this project",
      image: "/letmein.webp",
      technologies: ["Housing", "Enterprise", "Security"],
      github: "https://github.com/sadeltech",
      live: "https://let-me-in-app.vercel.app/",
      category: "Web Platform",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Healthcare",
    "AI",
    "Web Platform",
    "IoT",
    "Fintech",
    "Enterprise",
  ];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory, projects]);

  return (
    <div
      className={`min-h-screen w-full font-inter ${theme.text.primary}`}
      style={{ background: theme.background }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-gray-50 dark:bg-gray-900 border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="SadelTech Logo" className="w-12 h-10" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`${theme.text.primary} hover:text-blue-600 transition-colors font-medium`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Briefcase size={16} />
            Our Work
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Showcasing Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Digital Craftsmanship{" "}
            </span>
          </h1>

          <p
            className={`text-xl leading-relaxed mb-12 ${theme.text.secondary} max-w-4xl mx-auto`}
          >
            Explore a selection of our finest projects, demonstrating our
            commitment to quality, innovation, and client success.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800/50 border border-gray-200/80 dark:border-gray-700/80 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
                No projects yet for{" "}
                <span className="font-semibold">{selectedCategory}</span>.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`rounded-2xl border ${theme.bg.border} hover:shadow-xl transition-all duration-300 group hover:scale-105 bg-white dark:bg-gray-800/50 overflow-hidden flex flex-col`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-xs font-medium rounded-full mb-4 self-start">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p
                      className={`${theme.text.secondary} mb-4 text-sm leading-relaxed flex-grow`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium"
                      >
                        Live Demo
                        <ExternalLink className="ml-1.5 h-4 w-4" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's turn your idea into a reality. We'd love to hear about your
            project and discuss how we can help.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-medium inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-6 border-t ${theme.bg.border}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.png"
                  alt="SadelTech Logo"
                  className="w-12 h-10"
                />
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
                  <Link
                    to="/services"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className={`space-y-2 ${theme.text.secondary}`}>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-600 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </Link>
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
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

        .font-inter {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;
