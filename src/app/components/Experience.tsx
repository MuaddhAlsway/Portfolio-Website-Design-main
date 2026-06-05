import { motion } from 'motion/react';
import { Briefcase, Code2 } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Frontend Web Developer',
    company: 'Establishment MIBDAAT EL-THELATH',
    period: 'Feb 2025 - Present',
    type: 'Full-Time',
    location: 'Jeddah, Saudi Arabia',
    description: 'Delivering responsive websites and client-focused projects with high usability and on-time delivery. Specializing in modern frontend development, responsive design, and user-centric interfaces for diverse client needs.',
    achievements: [
      'Delivered responsive websites for KoffeyCherry (coffee brand showcase with smooth animations)',
      'Developed Mesaha Lakum (comprehensive event management platform with admin dashboard)',
      'Built Writer\'s Journey (full-stack book launch platform with email marketing)',
      'Created TD Logistics (integrated logistics platform with real-time tracking and RTL support)',
      'Implemented bilingual support (Arabic/English) with RTL design patterns',
      'Ensured high usability standards and on-time project delivery',
      'Collaborated with clients to translate requirements into pixel-perfect implementations',
      'Optimized performance and responsive design across all devices'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Express.js', 'Turso', 'Resend', 'Responsive Design', 'RTL Support']
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'MULAB',
    period: '2023 - Present',
    type: 'Self-Employed',
    location: 'Remote',
    description: 'Building modern, full-stack web applications for creative agencies, startups, and businesses. Specializing in bilingual platforms, real-time applications, and enterprise-grade solutions with secure authentication and scalable architecture.',
    achievements: [
      'Developed TRQ Studio - Bilingual Portfolio & Content Management Platform with admin dashboard',
      'Built TD Logistics - Secure Digital Logistics Platform with real-time tracking',
      'Created Mesaha Lakum - Cultural Artspace Platform with event management',
      'Implemented multilingual support (Arabic/English) with RTL layouts',
      'Designed scalable database architectures with proper authentication',
      'Delivered full-stack solutions with React, TypeScript, and Node.js',
      'Maintained high code quality and performance standards',
      'Provided ongoing support and maintenance for deployed projects'
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Express.js', 'SQLite', 'Turso', 'JWT', 'Tailwind CSS', 'Next.js', 'PHP']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-[#e8ab61]">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in web development and programming
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e8ab61] to-[#d79e50]" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#e8ab61] rounded-full border-4 border-[#0f0f0f] z-10" />

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#e8ab61]/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-5 h-5 text-[#e8ab61]" />
                          <span className="text-sm text-[#e8ab61] font-medium">{exp.type}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="text-gray-400">{exp.company}</div>
                      </div>
                      <div className="p-3 bg-[#e8ab61]/10 rounded-lg">
                        <Code2 className="w-6 h-6 text-[#e8ab61]" />
                      </div>
                    </div>

                    <div className="text-sm text-[#e8ab61] mb-4">{exp.period}</div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <div className="text-white font-semibold mb-2">Key Achievements:</div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <div className="w-1.5 h-1.5 bg-[#e8ab61] rounded-full mt-1.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#e8ab61]/10 text-[#e8ab61] rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
