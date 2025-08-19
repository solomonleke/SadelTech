import { ArrowRight, Code, Smartphone, Cloud, Users, Zap, Shield } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function ServicesPage() {
  const theme = useTheme();

  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "Performance Optimization", "SEO-Friendly", "Modern UI/UX"],
      price: "Starting at $5,000"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Development", 
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: ["Cross-Platform", "Native Performance", "App Store Deployment", "Push Notifications"],
      price: "Starting at $8,000"
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud.",
      features: ["Auto-Scaling", "Load Balancing", "Database Management", "CI/CD Pipelines"],
      price: "Starting at $3,000"
    },
    {
      icon: <Users size={32} />,
      title: "Team Augmentation",
      description: "Dedicated development teams to extend your in-house capabilities with skilled professionals.",
      features: ["Skilled Developers", "Agile Methodology", "Direct Communication", "Flexible Contracts"],
      price: "From $50/hour"
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Optimization",
      description: "Improve your existing applications' speed, efficiency, and user experience.",
      features: ["Code Optimization", "Database Tuning", "CDN Setup", "Monitoring Tools"],
      price: "Starting at $2,500"
    },
    {
      icon: <Shield size={32} />,
      title: "Security Audits",
      description: "Comprehensive security assessments and implementation of best practices.",
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Implementation", "Compliance"],
      price: "Starting at $4,000"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your requirements, goals, and technical needs to create a comprehensive project plan."
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Our team creates detailed wireframes, designs, and technical architecture for your project."
    },
    {
      step: "03",
      title: "Development",
      description: "We build your solution using agile methodology with regular updates and feedback cycles."
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Rigorous testing followed by smooth deployment and ongoing support and maintenance."
    }
  ];

  return (
    <div className={`min-h-screen w-full font-inter ${theme.text.primary}`} style={{ background: theme.background }}>
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
            <a href="/" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>Home</a>
            <a href="/about" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>About</a>
            <a href="/services" className={`${theme.text.primary} hover:text-blue-600 transition-colors font-medium`}>Services</a>
            <a href="/portfolio" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>Portfolio</a>
            <a href="/contact" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>Contact</a>
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
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className={`text-xl leading-relaxed mb-12 ${theme.text.secondary} max-w-3xl mx-auto`}>
            We provide comprehensive technology solutions to help your business thrive in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`p-8 rounded-2xl border ${theme.bg.border} hover:shadow-xl transition-all duration-300 group hover:scale-105 bg-white dark:bg-gray-800/50`}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={`${theme.text.secondary} leading-relaxed mb-6`}>
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center gap-2 ${theme.text.secondary} text-sm`}>
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                  <button className={`${theme.text.primary} hover:text-blue-600 transition-colors flex items-center gap-1 text-sm font-medium`}>
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-xl ${theme.text.secondary} max-w-3xl mx-auto`}>
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className={`${theme.text.secondary} leading-relaxed`}>
                  {step.description}
                </p>
                
                {/* Connection line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-600/30 to-purple-600/30 transform translate-x-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that meets your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-medium inline-flex items-center gap-2 justify-center"
            >
              Get Free Consultation
              <ArrowRight size={20} />
            </a>
            <a
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium inline-flex items-center gap-2 justify-center"
            >
              View Our Work
            </a>
          </div>
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
                Building digital excellence through innovative technology solutions and exceptional user experiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className={`space-y-2 ${theme.text.secondary}`}>
                <li><a href="/services" className="hover:text-blue-600 transition-colors">Web Development</a></li>
                <li><a href="/services" className="hover:text-blue-600 transition-colors">Mobile Apps</a></li>
                <li><a href="/services" className="hover:text-blue-600 transition-colors">Cloud Solutions</a></li>
                <li><a href="/services" className="hover:text-blue-600 transition-colors">Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className={`space-y-2 ${theme.text.secondary}`}>
                <li><a href="/about" className="hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a></li>
                <li><a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
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