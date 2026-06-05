import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Check, Globe, Zap, Code, Smartphone, Lock, Headphones, Briefcase, TrendingUp, Search, Home, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const projectNavLinks = [
  { name: 'What We Build', id: 'what-we-build' },
  { name: 'Why Choose Us', id: 'why-choose-us' },
  { name: 'How It Works', id: 'how-it-works' },
  { name: 'FAQ', id: 'faq' },
];

const projectTypes = [
  {
    title: 'Business Websites',
    description: 'Professional sites that convert visitors into customers',
    icon: Globe,
  },
  {
    title: 'Web Applications',
    description: 'Interactive platforms with real-time functionality',
    icon: Code,
  },
  {
    title: 'E-Commerce',
    description: 'Online stores with payments and inventory management',
    icon: TrendingUp,
  },
  {
    title: 'Logistics Platforms',
    description: 'Tracking systems and supply chain solutions',
    icon: Briefcase,
  },
  {
    title: 'Dashboards',
    description: 'Data visualization and admin management tools',
    icon: TrendingUp,
  },
  {
    title: 'Portfolio Websites',
    description: 'Showcase your work and expertise online',
    icon: Briefcase,
  },
  {
    title: 'Landing Pages',
    description: 'High-converting pages optimized for campaigns',
    icon: Zap,
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored projects built to your specifications',
    icon: Code,
  },
];

const whyChooseUs = [
  {
    title: 'Modern Design',
    description: 'Contemporary aesthetics with attention to detail',
    icon: Smartphone,
  },
  {
    title: 'Fast Development',
    description: 'Quick turnaround without compromising quality',
    icon: Zap,
  },
  {
    title: 'SEO Optimized',
    description: 'Built for search engines and visibility',
    icon: Search,
  },
  {
    title: 'Mobile Responsive',
    description: 'Perfect experience on all devices',
    icon: Smartphone,
  },
  {
    title: 'Secure Solutions',
    description: 'Enterprise-grade security standards',
    icon: Lock,
  },
  {
    title: 'Ongoing Support',
    description: 'Maintenance and updates after launch',
    icon: Headphones,
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Contact Us',
    description: 'Start a WhatsApp conversation with our team',
  },
  {
    step: '02',
    title: 'Discovery Call',
    description: 'We discuss your goals and requirements',
  },
  {
    step: '03',
    title: 'Proposal',
    description: 'Receive a tailored project plan and estimate',
  },
  {
    step: '04',
    title: 'Design & Development',
    description: 'We build your solution with regular updates',
  },
  {
    step: '05',
    title: 'Launch',
    description: 'Your project goes live and we celebrate!',
  },
];

const faqItems = [
  {
    question: 'How do I start a project?',
    answer: 'Simply click the WhatsApp button and send us a message. Tell us about your project idea, and we\'ll get back to you with next steps.',
  },
  {
    question: 'How quickly do you respond?',
    answer: 'We typically respond within 1-2 hours during business hours. For urgent matters, we can arrange a call immediately.',
  },
  {
    question: 'Do you build custom solutions?',
    answer: 'Yes! We specialize in custom projects tailored to your specific needs. Share your vision and we\'ll make it happen.',
  },
  {
    question: 'Do you offer maintenance?',
    answer: 'Absolutely. We provide ongoing support and maintenance packages to keep your project running smoothly.',
  },
  {
    question: 'Can you redesign my current website?',
    answer: 'Yes, we can redesign, rebuild, or enhance your existing website. Let\'s discuss your goals on WhatsApp.',
  },
];

const whatsappNumber = '+966560394576';
const whatsappMessage = 'Hi MULAB, I\'d like to discuss a new project.';

const openWhatsApp = () => {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
};

export function StartProject() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling past hero (300px) but before final CTA (approximately 1400px)
      const showButton = window.scrollY > 300 && window.scrollY < 1400;
      setShowStickyCTA(showButton);
      setIsScrolled(window.scrollY > 600);
      setHeroVisible(window.scrollY < 300);
      // Show scroll to top button when scrolled down more than 500px
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      {/* Custom Navigation for Start Project Page */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Back to Home */}
            <motion.button
              onClick={() => navigate('/')}
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {projectNavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-[#e8ab61] transition-colors duration-300 font-medium"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
              >
                {mobileMenuOpen ? (
                  <ArrowRight className="w-6 h-6 rotate-180" />
                ) : (
                  <ArrowRight className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {projectNavLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-white hover:text-[#e8ab61] transition-colors duration-300 text-left font-medium"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>
      {/* Sticky WhatsApp Button - Only show between hero and final CTA */}
      {showStickyCTA && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          onClick={openWhatsApp}
          className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center shadow-2xl transition-all"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </motion.button>
      )}

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-40 w-16 h-16 bg-[#e8ab61] hover:bg-[#d79e50] rounded-full flex items-center justify-center shadow-2xl transition-all"
        >
          <ArrowUp className="w-8 h-8 text-[#0f0f0f]" />
        </motion.button>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8ab61]/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-[#e8ab61] transition-colors mb-8"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Start Your Project <br />
              <span className="text-[#e8ab61]">With Confidence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We help businesses, startups, and brands build modern digital experiences. Tell us about your project on WhatsApp and we'll guide you through the next steps.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full text-lg font-semibold transition-all shadow-xl hover:shadow-2xl"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Project Types Section */}
      <section id="what-we-build" className="py-20 px-6 bg-[#1a1a1a]/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              What We <span className="text-[#e8ab61]">Build</span>
            </h2>
            <p className="text-xl text-gray-400">
              Diverse expertise across multiple platforms and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#e8ab61]/50 transition-all group cursor-pointer"
                >
                  <div className="text-4xl mb-4 text-[#e8ab61]">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#e8ab61] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Why Clients Choose <span className="text-[#e8ab61]">MULAB</span>
            </h2>
            <p className="text-xl text-gray-400">
              We deliver excellence in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#e8ab61]/50 transition-all"
                >
                  <div className="text-5xl mb-6 text-[#e8ab61]">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-[#1a1a1a]/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              How It <span className="text-[#e8ab61]">Works</span>
            </h2>
            <p className="text-xl text-gray-400">
              Our process is simple, transparent, and collaborative
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 h-full">
                  <div className="text-4xl font-bold text-[#e8ab61] mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#e8ab61]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Frequently Asked <span className="text-[#e8ab61]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-all"
                >
                  <h3 className="text-lg font-bold text-left">{item.question}</h3>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5 text-[#e8ab61]" />
                  </motion.div>
                </button>

                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-8 pb-6 border-t border-white/10 text-gray-300"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#e8ab61]/10 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Have a Project <br />
              <span className="text-[#e8ab61]">in Mind?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Skip the forms. Send us a message on WhatsApp and let's discuss your idea.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full text-xl font-semibold transition-all shadow-2xl hover:shadow-3xl"
            >
              <MessageCircle className="w-7 h-7" />
              Start a WhatsApp Conversation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
