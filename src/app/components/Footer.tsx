import { motion } from 'motion/react';
import { Heart, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f0f0f] border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-[#e8ab61] mb-4 cursor-pointer"
              onClick={scrollToTop}
            >
              MUSTUDIOLAB
            </motion.h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Full Stack Web Developer specializing in React, Next.js, and modern web technologies.
              Passionate about creating beautiful, functional, and user-friendly web experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#e8ab61]/20 rounded-lg border border-white/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-[#e8ab61]" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#e8ab61]/20 rounded-lg border border-white/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-[#e8ab61]" />
              </a>
              <a
                href="mailto:contact@mustudiolab.com"
                className="p-3 bg-white/5 hover:bg-[#e8ab61]/20 rounded-lg border border-white/10 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5 text-[#e8ab61]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Work Experience', id: 'experience' },
                { name: 'Education', id: 'education' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Expertise', id: 'expertise' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#e8ab61] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { name: 'Courses', id: 'courses' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#e8ab61] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © 2026 MUSTUDIOLAB. Made with{' '}
            <Heart className="w-4 h-4 inline text-red-500 fill-red-500" /> by MUSTUDIOLAB
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-[#e8ab61] hover:bg-[#d79e50] rounded-full transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-5 h-5 text-[#0f0f0f]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
