import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projects, categories } from '@/app/data/projects';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#e8ab61]">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of {projects.length} projects showcasing my journey in web development and programming
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-[#e8ab61] text-[#0f0f0f]'
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const isEvenRow = Math.floor(index / 3) % 2 === 0;
            const animationDirection = isEvenRow ? 30 : -30;
            
            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: animationDirection }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group backdrop-blur-md bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#e8ab61]/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 bg-gray-900 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#e8ab61] transition-colors flex-1">
                    {project.name}
                  </h3>
                  <div className="flex gap-2 ml-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-[#e8ab61]/20 transition-colors"
                        title="GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 text-[#e8ab61]" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-[#e8ab61]/20 transition-colors"
                        title="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4 text-[#e8ab61]" />
                      </a>
                    )}
                    {project.linkedin && (
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-[#e8ab61]/20 transition-colors"
                        title="LinkedIn Post"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 text-[#e8ab61]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                      </a>
                    )}
                    {project.notion && (
                      <a
                        href={project.notion}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-[#e8ab61]/20 transition-colors"
                        title="Notion Documentation"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 text-[#e8ab61]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.459 4.208c.746.606 1.026.56 2.428.56h13.24c.886 0 1.314-.028 1.733-.135.578-.16 1.074-.57 1.278-1.16.082-.243.082-.714.082-2.956V1.115c0-.anglo.028-.666-.082-.928-.204-.59-.7-1-1.278-1.16-.419-.107-.847-.135-1.733-.135H6.887c-1.402 0-1.682-.046-2.428.56-.746.606-.996 1.035-.996 2.41v.266c0 .3-.043.843 0 1.175.087.572.571 1.11 1.202 1.222.055.01.11.015.166.015.3 0 .584-.087.84-.26.504-.35.756-.935.756-1.619 0-.601-.255-1.075-.756-1.425-.3-.21-.6-.28-.84-.28H4.459zm15.113 2.852c.464 0 .823.350.823.784 0 .433-.36.783-.823.783-.464 0-.823-.35-.823-.783 0-.434.36-.784.823-.784zm-4.117 0c.464 0 .823.350.823.784 0 .433-.36.783-.823.783-.464 0-.823-.35-.823-.783 0-.434.36-.784.823-.784zm-4.117 0c.464 0 .823.350.823.784 0 .433-.36.783-.823.783-.464 0-.823-.35-.823-.783 0-.434.36-.784.823-.784zm-4.117 0c.464 0 .823.350.823.784 0 .433-.36.783-.823.783-.464 0-.823-.35-.823-.783 0-.434.36-.784.823-.784z" />
                        </svg>
                      </a>
                    )}
                    {project.wiki && (
                      <a
                        href={project.wiki}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-[#e8ab61]/20 transition-colors"
                        title="Wiki Documentation"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 text-[#e8ab61]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                        </svg>
                      </a>
                    )}
                    {project.diagram && (
                      <a
                        href={project.diagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-[#e8ab61]/20 transition-colors"
                        title="Diagram"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 text-[#e8ab61]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#e8ab61]/10 text-[#e8ab61] rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-[#e8ab61]/10 text-[#e8ab61] rounded-full text-xs font-medium cursor-pointer hover:bg-[#e8ab61]/20 transition-colors">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
