import React from 'react';
import { ArrowRight, Leaf, Users2, Trophy, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: 1,
    title: 'Create Your Account',
    description: 'Join our community of environmental champions',
    icon: Users2,
  },
  {
    id: 2,
    title: 'Choose Your Path',
    description: 'Select from various environmental and educational initiatives',
    icon: Leaf,
  },
  {
    id: 3,
    title: 'Start Learning',
    description: 'Access our comprehensive educational resources',
    icon: BookOpen,
  },
  {
    id: 4,
    title: 'Earn Rewards',
    description: 'Complete challenges and earn recognition',
    icon: Trophy,
  },
];

export function GetStarted() {
  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Start Your Journey
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Join our community and make a difference in four simple steps
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative group"
              >
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="absolute -top-4 left-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-semibold">
                      {step.id}
                    </span>
                  </div>
                  <div className="h-12 w-12 mx-auto text-green-600 dark:text-green-400">
                    <step.icon size={48} />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white text-center">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Get Started Now
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-16 bg-green-50 dark:bg-green-900/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
            Why Join Our Community?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400">5000+</div>
              <div className="mt-2 text-gray-600 dark:text-gray-400">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400">200+</div>
              <div className="mt-2 text-gray-600 dark:text-gray-400">Monthly Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400">50k+</div>
              <div className="mt-2 text-gray-600 dark:text-gray-400">Trees Planted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}