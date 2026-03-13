import { motion } from 'motion/react';
import { Code, Database, Wrench, Lightbulb, Users, Palette } from 'lucide-react';

const frontendSkills = [
  'React 18/19', 'Next.js', 'Vite', 'HTML5', 'CSS3', 'JavaScript (ES6+)',
  'Tailwind CSS', 'Vanilla CSS', 'React Router', 'React Hooks'
];

const backendSkills = [
  'Node.js', 'Express.js', 'PHP', 'C Programming', 'SQLite', 'Turso Database',
  'REST APIs', 'JWT Authentication'
];

const toolsSkills = [
  'Git/GitHub', 'Vercel', 'Netlify', 'VS Code', 'Figma',
  'Font Awesome', 'Devicons', 'Boxicons'
];

const nonTechnicalSkills = [
  'UI/UX Design & Prototyping',
  'Responsive Web Design (Mobile-first)',
  'Problem Solving & Debugging',
  'Project Management',
  'Communication & Collaboration',
  'Creative Thinking',
  'Attention to Detail'
];

export function Skills() {
  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-[#e8ab61]">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical and non-technical capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Frontend Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#e8ab61]/20 rounded-lg">
                <Code className="w-6 h-6 text-[#e8ab61]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Frontend Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-[#e8ab61]/10 text-white rounded-lg text-sm font-medium hover:bg-[#e8ab61]/20 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Backend Technologies */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#e8ab61]/20 rounded-lg">
                <Database className="w-6 h-6 text-[#e8ab61]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Backend Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-[#e8ab61]/10 text-white rounded-lg text-sm font-medium hover:bg-[#e8ab61]/20 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#e8ab61]/20 rounded-lg">
                <Wrench className="w-6 h-6 text-[#e8ab61]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Tools & Platforms</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {toolsSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-[#e8ab61]/10 text-white rounded-lg text-sm font-medium hover:bg-[#e8ab61]/20 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Non-Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#e8ab61]/20 rounded-lg">
                <Lightbulb className="w-6 h-6 text-[#e8ab61]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Non-Technical Skills</h3>
            </div>
            <div className="space-y-3">
              {nonTechnicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#e8ab61] rounded-full" />
                  <span className="text-white">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
