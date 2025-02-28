import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TreePine, Users, Globe, Leaf, Heart, Target, Lightbulb, Sprout } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const teamMembers = [
    {
      name: 'Dr. Emma Wilson',
      role: 'Founder & Executive Director',
      bio: 'Environmental scientist with 15+ years of experience in conservation and education.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000',
      icon: Leaf
    },
    {
      name: 'Michael Chen',
      role: 'Education Director',
      bio: 'Former professor with a passion for making environmental education accessible to all.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000',
      icon: Lightbulb
    },
    {
      name: 'Sarah Johnson',
      role: 'Community Outreach Manager',
      bio: 'Dedicated to building partnerships and engaging communities in environmental action.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000',
      icon: Users
    },
    {
      name: 'David Rodriguez',
      role: 'Technology Lead',
      bio: 'Tech innovator focused on leveraging digital solutions for environmental challenges.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000',
      icon: Globe
    }
  ];

  const values = [
    {
      title: 'Education',
      description: 'We believe knowledge is the foundation for meaningful environmental action.',
      icon: Lightbulb
    },
    {
      title: 'Community',
      description: 'Together, we can achieve more than we ever could individually.',
      icon: Users
    },
    {
      title: 'Sustainability',
      description: 'Our practices and solutions must be viable for generations to come.',
      icon: Sprout
    },
    {
      title: 'Impact',
      description: 'We measure our success by the tangible difference we make in the world.',
      icon: Target
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-3 bg-green-100 dark:bg-green-900 rounded-full mb-4"
          >
            <TreePine className="h-10 w-10 text-green-600 dark:text-green-400" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl"
          >
            About EcoLearn
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            We're on a mission to create a sustainable future through education, community engagement, and environmental action.
          </motion.p>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
          >
            Our Story
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-lg overflow-hidden h-80">
                <img 
                  src="https://images.unsplash.com/photo-1552799446-159ba9523315?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team planting trees" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white p-4 text-sm">Our team during the first tree planting event in 2024</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-gray-600 dark:text-gray-400">
                EcoLearn began in 2024 with a simple idea: environmental education should be accessible to everyone. What started as a small community initiative has grown into a global platform connecting thousands of environmental champions.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Our founder, Kartik Chilkoti, recognized that while many people wanted to make a difference for our planet, they often lacked the knowledge, resources, or community support to take meaningful action.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Today, we've helped plant over 50,000 trees, organized hundreds of community events, and provided environmental education to people in over 30 countries.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
          >
            Our Values
          </motion.h2>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={item}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
          >
            Our Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-60">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-full p-2 shadow-md">
                    <member.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">50K+</div>
              <div className="text-gray-700 dark:text-gray-300">Trees Planted</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">10K+</div>
              <div className="text-gray-700 dark:text-gray-300">Active Members</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">30+</div>
              <div className="text-gray-700 dark:text-gray-300">Countries Reached</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">200+</div>
              <div className="text-gray-700 dark:text-gray-300">Events Organized</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Together, we can create a more sustainable future for our planet. Whether you're a student, professional, or retiree, there's a place for you in our community.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/get-started"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              <Heart className="mr-2 h-5 w-5" />
              Get Involved Today
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}