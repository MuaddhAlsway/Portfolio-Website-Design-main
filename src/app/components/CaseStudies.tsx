import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowRight, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  techStack: string[];
}

const caseStudies: CaseStudyCard[] = [
  {
    id: 'td-logistics',
    title: 'TD Logistics',
    subtitle: 'Building a Secure Digital Logistics Platform',
    description: 'Integrated logistics platform with real-time shipment tracking, secure authentication, content management, and enterprise-grade security.',
    image: '/Projects/TD.png',
    category: 'Full-Stack',
    duration: '5 months',
    techStack: ['Next.js 14', 'TypeScript', 'SQLite', 'Tailwind CSS', 'JWT'],
  },
];

export function CaseStudies() {
  const navigate = useNavigate();

  return (
    <>
      <section id="case-studies" className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-[#e8ab61]" />
              <span className="text-[#e8ab61] font-semibold">CASE STUDIES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              In-Depth Project <span className="text-[#e8ab61]">Breakdowns</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Detailed case studies showcasing strategic design, technical implementation, and real-world problem-solving
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Image Section */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-96 rounded-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#e8ab61]/20 to-transparent z-10 rounded-2xl" />
                    <ImageWithFallback
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors rounded-2xl" />
                  </motion.div>

                  {/* Content Section */}
                  <div className="space-y-6">
                    {/* Category & Duration */}
                    <div className="flex items-center gap-4">
                      <span className="px-4 py-2 rounded-full bg-[#e8ab61]/10 text-[#e8ab61] text-sm font-semibold">
                        {caseStudy.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        Duration: <span className="text-white font-semibold">{caseStudy.duration}</span>
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-[#e8ab61] transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-[#e8ab61] text-lg font-semibold mb-4">
                        {caseStudy.subtitle}
                      </p>
                      <p className="text-gray-400 text-base leading-relaxed">
                        {caseStudy.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-white/5 text-[#e8ab61] text-sm font-medium border border-white/10 group-hover:border-[#e8ab61]/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate(`/case-study/${caseStudy.id}`)}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-[#e8ab61] text-[#0f0f0f] rounded-full font-semibold hover:bg-[#f0b86f] transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Divider */}
                {index < caseStudies.length - 1 && (
                  <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
