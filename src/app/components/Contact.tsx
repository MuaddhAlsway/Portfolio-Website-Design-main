import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import { sendEmail } from '@/utils/emailService';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to send message. Please try contacting via email or WhatsApp directly.');
      console.error('Error sending message:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#e8ab61]">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#e8ab61]/20 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-[#e8ab61]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400 text-center">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-white mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e8ab61] transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e8ab61] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e8ab61] transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-medium">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e8ab61] transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-8 py-3 bg-[#e8ab61] text-[#0f0f0f] rounded-lg font-semibold hover:bg-[#d79e50] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#e8ab61]/20 rounded-lg">
                  <Mail className="w-6 h-6 text-[#e8ab61]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Email</div>
                  <a href="mailto:muaddhalsway@gmail.com" className="text-white hover:text-[#e8ab61] transition-colors">
                    muaddhalsway@gmail.com
                  </a>
                </div>

                <div>
                  <div className="text-gray-400 text-sm mb-1">WhatsApp</div>
                  <a href="https://wa.me/966560394576" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e8ab61] transition-colors">
                    +966 560 394 576
                  </a>
                </div>

                <div>
                  <div className="text-gray-400 text-sm mb-1">Location</div>
                  <div className="text-white">Available for Remote Work</div>
                </div>

                <div>
                  <div className="text-gray-400 text-sm mb-1">Response Time</div>
                  <div className="text-white">Within 24-48 hours</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/muaddhalsway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 bg-[#e8ab61]/10 hover:bg-[#e8ab61]/20 rounded-lg border border-[#e8ab61]/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-6 h-6 text-[#e8ab61]" />
                  <span className="text-white font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/MuaddhAlsway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 bg-[#e8ab61]/10 hover:bg-[#e8ab61]/20 rounded-lg border border-[#e8ab61]/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Github className="w-6 h-6 text-[#e8ab61]" />
                  <span className="text-white font-medium">GitHub</span>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Availability</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-white">Available for New Projects</span>
                </div>
                <div className="text-gray-400 text-sm">
                  Open to freelance opportunities, collaborations, and full-time positions
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
