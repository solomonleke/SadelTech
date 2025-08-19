import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ContactPage = () => {
  const theme = useTheme();
  const { isDark } = theme;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-blue-600" />,
      title: 'Email Us',
      info: 'info@sadeltech.com',
      action: 'mailto:info@sadeltech.com'
    },
    {
      icon: <Phone size={24} className="text-blue-600" />,
      title: 'Call Us',
      info: '+234 816 541 3816',
      action: 'tel:+2348165413816'
    },
    {
      icon: <MapPin size={24} className="text-blue-600" />,
      title: 'Visit Us',
      info: 'Lagos, Nigeria',
      action: '#'
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
            <Link to="/services" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>Services</Link>
            <Link to="/portfolio" className={`${theme.text.secondary} hover:text-blue-600 transition-colors`}>Portfolio</Link>
            <Link to="/contact" className={`${theme.text.primary} hover:text-blue-600 transition-colors font-medium`}>Contact</Link>
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
            <MessageSquare size={16} />
            Contact Us
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Let's Build Something
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Amazing </span>
            Together
          </h1>
          
          <p className={`text-xl leading-relaxed mb-12 ${theme.text.secondary} max-w-4xl mx-auto`}>
            Have a question, a project idea, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className={`p-8 rounded-2xl border ${theme.bg.border} bg-white dark:bg-gray-800/50 shadow-lg`}>
              <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
              <p className={`${theme.text.secondary} mb-8`}>We'll get back to you within one business day.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme.text.primary}`} placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme.text.primary}`} placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme.text.primary}`} placeholder="Your Company, Inc." />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleInputChange} className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700/50 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme.text.primary}`} placeholder="How can we help you?"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium inline-flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <p className={`${theme.text.secondary}`}>
                You can also reach us through the following channels. We're always happy to chat.
              </p>
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <a href={item.action} className="text-blue-600 hover:underline font-medium break-all">{item.info}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
};

export default ContactPage;
