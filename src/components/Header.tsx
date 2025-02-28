import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TreePine, ArrowRight, Leaf, Wind, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "Take Action for Our Planet",
      subtitle: "Join our global community of environmental champions making a real difference through education and action.",
      icon: TreePine,
      color: "from-green-600 to-green-800"
    },
    {
      title: "Protect Our Forests",
      subtitle: "Help us preserve and restore forest ecosystems through education and community initiatives.",
      icon: Leaf,
      color: "from-emerald-600 to-emerald-800"
    },
    {
      title: "Clean Energy Future",
      subtitle: "Learn about renewable energy solutions and how you can contribute to a sustainable future.",
      icon: Wind,
      color: "from-teal-600 to-teal-800"
    },
    {
      title: "Save Our Oceans",
      subtitle: "Discover how to protect marine ecosystems and reduce plastic pollution in our waters.",
      icon: Droplets,
      color: "from-blue-600 to-blue-800"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className={`relative bg-gradient-to-br ${slides[currentSlide].color} overflow-hidden transition-colors duration-1000`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white bg-opacity-20"
            style={{
              width: Math.random() * 30 + 10,
              height: Math.random() * 30 + 10,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              y: [null, "-100vh"],
              x: [null, `${(Math.random() - 0.5) * 200}px`],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                className="flex justify-center mb-8"
              >
                <CurrentIcon className="h-16 w-16 text-white" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 max-w-2xl mx-auto text-xl text-green-100"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-10 flex justify-center gap-4"
              >
                <Link
                  to="/get-started"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 bg-opacity-60 hover:bg-opacity-70 transition-colors"
                >
                  Learn More
                </Link>
              </motion.div>

              {/* Slide Indicators */}
              <div className="mt-8 flex justify-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsVisible(false);
                      setTimeout(() => {
                        setCurrentSlide(index);
                        setIsVisible(true);
                      }, 500);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? "bg-white" : "bg-white bg-opacity-30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold text-white">50+</div>
                  <div className="text-green-100">Trees Planted</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold text-white">100+</div>
                  <div className="text-green-100">Active Members</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold text-white">100+</div>
                  <div className="text-green-100">Global Events</div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}