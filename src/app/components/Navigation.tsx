import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useI18n } from '@/app/i18n/useI18n';

interface NavigationProps {
}

const navLinks = [
  { name: 'Work Experience', id: 'experience', key: 'nav.workExperience' },
  { name: 'Portfolio', id: 'portfolio', key: 'nav.portfolio' },
  { name: 'Expertise', id: 'expertise', key: 'nav.expertise' },
];

export function Navigation({}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { language, switchLanguage, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#e8ab61] to-[#d79e50] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-1 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md bg-[#0f0f0f]/90 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Profile Image Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="rounded-full border-2 border-[#e8ab61] hover:border-[#d79e50] transition-all hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/me.jpeg"
                alt="Muaddh Al-Sway"
                className="w-12 h-12 rounded-full object-cover"
              />
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-[#e8ab61] transition-colors duration-300 font-medium"
                >
                  {t(link.key, link.name)}
                </button>
              ))}
              {/* Language Toggle */}
              <div className="flex gap-2 border border-white/20 rounded-full p-1">
                <button
                  onClick={() => switchLanguage('en')}
                  className={`px-3 py-1 rounded-full transition-all ${
                    language === 'en'
                      ? 'bg-[#e8ab61] text-[#0f0f0f]'
                      : 'text-white hover:text-[#e8ab61]'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLanguage('ar')}
                  className={`px-3 py-1 rounded-full transition-all ${
                    language === 'ar'
                      ? 'bg-[#e8ab61] text-[#0f0f0f]'
                      : 'text-white hover:text-[#e8ab61]'
                  }`}
                >
                  AR
                </button>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/start-project')}
                className="px-6 py-2 bg-[#e8ab61] hover:bg-[#d79e50] text-[#0f0f0f] rounded-full font-semibold transition-all"
              >
                {t('nav.startProject', 'Start Project')}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-white hover:text-[#e8ab61] transition-colors duration-300 text-left font-medium"
                  >
                    {link.name}
                  </button>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate('/start-project');
                    setIsOpen(false);
                  }}
                  className="w-full px-6 py-2 bg-[#e8ab61] hover:bg-[#d79e50] text-[#0f0f0f] rounded-full font-semibold transition-all mt-4"
                >
                  Start Project
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
}
