import { Award, Users, Target, ArrowRight, CheckCircle } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function AboutPage() {
  const theme = useTheme();

  const team = [
    {
      name: "Ahmed Hassan",
      role: "Chief Technology Officer (CTO)",
      bio: "Over 15 years of experience in software architecture, team leadership, and scaling enterprise solutions.",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Sarah Chen",
      role: "Lead Frontend Developer",
      bio: "Specialist in React, Next.js, and building pixel-perfect, responsive interfaces.",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Engineer",
      bio: "Expert in cloud infrastructure, CI/CD pipelines, and deployment automation.",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Emily Johnson",
      role: "UI/UX Designer",
      bio: "Passionate about designing intuitive user experiences with a focus on accessibility and aesthetics.",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Adeleke Segun",
      role: "Project Manager & Consultant",
      bio: "Experienced in managing cross-functional teams and delivering projects on time and on budget.",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Adeleke Solomon",
      role: "Senior Software Engineer",
      bio: "Full-stack engineer with a strong background in scalable web applications and performance optimization.",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Egbugha Malachi",
      role: "CTO & Senior Software Engineer",
      bio: "Blends technical leadership with hands-on engineering to drive product innovation.",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Adeleke Opeyemi",
      role: "Product Manager",
      bio: "Bridges business needs and technology by crafting clear product roadmaps and strategies.",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Adeleke Femi",
      role: "Backend Engineer",
      bio: "Focused on building secure, scalable APIs and robust backend systems.",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Adeleke Paul",
      role: "Team Member",
      bio: "Passionate about learning and contributing to innovative projects as part of the engineering team.",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Adeleke Ifeoluwa",
      role: "Team Member",
      bio: "Dedicated to improving system reliability and writing clean, maintainable code.",
      image: "/api/placeholder/300/400",
    },
  ];

  const values = [
    {
      icon: <Target size={32} />,
      title: "Innovation",
      description:
        "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description:
        "We work closely with our clients as partners to achieve shared goals and success.",
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description:
        "We maintain the highest standards in code quality, design, and project delivery.",
    },
  ];

  const achievements = [
    "Award-winning development team",
    "ISO 27001 certified processes",
    "99.9% client satisfaction rate",
    "150+ successful projects delivered",
    "24/7 technical support",
    "Agile development methodology",
  ];

  return (
    <div
      className={`min-h-screen w-full font-inter ${theme.text.primary}`}
      style={{ background: theme.background }}
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
              className={`${theme.text.primary} hover:text-blue-600 transition-colors font-medium`}
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
              className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sadel
                </span>
              </h1>
              <p
                className={`text-xl leading-relaxed mb-8 ${theme.text.secondary}`}
              >
                We are a passionate team of technology experts dedicated to
                building innovative digital solutions that transform businesses
                and create exceptional user experiences.
              </p>
              <p className={`leading-relaxed mb-8 ${theme.text.secondary}`}>
                Founded in 2019, Sadel has grown from a small startup to a
                trusted technology partner for companies worldwide. Our
                expertise spans web development, mobile applications, cloud
                solutions, and digital transformation consulting.
              </p>
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-medium inline-flex items-center gap-2"
              >
                Work With Us
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                <img
                  src="/api/placeholder/500/400"
                  alt="Sadel team at work"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className={`text-xl ${theme.text.secondary} max-w-3xl mx-auto`}>
              These core principles guide everything we do and shape how we work
              with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border ${theme.bg.border} hover:shadow-xl transition-all duration-300 group hover:scale-105 bg-white dark:bg-gray-800/50 text-center`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className={`${theme.text.secondary} leading-relaxed`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className={`text-xl ${theme.text.secondary} max-w-3xl mx-auto`}>
              Our diverse team of experts brings together years of experience in
              technology, design, and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover rounded-2xl group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p
                  className={`${theme.text.secondary} text-sm leading-relaxed`}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sadel?
                </span>
              </h2>
              <p
                className={`text-xl leading-relaxed mb-8 ${theme.text.secondary}`}
              >
                Our track record speaks for itself. We've consistently delivered
                high-quality solutions that exceed client expectations and drive
                business growth.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle
                      size={20}
                      className="text-green-500 flex-shrink-0"
                    />
                    <span className={`${theme.text.secondary}`}>
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      150+
                    </div>
                    <div className={`${theme.text.secondary} text-sm`}>
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      50+
                    </div>
                    <div className={`${theme.text.secondary} text-sm`}>
                      Happy Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      5+
                    </div>
                    <div className={`${theme.text.secondary} text-sm`}>
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      99%
                    </div>
                    <div className={`${theme.text.secondary} text-sm`}>
                      Satisfaction Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help transform your business
            with innovative technology solutions.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-medium inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

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
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

        .font-inter {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </div>
  );
}
