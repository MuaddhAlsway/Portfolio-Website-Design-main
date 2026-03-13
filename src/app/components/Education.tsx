import { motion } from 'motion/react';
import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'Self-Taught Full Stack Developer',
    institution: 'Online Learning Platforms',
    period: '2023 - Present',
    description: 'Comprehensive self-directed learning focused on modern web development technologies and best practices.',
    courses: [
      'HTML & CSS Mastery',
      'JavaScript Complete Guide',
      'React.JS 19 Complete Guide',
      'CS50: The Art of Programming',
      'Tailwind CSS',
      'PHP Complete Course',
      'C Programming'
    ],
    achievements: [
      'Completed 7 comprehensive courses',
      'Built 36+ real-world projects',
      'Mastered modern web development stack',
      'Continuous learning and skill development'
    ]
  },
  {
    id: 2,
    degree: 'Programming Fundamentals',
    institution: 'Harvard CS50 (YouTube)',
    period: 'Dec 2024 - May 2025',
    description: 'Intensive computer science course covering algorithms, data structures, and problem-solving techniques.',
    courses: [
      'C Programming',
      'Data Structures',
      'Algorithms',
      'Memory Management',
      'Problem Solving'
    ],
    achievements: [
      'Developed 5 C programming projects',
      'Strong foundation in computer science',
      'Algorithm design and analysis',
      'Efficient problem-solving skills'
    ]
  },
  {
    id: 3,
    degree: 'Web Development Specialization',
    institution: 'YouTube Learning',
    period: '2023 - Present',
    description: 'Focused specialization in modern web development frameworks and libraries.',
    courses: [
      'React 18/19',
      'Next.js',
      'Tailwind CSS',
      'Responsive Design',
      'Modern JavaScript'
    ],
    achievements: [
      '20+ HTML/CSS/JS projects',
      '13 Full Stack applications',
      'Mobile-first design approach',
      'Modern framework expertise'
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="text-[#e8ab61]">Learning</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My educational journey and continuous learning path
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e8ab61] to-[#d79e50]" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
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
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-5 h-5 text-[#e8ab61]" />
                          <span className="text-sm text-[#e8ab61] font-medium">{edu.period}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                        <div className="text-gray-400">{edu.institution}</div>
                      </div>
                      <div className="p-3 bg-[#e8ab61]/10 rounded-lg">
                        <BookOpen className="w-6 h-6 text-[#e8ab61]" />
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{edu.description}</p>

                    <div className="mb-4">
                      <div className="text-white font-semibold mb-2">Courses Completed:</div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-[#e8ab61]/10 text-[#e8ab61] rounded-full text-xs font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-white font-semibold mb-2">Key Achievements:</div>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <div className="w-1.5 h-1.5 bg-[#e8ab61] rounded-full mt-1.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
