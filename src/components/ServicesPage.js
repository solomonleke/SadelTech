import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Smartphone, Cloud, Globe, Database, Zap, Shield, Cpu, Server, Code, Network, Home, BrainCircuit, CloudCog, Router, Building, PlugZap } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ServicesPage() {
  const theme = useTheme();
  const { isDark } = theme;

  const services = [
    {
      icon: <BrainCircuit size={32} />,
      title: "AI & Machine Learning",
      description: "Advanced Intelligence Integration",
      features: ["AI-powered diagnostic assistance", "Demand forecasting models", "NLP and Computer Vision", "Custom AI model development"]
    },
    {
      icon: <CloudCog size={32} />,
      title: "Cloud-Native Architecture", 
      description: "Scalable Infrastructure Solutions",
      features: ["Microservices architecture", "Docker & Kubernetes", "AWS, Azure, & GCP deployment", "CI/CD pipelines & Terraform"]
    },
    {
      icon: <Code size={32} />,
      title: "Full Stack Web Development",
      description: "Modern Web Applications",
      features: ["React, Next.js, Vue.js", "Node.js, Python Django, Laravel", "PWAs & Server-Side Rendering", "RESTful APIs & GraphQL"]
    },
    {
      icon: <Router size={32} />,
      title: "Mobile & IoT Development",
      description: "Cross-Platform Solutions",
      features: ["React Native mobile apps", "IoT with Arduino & C++", "Real-time location services", "Mobile-first design"]
    },
    {
      icon: <Building size={32} />,
      title: "Enterprise Solutions",
      description: "Business Process Automation", 
      features: ["Microsoft Power Platform", "ERP & CRM integration", "Azure Active Directory", "Legacy system modernization"]
    },
    {
      icon: <PlugZap size={32} />,
      title: "Smart Building & IoT",
      description: "Intelligent Resource Optimization",
      features: ["Smart Lighting Systems", "Automated HVAC", "Energy Monitoring", "Solar Panels with Smart Inverters"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your goals, requirements, and constraints to create a comprehensive project roadmap."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Create wireframes and prototypes to visualize the solution before development begins."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build your solution using best practices with continuous testing and quality assurance."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Launch your project and provide ongoing support, maintenance, and optimization services."
    }
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
            <Link to="/about" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>About</Link>
            <Link to="/services" className={`${theme.text.primary} hover:text-blue-600 transition-colors font-medium`}>Services</Link>
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
            <Zap size={16} />
            Our Services
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital </span>
            Solutions
          </h1>
          
          <p className={`text-xl leading-relaxed mb-12 ${theme.text.secondary} max-w-4xl mx-auto`}>
            From concept to deployment, we offer end-to-end technology services designed to accelerate 
            your business growth and deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`p-8 rounded-2xl border ${theme.bg.border} hover:shadow-xl transition-all duration-300 group hover:scale-105 bg-white dark:bg-gray-800/50`}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={`${theme.text.secondary} leading-relaxed mb-6`}>
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className={`text-sm ${theme.text.secondary}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center gap-2 mt-auto"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
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
              A proven methodology that ensures successful project delivery and exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className={`${theme.text.secondary} leading-relaxed`}>
                    {step.description}
                  </p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology Stack</span>
            </h2>
            <p className={`text-xl ${theme.text.secondary} max-w-3xl mx-auto`}>
              We use a modern, robust technology stack to build scalable, high-performance solutions.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl border ${theme.bg.border} shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Languages</h4>
                <ul className="space-y-2 ${theme.text.secondary}">
                  <li>JavaScript & TypeScript</li>
                  <li>Python & Golang</li>
                  <li>C++ & PHP</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Frontend</h4>
                <ul className="space-y-2 ${theme.text.secondary}">
                  <li>React.js & Next.js</li>
                  <li>Vue.js & Angular</li>
                  <li>Redux & Zustand</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Backend</h4>
                <ul className="space-y-2 ${theme.text.secondary}">
                  <li>Node.js & Express.js</li>
                  <li>Django & FastAPI</li>
                  <li>Laravel & NestJS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">AI & ML</h4>
                <ul className="space-y-2 ${theme.text.secondary}">
                  <li>TensorFlow & OpenAI API</li>
                  <li>Scikit-learn & PyTorch</li>
                  <li>Llava & VAPI</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Cloud & DevOps</h4>
                <ul className="space-y-2 ${theme.text.secondary}">
                  <li>AWS, Azure, GCP</li>
                  <li>Docker & Kubernetes</li>
                  <li>Terraform & CI/CD</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Databases</h4>
                <ul className="space-y-2 ${theme.text.secondary}">
                  <li>PostgreSQL & MySQL</li>
                  <li>MongoDB & Redis</li>
                  <li>Firebase & Elasticsearch</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Mobile & IoT</h4>
                <ul className="space-y-2 ${theme.text.secondary}">
                  <li>React Native & Flutter</li>
                  <li>Arduino & Raspberry Pi</li>
                  <li>Embedded C++</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Architecture</h4>
                <ul className="space-y-2 ${theme.text.secondary}">
                  <li>Microservices</li>
                  <li>Event-Driven Systems</li>
                  <li>API Driven Systems</li>
                </ul>
              </div>
            </div>
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
            Let's discuss your project requirements and create a custom solution that perfectly fits your needs.
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
