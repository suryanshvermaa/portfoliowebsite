
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:suryanshv.ug23.ee@nitp.ac.in",
      label: "Email"
    }
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Suryansh Verma</h3>
              <p className="text-slate-400 leading-relaxed">
                Full Stack Developer passionate about building scalable applications 
                and contributing to innovative projects. Currently pursuing Electrical 
                Engineering at NIT Patna.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-slate-400">
                  <span className="font-medium">Email:</span><br />
                  suryanshv.ug23.ee@nitp.ac.in
                </p>
                <p className="text-slate-400">
                  <span className="font-medium">Phone:</span><br />
                  +91-9580104753
                </p>
                <p className="text-slate-400">
                  <span className="font-medium">Location:</span><br />
                  NIT Patna, Bihar, India
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-slate-400">
                <span>&copy; {currentYear} Suryansh Verma. All rights reserved.</span>
              </div>

              {/* Made with Love */}
              <div className="flex items-center space-x-2 text-slate-400">
                <span>Made with</span>
                <Heart size={16} className="text-red-500" />
                <span>using React & Tailwind CSS</span>
              </div>

              {/* Additional Links */}
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <button
              onClick={() => scrollToSection('#home')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
