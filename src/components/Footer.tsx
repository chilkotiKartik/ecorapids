import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TreePine, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, ArrowRight, Send } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const socialLinks = [
    { icon: Facebook, url: '#', name: 'Facebook' },
    { icon: Twitter, url: '#', name: 'Twitter' },
    { icon: Instagram, url: '#', name: 'Instagram' },
    { icon: Linkedin, url: '#', name: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'Events', path: '/events' },
    { name: 'Challenges', path: '/challenges' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resources', path: '/resources' },
    { name: 'About Us', path: '/about' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      {/* Wave SVG */}
      <div className="text-gray-100 dark:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <TreePine className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">EcoLearn</span>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400">
              Empowering communities through environmental education and sustainable practices.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-400 hover:text-green-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
              >
                <Mail className="h-5 w-5 text-green-600" />
                <span>contact@ecolearn.org</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
              >
                <Phone className="h-5 w-5 text-green-600" />
                <span>+91 9568885012</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
              >
                <MapPin className="h-5 w-5 text-green-600" />
                <span>Uttarakhand , Earth City</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Stay updated with our latest initiatives and events.
            </p>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600 dark:text-green-400"
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
              
              <AnimatedButton isSubmitted={isSubmitted} isHovered={isHovered} setIsHovered={setIsHovered} />
            </form>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-center text-gray-600 dark:text-gray-400 flex items-center justify-center">
            Made with <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                repeatType: "loop"
              }}
            >
              <Heart className="h-4 w-4 mx-1 text-red-500" />
            </motion.div> By Kartik Chilkoti and Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function AnimatedButton({ isSubmitted, isHovered, setIsHovered }: { 
  isSubmitted: boolean; 
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
}) {
  return (
    <motion.button
      type="submit"
      initial={{ backgroundColor: "#16a34a" }}
      animate={{ 
        backgroundColor: isSubmitted ? "#15803d" : "#16a34a",
        scale: isSubmitted ? [1, 1.05, 1] : 1
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-full px-4 py-2 text-white rounded-md transition-colors flex items-center justify-center"
    >
      {isSubmitted ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center"
        >
          Subscribed! Thank you
        </motion.span>
      ) : (
        <motion.span
          animate={{ x: isHovered ? 5 : 0 }}
          className="flex items-center"
        >
          Subscribe
          <motion.span
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ delay: 0.1 }}
          >
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.span>
        </motion.span>
      )}
    </motion.button>
  );
}