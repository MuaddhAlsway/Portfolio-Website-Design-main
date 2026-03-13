import { useParams, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Code2, ExternalLink, Clock, User, Briefcase } from 'lucide-react';
import { getProjectById } from '@/app/data/projects';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(Number(id)) : undefined;

  // Scroll to top when project detail page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-[#e8ab61] hover:underline flex items-center gap-2 mx-auto"
          >
            <ArrowRight className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4">
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/#my-portfolio')}
            className="flex items-center gap-2 text-gray-400 hover:text-[#e8ab61] transition-colors mb-8"
          >
            <ArrowRight className="w-5 h-5" />
            Back to All Projects
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-[#e8ab61]/10 text-[#e8ab61] rounded-full text-sm mb-6 capitalize">
                {project.category === 'htmlcssjs' ? 'HTML/CSS/JS' : 
                 project.category === 'htmlcss' ? 'HTML/CSS' : 
                 project.category === 'fullstack' ? 'Full Stack' : 
                 'C Programming'}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {project.name}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#1a1a1a] border border-[#e8ab61]/30 text-white rounded-lg text-sm hover:border-[#e8ab61] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {project.client && (
                  <div className="bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-xl p-4">
                    <User className="w-6 h-6 text-[#e8ab61] mb-2" />
                    <p className="text-sm text-gray-400 mb-1">Client</p>
                    <p className="text-white font-semibold text-sm">{project.client}</p>
                  </div>
                )}
                {project.duration && (
                  <div className="bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-xl p-4">
                    <Clock className="w-6 h-6 text-[#e8ab61] mb-2" />
                    <p className="text-sm text-gray-400 mb-1">Duration</p>
                    <p className="text-white font-semibold text-sm">{project.duration}</p>
                  </div>
                )}
                <div className="bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-xl p-4">
                  <Briefcase className="w-6 h-6 text-[#e8ab61] mb-2" />
                  <p className="text-sm text-gray-400 mb-1">Technologies</p>
                  <p className="text-white font-semibold text-sm">{project.tech.length}+</p>
                </div>
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-all inline-flex items-center gap-2"
                  >
                    <Code2 className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#e8ab61] hover:bg-[#d79e50] text-[#0f0f0f] rounded-lg transition-all font-medium inline-flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>

            {/* Project Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden h-[500px] bg-gradient-to-br from-[#e8ab61]/20 to-[#e8ab61]/5"
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      {project.longDescription && (
        <section className="py-16 bg-[#0f0f0f]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Project <span className="text-[#e8ab61]">Overview</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Key Features */}
      {project.features && project.features.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Key <span className="text-[#e8ab61]">Features</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-xl p-4 hover:border-[#e8ab61] transition-all"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#e8ab61] flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Challenges & Learnings */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {project.challenges && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-2xl p-8"
              >
                <div className="w-12 h-12 bg-[#e8ab61]/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Challenges</h3>
                <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
              </motion.div>
            )}
            {project.learnings && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-2xl p-8"
              >
                <div className="w-12 h-12 bg-[#e8ab61]/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Key Learnings</h3>
                <p className="text-gray-300 leading-relaxed">{project.learnings}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#e8ab61]/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a <span className="text-[#e8ab61]">similar project?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's work together to bring your ideas to life with cutting-edge web solutions.
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="bg-[#e8ab61] hover:bg-[#d79e50] text-[#0f0f0f] px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}