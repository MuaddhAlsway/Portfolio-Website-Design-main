import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown } from 'lucide-react';

interface CaseStudySection {
  title: string;
  content: string | string[];
  icon?: string;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: {
    title: string;
    subtitle: string;
    image: string;
    sections: {
      overview: CaseStudySection;
      client: CaseStudySection;
      challenges: CaseStudySection[];
      goals: CaseStudySection[];
      solution: CaseStudySection;
      features: CaseStudySection[];
      results: CaseStudySection[];
      techStack: {
        frontend: string[];
        backend: string[];
        database: string[];
        security: string[];
      };
      learnings: CaseStudySection[];
      future: CaseStudySection[];
    };
  };
}

export function CaseStudyModal({ isOpen, onClose, caseStudy }: CaseStudyModalProps) {
  const [expandedSection, setExpandedSection] = useState<string>('overview');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              className="w-full max-w-4xl bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-3xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="absolute top-6 right-6 z-10">
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Header Section */}
              <div className="relative h-96 overflow-hidden rounded-t-3xl">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl font-bold text-white mb-2"
                  >
                    {caseStudy.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-[#e8ab61]"
                  >
                    {caseStudy.subtitle}
                  </motion.p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 max-h-[70vh] overflow-y-auto">
                <div className="space-y-6">
                  {/* Overview */}
                  <SectionAccordion
                    title="Overview"
                    isExpanded={expandedSection === 'overview'}
                    onToggle={() => toggleSection('overview')}
                    content={caseStudy.sections.overview.content}
                  />

                  {/* Client */}
                  <SectionAccordion
                    title="The Client"
                    isExpanded={expandedSection === 'client'}
                    onToggle={() => toggleSection('client')}
                    content={caseStudy.sections.client.content}
                  />

                  {/* Challenges */}
                  <div>
                    <button
                      onClick={() => toggleSection('challenges')}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                    >
                      <h3 className="text-xl font-bold text-white">Challenges</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#e8ab61] transition-transform ${
                          expandedSection === 'challenges' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedSection === 'challenges' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-3 pl-4"
                      >
                        {caseStudy.sections.challenges.map((challenge, idx) => (
                          <div key={idx} className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e8ab61]/20 flex items-center justify-center mt-1">
                              <div className="w-2 h-2 rounded-full bg-[#e8ab61]" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-1">{challenge.title}</h4>
                              <p className="text-gray-400 text-sm">{challenge.content}</p>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Goals */}
                  <div>
                    <button
                      onClick={() => toggleSection('goals')}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                    >
                      <h3 className="text-xl font-bold text-white">Project Goals</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#e8ab61] transition-transform ${
                          expandedSection === 'goals' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedSection === 'goals' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-3 pl-4"
                      >
                        {caseStudy.sections.goals.map((goal, idx) => (
                          <div key={idx} className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e8ab61]/20 flex items-center justify-center mt-1">
                              <div className="w-2 h-2 rounded-full bg-[#e8ab61]" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-1">{goal.title}</h4>
                              <p className="text-gray-400 text-sm">{goal.content}</p>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Solution */}
                  <SectionAccordion
                    title="The Solution"
                    isExpanded={expandedSection === 'solution'}
                    onToggle={() => toggleSection('solution')}
                    content={caseStudy.sections.solution.content}
                  />

                  {/* Key Features */}
                  <div>
                    <button
                      onClick={() => toggleSection('features')}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                    >
                      <h3 className="text-xl font-bold text-white">Key Features</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#e8ab61] transition-transform ${
                          expandedSection === 'features' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedSection === 'features' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {caseStudy.sections.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#e8ab61]/50 transition-colors"
                            >
                              <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                              <p className="text-gray-400 text-sm">{feature.content}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <button
                      onClick={() => toggleSection('tech')}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                    >
                      <h3 className="text-xl font-bold text-white">Technical Stack</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#e8ab61] transition-transform ${
                          expandedSection === 'tech' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedSection === 'tech' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {Object.entries(caseStudy.sections.techStack).map(([category, items]) => (
                          <div key={category}>
                            <h4 className="font-semibold text-[#e8ab61] mb-3 capitalize">{category}</h4>
                            <div className="flex flex-wrap gap-2">
                              {(items as string[]).map((item, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 rounded-full bg-[#e8ab61]/10 text-[#e8ab61] text-sm font-medium"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Results */}
                  <div>
                    <button
                      onClick={() => toggleSection('results')}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                    >
                      <h3 className="text-xl font-bold text-white">Results & Impact</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#e8ab61] transition-transform ${
                          expandedSection === 'results' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedSection === 'results' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-3 pl-4"
                      >
                        {caseStudy.sections.results.map((result, idx) => (
                          <div key={idx} className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                              <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-1">{result.title}</h4>
                              <p className="text-gray-400 text-sm">{result.content}</p>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Learnings */}
                  <div>
                    <button
                      onClick={() => toggleSection('learnings')}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                    >
                      <h3 className="text-xl font-bold text-white">Key Learnings</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#e8ab61] transition-transform ${
                          expandedSection === 'learnings' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedSection === 'learnings' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-3 pl-4"
                      >
                        {caseStudy.sections.learnings.map((learning, idx) => (
                          <div key={idx} className="flex gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                              <div className="w-2 h-2 rounded-full bg-blue-500" />
                            </div>
                            <p className="text-gray-400 text-sm">{learning.content}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

interface SectionAccordionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  content: string | string[];
}

function SectionAccordion({ title, isExpanded, onToggle, content }: SectionAccordionProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
      >
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#e8ab61] transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10"
        >
          {Array.isArray(content) ? (
            <ul className="space-y-2">
              {content.map((item, idx) => (
                <li key={idx} className="text-gray-400 flex gap-3">
                  <span className="text-[#e8ab61] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 leading-relaxed">{content}</p>
          )}
        </motion.div>
      )}
    </div>
  );
}
