import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Zap, Heart, Shield, TrendingUp, Cloud, Briefcase, CheckCircle, FastForward, Lightbulb, Eye, Flag } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function AboutPage() {
  const theme = useTheme();
  const { isDark } = theme;

  const team = [
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
      icon: <Zap size={24} />,
      title: "AI-First Approach",
      description: "Pioneer in integrating artificial intelligence into business solutions, delivering 25% improvement in operational efficiency."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Proven Scale",
      description: "Successfully deployed systems serving 100K+ users with 99.9% uptime across multiple industries."
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Expertise", 
      description: "Advanced cloud architecture capabilities reducing infrastructure costs by 35% through containerization and auto-scaling."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Cross-Industry Experience",
      description: "Deep domain knowledge in healthcare, fintech, e-commerce, and utility sectors."
    },
    {
      icon: <Users size={24} />,
      title: "Expert Team",
      description: "Senior engineers with proven track records at leading technology companies."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "End-to-End Delivery",
      description: "Complete project lifecycle management from concept to deployment and ongoing maintenance."
    },
    {
      icon: <FastForward size={24} />,
      title: "Agile Methodology",
      description: "Fast, iterative development with continuous integration and deployment practices."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Innovation Focus",
      description: "Continuous research and development in emerging technologies including multimodal AI and voice technology."
    }
  ];

  const achievements = [
    { number: "100K+", label: "End Users Served" },
    { number: "99.9%", label: "System Uptime" },
    { number: "35%", label: "Cost Reduction" },
    { number: "25%", label: "Efficiency Improvement" }
  ];

  return (
    <div className={`min-h-screen w-full font-inter ${theme.text.primary}`} style={{ background: theme.background }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-gray-50 dark:bg-gray-900 border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="SadelTech Logo" className="w-12 h-10" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>Home</Link>
            <Link to="/about" className={`${theme.text.primary} hover:text-blue-600 transition-colors font-medium`}>About</Link>
            <Link to="/services" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>Services</Link>
            <Link to="/portfolio" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>Portfolio</Link>
            <Link to="/contact" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>Contact</Link>
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
            <Heart size={16} />
            Our Story
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Building the
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Future </span>
            Together
          </h1>
          
          <p className={`text-xl leading-relaxed mb-12 ${theme.text.secondary} max-w-4xl mx-auto`}>
            Sadel Technologies is a pioneering technology solutions provider specializing in AI-driven full stack development, 
            cloud-native architecture, and IoT integration. We deliver enterprise-grade, scalable digital solutions that 
            transform business operations across healthcare, fintech, e-commerce, and utility sectors.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className={`${theme.text.secondary} font-medium`}>
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Eye size={16} />
                Our Vision
              </div>
              <p className={`text-xl leading-relaxed ${theme.text.secondary}`}>
                To be the leading African technology company that revolutionizes industries through AI-powered solutions, cloud architecture, and innovative software engineering, setting the global standard for intelligent digital transformation.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Flag size={16} />
                Our Mission
              </div>
              <p className={`text-xl leading-relaxed ${theme.text.secondary}`}>
                To empower businesses and institutions with intelligent, scalable technology solutions by leveraging artificial intelligence, cloud computing, and modern software engineering practices to drive economic growth across Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Choose Us</span>
            </h2>
            <p className={`text-xl ${theme.text.secondary} max-w-3xl mx-auto`}>
              Our approach is built on a foundation of innovation, expertise, and a commitment to delivering measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`p-8 rounded-2xl border ${theme.bg.border} hover:shadow-xl transition-all duration-300 group hover:scale-105 bg-white dark:bg-gray-800/50`}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
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
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className={`text-xl ${theme.text.secondary} max-w-3xl mx-auto`}>
              Talented individuals united by a common passion for creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className={`text-center group hover:scale-105 transition-all duration-300`}>
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-blue-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className={`${theme.text.secondary} text-sm leading-relaxed`}>
                  {member.bio}
                </p>
              </div>
            ))}
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
            Let's discuss how our team can help bring your vision to life with innovative technology solutions.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-medium inline-flex items-center gap-2"
          >
            Start Conversation
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
                <img src="/logo.png" alt="SadelTech Logo" className="w-12 h-10" />
              </div>
              <p className={`${theme.text.secondary} max-w-md mb-6`}>
                Building digital excellence through innovative technology solutions and exceptional user experiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className={`space-y-2 ${theme.text.secondary}`}>
                <li><Link to="/services" className="hover:text-blue-600 transition-colors">Web Development</Link></li>
                <li><Link to="/services" className="hover:text-blue-600 transition-colors">Mobile Apps</Link></li>
                <li><Link to="/services" className="hover:text-blue-600 transition-colors">Cloud Solutions</Link></li>
                <li><Link to="/services" className="hover:text-blue-600 transition-colors">Consulting</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className={`space-y-2 ${theme.text.secondary}`}>
                <li><Link to="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
                <li><Link to="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className={`mt-12 pt-8 border-t ${theme.bg.border} text-center ${theme.text.secondary}`}>
            <p>&copy; 2024 Sadel. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
