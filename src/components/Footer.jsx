import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.getElementById('footer');
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Fallback for older browsers
      if (window.pageYOffset > 0) {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    } catch (error) {
      // Fallback for any scrolling issues
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  return (
    <footer 
      id="footer" 
      className={`bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Left Section - About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <h3 className="text-lg font-bold text-white">Satyam Suman</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              I’m a Full Stack Developer passionate about building innovative web applications and seamless digital experiences. 
              I specialize in frontend development and combine it with data analysis to create smart, user-centric solutions that solve real-world problems.
            </p>

            {/* Social Links with better spacing */}
            <div className="border-t border-gray-700 pt-4 mt-4">
              <p className="text-gray-400 text-sm mb-3">Connect with me:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { 
                    name: 'GitHub',
                    href: 'https://github.com/SATYAMSUMAN24', 
                    label: 'GitHub',
                    hoverColor: 'hover:bg-gray-900',
                    icon: <GitHubIcon />
                  },
                  { 
                    name: 'X (Twitter)',
                    href: 'https://x.com/satyamsuman24', 
                    label: 'X (Twitter)',
                    hoverColor: 'hover:bg-black',
                    icon: <TwitterIcon />
                  },
                  { 
                    name: 'Instagram',
                    href: 'https://instagram.com/satyamsuman6349', 
                    label: 'Instagram',
                    hoverColor: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
                    icon: <InstagramIcon />
                  },
                  { 
                    name: 'Facebook',
                    href: 'https://facebook.com/satyamsuman3366', 
                    label: 'Facebook',
                    hoverColor: 'hover:bg-blue-600',
                    icon: <FacebookIcon />
                  },
                  { 
                    name: 'LinkedIn',
                    href: 'https://linkedin.com/in/satyamsuman2003', 
                    label: 'LinkedIn',
                    hoverColor: 'hover:bg-blue-700',
                    icon: <LinkedInIcon />
                  },
                  { 
                    name: 'Gmail',
                    href: 'mailto:satyamsuman2003@gmail.com', 
                    label: 'Gmail',
                    hoverColor: 'hover:bg-red-600',
                    icon: <EmailIcon />
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`min-w-[36px] min-h-[36px] w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center ${social.hoverColor} focus:bg-indigo-600 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-gray-300 hover:text-white`}
                    title={social.label}
                    aria-label={social.label}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1">
              {[
                { name: 'Home', icon: '🏠', href: '/' },
                { name: 'About', icon: '👨‍💻', href: '/about' },
                { name: 'Skills', icon: '🛠️', href: '/skills' },
                { name: 'Projects', icon: '🚀', href: '/projects' },
                { name: 'Gallery', icon: '🖼️', href: '/gallery' },
                { name: 'Blog', icon: '📝', href: '/blog' },
                { name: 'Experience', icon: '💼', href: '/certificates' },
                { name: 'Contact', icon: '📧', href: '/contact' }
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group p-2 rounded-lg hover:bg-gray-800/50 text-sm"
                >
                  <span className="mr-2 group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" aria-label="Email">
                  <span className="text-white text-xs">📧</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 mb-1">Email</p>
                  <a 
                    href="mailto:satyamsuman2003@gmail.com" 
                    className="text-gray-300 hover:text-white focus:text-white text-sm transition-colors break-all hover:underline focus:outline-none focus:underline"
                    aria-label="Send email to satyamsuman2003@gmail.com"
                  >
                    satyamsuman2003@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" aria-label="Location">
                  <span className="text-white text-xs">📍</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 mb-1">Location</p>
                  <p className="text-gray-300 text-sm">India</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" aria-label="Education">
                  <span className="text-white text-xs">🎓</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 mb-1">Education</p>
                  <p className="text-gray-300 text-sm">B.Tech Student</p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-5 pt-4 border-t border-gray-700">
              <h5 className="text-sm font-semibold text-white mb-2">Stay Updated</h5>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg border border-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 min-w-0"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 focus:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Satyam Suman. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with React & Tailwind CSS • Deployed on Vercel..
              </p>
            </div>

            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
              {/* Policy Links - Stack on mobile, inline on larger screens */}
              <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start space-y-2 xs:space-y-0 xs:space-x-4 lg:space-x-6">
                <a 
                  href="/privacy" 
                  className="text-gray-400 hover:text-white focus:text-white text-sm sm:text-base transition-colors hover:underline focus:outline-none focus:underline px-3 py-2 rounded-lg hover:bg-gray-800/50 w-full xs:w-auto text-center"
                  aria-label="Privacy Policy"
                >
                  Privacy Policy
                </a>
                <span className="hidden xs:block text-gray-600">•</span>
                <a 
                  href="/terms" 
                  className="text-gray-400 hover:text-white focus:text-white text-sm sm:text-base transition-colors hover:underline focus:outline-none focus:underline px-3 py-2 rounded-lg hover:bg-gray-800/50 w-full xs:w-auto text-center"
                  aria-label="Terms of Service"
                >
                  Terms of Service
                </a>
              </div>
              
              {/* Back to Top Button - Full width on mobile, auto on larger screens */}
              <div className="flex justify-center lg:justify-end">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center justify-center space-x-2 text-gray-400 hover:text-white focus:text-white text-sm sm:text-base transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-4 py-3 sm:px-6 sm:py-2 bg-gray-800/50 hover:bg-gray-700 w-full xs:w-auto max-w-xs"
                  aria-label="Scroll to top"
                >
                  <ArrowUpwardIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-medium">Back to Top</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="flex flex-wrap justify-center gap-2">
              <Link 
                to="/" 
                className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xs rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <HomeIcon fontSize="small" />
                <span>Home</span>
              </Link>
              <Link 
                to="/projects" 
                className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xs rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <WorkIcon fontSize="small" />
                <span>Projects</span>
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xs rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <ContactMailIcon fontSize="small" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;