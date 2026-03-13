import { motion } from 'motion/react';
import { Award, Calendar, Youtube, GraduationCap, User, Github } from 'lucide-react';

interface Course {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  platform: string;
  instructor?: string;
  duration: string;
  tech: string[];
  isCertified?: boolean;
  certificateLink?: string;
  github?: string;
}

const courses: Course[] = [
  {
    id: 1,
    name: 'HTML & CSS Mastery',
    startDate: 'Nov 2023',
    endDate: 'Dec 2023',
    platform: 'YouTube',
    instructor: 'supersimpledev',
    duration: '1y 1m 21d total | 2y 0m 21d so far',
    tech: ['HTML5', 'CSS3'],
    isCertified: true,
    certificateLink: 'https://www.freecodecamp.org/certification/fcc-f4785d39-02d1-445e-8a81-3dbd12ca13ea/responsive-web-design',
    github: 'https://github.com/MuaddhAlsway/HTMLCSS-FULLCOURSE.git'
  },
  {
    id: 2,
    name: 'CS50 | The Art of Programming',
    startDate: 'Dec 2024',
    endDate: 'May 2025',
    platform: 'Harvard University',
    duration: '5m 13d total | 7m 20d so far',
    tech: ['C', 'Algorithms', 'Data Structures'],
    isCertified: true,
    certificateLink: 'https://certificates.cs50.io/b113f8e7-3911-45fe-aa7c-ed7574cc86fd.pdf?size=letter',
    github: 'https://github.com/code50/150309909.git'
  },
  {
    id: 3,
    name: 'JavaScript Algorithms and Data Structures',
    startDate: 'Nov 2024',
    endDate: 'May 2025',
    platform: 'YouTube',
    instructor: 'supersimpledev',
    duration: '6m 8d total | 7m 20d so far',
    tech: ['JavaScript', 'DOM', 'ES6+'],
    isCertified: true,
    certificateLink: 'https://www.freecodecamp.org/certification/fcc-f4785d39-02d1-445e-8a81-3dbd12ca13ea/javascript-algorithms-and-data-structures-v8',
    github: 'https://github.com/MuaddhAlsway/JavaScript-From-Beginner-to-Advanced.git'
  },
  {
    id: 4,
    name: 'Front-End Development Libraries',
    startDate: 'Oct 2025',
    endDate: 'Dec 2025',
    platform: 'YouTube',
    instructor: 'supersimpledev',
    duration: '2m 10d total | 0m 3d so far',
    tech: ['React', 'Hooks', 'Components'],
    isCertified: true,
    certificateLink: 'https://www.freecodecamp.org/certification/fcc-f4785d39-02d1-445e-8a81-3dbd12ca13ea/front-end-development-libraries',
    github: 'https://github.com/MuaddhAlsway/React15-PremiumMasterClass.git'
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    startDate: 'Dec 2025',
    endDate: 'Ongoing',
    platform: 'YouTube',
    duration: 'Ongoing',
    tech: ['Tailwind CSS', 'Utility-first CSS'],
    isCertified: false
  },
  {
    id: 6,
    name: 'PHP | The Complete PHP',
    startDate: 'Dec 2025',
    endDate: 'Dec 2025',
    platform: 'YouTube',
    duration: '14d total',
    tech: ['PHP', 'Server-side Logic'],
    isCertified: false,
    github: 'https://github.com/MuaddhAlsway/PHP-COURSE---BRO-CODE.git'
  },
  {
    id: 7,
    name: 'C | The Complete Course',
    startDate: 'Jun 2025',
    endDate: 'Aug 2025',
    platform: 'YouTube',
    duration: '2m 15d total | 5m 20d so far',
    tech: ['C Programming'],
    isCertified: false,
    github: 'https://github.com/MuaddhAlsway/C-by-Bro-code.git'
  }
];

export function Courses() {
  return (
    <section id="courses" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Courses & <span className="text-[#e8ab61]">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning journey through {courses.length} comprehensive courses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => {
            const isEvenRow = Math.floor(index / 2) % 2 === 0;
            const animationDirection = isEvenRow ? 30 : -30;
            
            return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: animationDirection }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="backdrop-blur-md bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#e8ab61]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-[#e8ab61]" />
                    <h3 className="text-xl font-bold text-white">{course.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Youtube className="w-4 h-4" />
                    <span>{course.platform}</span>
                  </div>
                  {course.instructor && (
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{course.instructor}</span>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  {course.isCertified && course.certificateLink && (
                    <a
                      href={course.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#e8ab61]/10 rounded-lg hover:bg-[#e8ab61]/20 transition-colors"
                      title="View Certificate"
                    >
                      <Award className="w-6 h-6 text-[#e8ab61]" />
                    </a>
                  )}
                  {!course.isCertified && (
                    <div className="p-3 bg-[#e8ab61]/10 rounded-lg">
                      <Award className="w-6 h-6 text-[#e8ab61]" />
                    </div>
                  )}
                  {course.github && (
                    <a
                      href={course.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      title="View on GitHub"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>{course.startDate} - {course.endDate}</span>
              </div>

              <div className="bg-white/5 rounded-lg p-3 mb-4">
                <div className="text-xs text-gray-400 mb-1">Duration</div>
                <div className="text-sm text-white font-medium">{course.duration}</div>
              </div>

              <div className="flex flex-wrap gap-2">
                {course.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#e8ab61]/10 text-[#e8ab61] rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              </div>
            </motion.div>
          )
        })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 text-center">
            <div className="text-4xl font-bold text-[#e8ab61] mb-2">7</div>
            <div className="text-gray-400">Total Courses</div>
          </div>
          <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 text-center">
            <div className="text-4xl font-bold text-[#e8ab61] mb-2">4</div>
            <div className="text-gray-400">Certifications</div>
          </div>
          <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 text-center">
            <div className="text-4xl font-bold text-[#e8ab61] mb-2">2+</div>
            <div className="text-gray-400">Years Learning</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
