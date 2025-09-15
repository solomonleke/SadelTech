import { ArrowRight, Play, CheckCircle, Users, Award, Globe } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function HomePage() {
  const theme = useTheme();

  const stats = [
    { number: "100K+", label: "End Users Served" },
    { number: "99.9%", label: "System Uptime" },
    { number: "35%", label: "Infrastructure Cost Reduction" },
    { number: "25%", label: "Operational Efficiency Improvement" }
  ];

  const services = [
    {
      icon: <Globe size={24} />,
      title: "AI & Machine Learning",
      description: "Custom AI model development using TensorFlow and OpenAI API"
    },
    {
      icon: <Users size={24} />,
      title: "Cloud-Native Architecture",
      description: "Microservices architecture design and implementation"
    },
    {
      icon: <Award size={24} />,
      title: "Full Stack Web Development",
      description: "Modern web applications with React.js, Next.js, and Vue.js"
    }
  ];

  return (
    <div className={`min-h-screen w-full font-inter ${theme.text.primary}`} style={{ background: theme.background }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight">Sadel</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className={`${theme.text.primary} hover:text-blue-600 transition-colors font-medium`}>Home</a>
            <a href="/about" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>About</a>
            <a href="/services" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>Services</a>
            <a href="/portfolio" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>Portfolio</a>
            <a href="/contact" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>Contact</a>
          </nav>

          {/* CTA Button */}
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
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle size={16} />
                Trusted by Leading Companies
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                AI-Driven Full Stack
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Development </span>
                & Cloud Solutions
              </h1>
              
              <p className={`text-xl leading-relaxed mb-8 ${theme.text.secondary} max-w-lg`}>
                We deliver enterprise-grade, scalable digital solutions that transform business operations across healthcare, fintech, e-commerce, and utility sectors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/portfolio"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-medium flex items-center gap-2 justify-center"
                >
                  View Our Work
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg opacity-80"></div>
                    <div className="h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg opacity-60"></div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-lg opacity-70"></div>
                    <div className="h-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg opacity-80"></div>
                  </div>
                </div>
              </div>
              
              {/* Background decorations */}
              <div className="absolute top-4 left-4 w-72 h-72 bg-blue-300/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-4 right-4 w-72 h-72 bg-purple-300/20 rounded-full filter blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className={`${theme.text.secondary} font-medium`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-xl ${theme.text.secondary} max-w-3xl mx-auto`}>
              We offer comprehensive technology solutions tailored to your business needs, from concept to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`p-8 rounded-2xl border ${theme.bg.border} hover:shadow-xl transition-all duration-300 group hover:scale-105`}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className={`${theme.text.secondary} leading-relaxed`}>
                  {service.description}
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with cutting-edge technology solutions.
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
