import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    // Replace with your WhatsApp number (include country code)
    const phoneNumber = '966501234567'; // Example: Saudi Arabia number
    const message = 'Hello! I would like to connect with you.';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Menu Items */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-20 right-0 flex flex-col gap-3 mb-4"
        >
          {/* WhatsApp Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#20BA5A] transition-all duration-300 shadow-lg"
            title="Contact on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </motion.button>
        </motion.div>
      )}

      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-[#e8ab61] to-[#d79e50] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.div>
      </motion.button>
    </div>
  );
}
