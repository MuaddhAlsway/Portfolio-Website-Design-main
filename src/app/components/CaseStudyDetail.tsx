import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronDown, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { tdLogisticsCaseStudy } from '@/app/data/caseStudies';

interface CaseStudySection {
  title: string;
  content: string | string[];
  icon?: string;
}

export function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['overview']));

  // Get the case study based on ID
  let caseStudy = null;
  if (id === 'td-logistics') {
    caseStudy = tdLogisticsCaseStudy;
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-[#e8ab61] hover:text-[#f0b86f] font-semibold"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/#case-studies')}
            className="inline-flex items-center gap-2 text-[#e8ab61] hover:text-[#f0b86f] font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Case Studies
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <ImageWithFallback
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-2xl text-[#e8ab61] font-semibold">
              {caseStudy.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="space-y-8">
          {/* Overview */}
          <Section
            title="Overview"
            isExpanded={expandedSections.has('overview')}
            onToggle={() => toggleSection('overview')}
            content={caseStudy.sections.overview.content}
          />

          {/* The Client */}
          <Section
            title="The Client"
            isExpanded={expandedSections.has('client')}
            onToggle={() => toggleSection('client')}
            content={caseStudy.sections.client.content}
          />

          {/* Challenges */}
          <div>
            <button
              onClick={() => toggleSection('challenges')}
              className="w-full flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5 transition-all border border-white/10 hover:border-[#e8ab61]/30"
            >
              <h2 className="text-2xl font-bold text-white">Challenges</h2>
              <ChevronDown
                className={`w-6 h-6 text-[#e8ab61] transition-transform ${
                  expandedSections.has('challenges') ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSections.has('challenges') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 space-y-4"
              >
                {caseStudy.sections.challenges.map((challenge, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e8ab61]/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#e8ab61]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">{challenge.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{challenge.content}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Project Goals */}
          <div>
            <button
              onClick={() => toggleSection('goals')}
              className="w-full flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5 transition-all border border-white/10 hover:border-[#e8ab61]/30"
            >
              <h2 className="text-2xl font-bold text-white">Project Goals</h2>
              <ChevronDown
                className={`w-6 h-6 text-[#e8ab61] transition-transform ${
                  expandedSections.has('goals') ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSections.has('goals') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 space-y-4"
              >
                {caseStudy.sections.goals.map((goal, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e8ab61]/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#e8ab61]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">{goal.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{goal.content}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* The Solution */}
          <Section
            title="The Solution"
            isExpanded={expandedSections.has('solution')}
            onToggle={() => toggleSection('solution')}
            content={caseStudy.sections.solution.content}
          />

          {/* Key Features */}
          <div>
            <button
              onClick={() => toggleSection('features')}
              className="w-full flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5 transition-all border border-white/10 hover:border-[#e8ab61]/30"
            >
              <h2 className="text-2xl font-bold text-white">Key Features</h2>
              <ChevronDown
                className={`w-6 h-6 text-[#e8ab61] transition-transform ${
                  expandedSections.has('features') ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSections.has('features') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.sections.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#e8ab61]/30 transition-all hover:bg-white/[0.08]"
                    >
                      <h3 className="font-bold text-white mb-2 text-lg">{feature.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.content}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Technical Stack */}
          <div>
            <button
              onClick={() => toggleSection('tech')}
              className="w-full flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5 transition-all border border-white/10 hover:border-[#e8ab61]/30"
            >
              <h2 className="text-2xl font-bold text-white">Technical Stack</h2>
              <ChevronDown
                className={`w-6 h-6 text-[#e8ab61] transition-transform ${
                  expandedSections.has('tech') ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSections.has('tech') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {Object.entries(caseStudy.sections.techStack).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-[#e8ab61] font-bold mb-4 capitalize text-lg">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {(items as string[]).map((item, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full bg-[#e8ab61]/10 text-[#e8ab61] text-sm font-semibold border border-[#e8ab61]/20 hover:border-[#e8ab61]/50 transition-colors"
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

          {/* Results & Impact */}
          <div>
            <button
              onClick={() => toggleSection('results')}
              className="w-full flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5 transition-all border border-white/10 hover:border-[#e8ab61]/30"
            >
              <h2 className="text-2xl font-bold text-white">Results & Impact</h2>
              <ChevronDown
                className={`w-6 h-6 text-[#e8ab61] transition-transform ${
                  expandedSections.has('results') ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSections.has('results') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 space-y-4"
              >
                {caseStudy.sections.results.map((result, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">{result.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{result.content}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Key Learnings */}
          <div>
            <button
              onClick={() => toggleSection('learnings')}
              className="w-full flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5 transition-all border border-white/10 hover:border-[#e8ab61]/30"
            >
              <h2 className="text-2xl font-bold text-white">Key Learnings</h2>
              <ChevronDown
                className={`w-6 h-6 text-[#e8ab61] transition-transform ${
                  expandedSections.has('learnings') ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSections.has('learnings') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 space-y-4"
              >
                {caseStudy.sections.learnings.map((learning, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <p className="text-gray-400 leading-relaxed">{learning.content}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Future Opportunities */}
          <div>
            <button
              onClick={() => toggleSection('future')}
              className="w-full flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5 transition-all border border-white/10 hover:border-[#e8ab61]/30"
            >
              <h2 className="text-2xl font-bold text-white">Future Opportunities</h2>
              <ChevronDown
                className={`w-6 h-6 text-[#e8ab61] transition-transform ${
                  expandedSections.has('future') ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSections.has('future') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 space-y-4"
              >
                {caseStudy.sections.future.map((opportunity, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">{opportunity.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{opportunity.content}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#e8ab61]/10 to-[#e8ab61]/5 border border-[#e8ab61]/30"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Interested in working together?</h3>
            <p className="text-gray-400 mb-6">
              If you'd like to discuss how I can help with your project, feel free to get in touch.
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#e8ab61] text-[#0f0f0f] rounded-full font-semibold hover:bg-[#f0b86f] transition-colors"
            >
              Start a Conversation
              <ExternalLink className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  content: string | string[];
}

function Section({ title, isExpanded, onToggle, content }: SectionProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5 transition-all border border-white/10 hover:border-[#e8ab61]/30"
      >
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <ChevronDown
          className={`w-6 h-6 text-[#e8ab61] transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10"
        >
          {Array.isArray(content) ? (
            <ul className="space-y-3">
              {content.map((item, idx) => (
                <li key={idx} className="text-gray-400 flex gap-3 leading-relaxed">
                  <span className="text-[#e8ab61] font-bold flex-shrink-0 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 leading-relaxed whitespace-pre-line">{content}</p>
          )}
        </motion.div>
      )}
    </div>
  );
}
