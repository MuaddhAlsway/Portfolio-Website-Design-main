import { useParams, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Code2, ExternalLink, Clock, Briefcase } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { tdLogisticsCaseStudy } from '@/app/data/caseStudies';

export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Scroll to top when case study page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
            onClick={() => navigate('/#case-studies')}
            className="flex items-center gap-2 text-gray-400 hover:text-[#e8ab61] transition-colors mb-8"
          >
            <ArrowRight className="w-5 h-5" />
            Back to All Case Studies
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Case Study Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-[#e8ab61]/10 text-[#e8ab61] rounded-full text-sm mb-6 capitalize">
                Full Stack
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {caseStudy.subtitle}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {caseStudy.sections.techStack.frontend.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#1a1a1a] border border-[#e8ab61]/30 text-white rounded-lg text-sm hover:border-[#e8ab61] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-xl p-4">
                  <Briefcase className="w-6 h-6 text-[#e8ab61] mb-2" />
                  <p className="text-sm text-gray-400 mb-1">Client</p>
                  <p className="text-white font-semibold text-sm">TD Logistics</p>
                </div>
                <div className="bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-xl p-4">
                  <Clock className="w-6 h-6 text-[#e8ab61] mb-2" />
                  <p className="text-sm text-gray-400 mb-1">Duration</p>
                  <p className="text-white font-semibold text-sm">5 months</p>
                </div>
                <div className="bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-xl p-4">
                  <Code2 className="w-6 h-6 text-[#e8ab61] mb-2" />
                  <p className="text-sm text-gray-400 mb-1">Tech Stack</p>
                  <p className="text-white font-semibold text-sm">5+</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://tdlogistics.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#e8ab61] hover:bg-[#d79e50] text-[#0f0f0f] rounded-lg transition-all font-medium inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Platform
                </a>
              </div>
            </motion.div>

            {/* Case Study Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden h-[500px] bg-gradient-to-br from-[#e8ab61]/20 to-[#e8ab61]/5"
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Overview */}
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
              {caseStudy.sections.overview.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Client */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The <span className="text-[#e8ab61]">Client</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {caseStudy.sections.client.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              The <span className="text-[#e8ab61]">Challenges</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.sections.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-xl p-4 hover:border-[#e8ab61] transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#e8ab61] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">{challenge.title}</h3>
                    <p className="text-gray-300 text-sm">{challenge.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

      {/* Project Goals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Project <span className="text-[#e8ab61]">Goals</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.sections.goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-xl p-4 hover:border-[#e8ab61] transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#e8ab61] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">{goal.title}</h3>
                    <p className="text-gray-300 text-sm">{goal.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The <span className="text-[#e8ab61]">Solution</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {caseStudy.sections.solution.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
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
              {caseStudy.sections.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-xl p-4 hover:border-[#e8ab61] transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#e8ab61] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Stack & Results */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Technical Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-[#e8ab61]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Stack</h3>
              <div className="space-y-4">
                {Object.entries(caseStudy.sections.techStack).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-[#e8ab61] font-semibold mb-2 capitalize">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {(items as string[]).slice(0, 3).map((item, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[#e8ab61]/10 text-[#e8ab61] text-xs rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-[#e8ab61]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Key Results</h3>
              <ul className="space-y-3">
                {caseStudy.sections.results.map((result, index) => (
                  <li key={index} className="flex gap-2 text-gray-300 text-sm">
                    <span className="text-[#e8ab61] font-bold">•</span>
                    <span><strong>{result.title}:</strong> {result.content}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Key <span className="text-[#e8ab61]">Learnings</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.sections.learnings.map((learning, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-xl p-4 hover:border-[#e8ab61] transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#e8ab61] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">{learning.title}</h3>
                    <p className="text-gray-300 text-sm">{learning.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Opportunities */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Future <span className="text-[#e8ab61]">Opportunities</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.sections.future.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-[#1a1a1a] border border-[#e8ab61]/20 rounded-xl p-4 hover:border-[#e8ab61] transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#e8ab61] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">{opportunity.title}</h3>
                    <p className="text-gray-300 text-sm">{opportunity.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Let's work together to build a secure, scalable platform that transforms your business.
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
