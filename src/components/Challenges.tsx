import React from 'react';
import { Trophy, Timer, Users, Target, ArrowRight } from 'lucide-react';

const challenges = [
  {
    id: 1,
    title: '30-Day Zero Waste Challenge',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000',
    description: 'Minimize your waste production for 30 days and learn sustainable living practices.',
    duration: 30,
    participants: 1234,
    points: 500,
    tasks: [
      'Use reusable shopping bags',
      'Avoid single-use plastics',
      'Compost organic waste',
      'Buy package-free products'
    ]
  },
  {
    id: 2,
    title: 'Plant 10 Trees Challenge',
    category: 'Environmental',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
    description: 'Plant and nurture 10 trees in your community within 60 days.',
    duration: 60,
    participants: 856,
    points: 1000,
    tasks: [
      'Select native tree species',
      'Plant in approved locations',
      'Regular watering schedule',
      'Document growth progress'
    ]
  },
  {
    id: 3,
    title: 'Energy Conservation Month',
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000',
    description: 'Reduce your household energy consumption and track the impact.',
    duration: 30,
    participants: 2045,
    points: 750,
    tasks: [
      'Use LED bulbs only',
      'Minimize AC usage',
      'Unplug idle devices',
      'Track energy bills'
    ]
  }
];

export function Challenges() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const categories = ['all', 'Lifestyle', 'Environmental', 'Home'];

  const filteredChallenges = selectedCategory === 'all'
    ? challenges
    : challenges.filter(challenge => challenge.category === selectedCategory);

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Environmental Challenges
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Take part in challenges, earn points, and make a real impact
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex justify-center space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Challenges Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredChallenges.map(challenge => (
            <div
              key={challenge.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {challenge.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {challenge.title}
                  </h3>
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <Trophy className="h-5 w-5 mr-1" />
                    <span>{challenge.points} pts</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {challenge.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Timer className="h-5 w-5 mr-2" />
                    <span>{challenge.duration} days</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{challenge.participants.toLocaleString()} participants</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Key Tasks
                  </h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                    {challenge.tasks.map((task, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors">
                  Join Challenge
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}