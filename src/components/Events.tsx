import React from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Global Tree Planting Day',
    date: '2024-04-22',
    time: '09:00 AM',
    location: 'Central Park, New York',
    image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80&w=1000',
    category: 'Environmental',
    description: 'Join us for a massive tree planting initiative across the city. Together, we can make our world greener!',
    attendees: 245,
    capacity: 300
  },
  {
    id: 2,
    title: 'Ocean Cleanup Workshop',
    date: '2024-04-25',
    time: '10:00 AM',
    location: 'Miami Beach',
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80&w=1000',
    category: 'Workshop',
    description: 'Learn about ocean conservation and participate in a beach cleanup activity.',
    attendees: 120,
    capacity: 150
  },
  {
    id: 3,
    title: 'Sustainable Living Conference',
    date: '2024-05-01',
    time: '11:00 AM',
    location: 'Virtual Event',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=1000',
    category: 'Conference',
    description: 'Expert speakers share insights on sustainable living practices and eco-friendly solutions.',
    attendees: 480,
    capacity: 500
  }
];

export function Events() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const categories = ['all', 'Environmental', 'Workshop', 'Conference'];

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Join our community events and make a difference
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

        {/* Events Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {event.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {event.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{event.attendees} / {event.capacity} registered</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}