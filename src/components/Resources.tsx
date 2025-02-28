import React from 'react';
import { Book, Video, FileText, Download } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'Introduction to Environmental Science',
    type: 'course',
    format: 'Video Series',
    description: 'A comprehensive introduction to environmental science and sustainability',
    duration: '2 hours',
    level: 'Beginner',
    icon: Video,
  },
  {
    id: 2,
    title: 'Sustainable Living Guide',
    type: 'guide',
    format: 'PDF',
    description: 'Practical tips and strategies for sustainable living',
    pages: 25,
    level: 'All Levels',
    icon: FileText,
  },
  {
    id: 3,
    title: 'Climate Change Fundamentals',
    type: 'course',
    format: 'Interactive Course',
    description: 'Understanding the basics of climate change and its impacts',
    duration: '3 hours',
    level: 'Intermediate',
    icon: Book,
  },
  // Add more resources as needed
];

export function Resources() {
  const [selectedType, setSelectedType] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredResources = resources.filter(resource => {
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleAccessResource = (resourceTitle: string) => {
    console.log(`Accessing resource: ${resourceTitle}`);
    // Add your logic to access the resource here
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Learning Resources
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Access our collection of educational materials and resources
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex space-x-4">
            {['all', 'course', 'guide'].map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedType === type
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map(resource => (
            <div
              key={resource.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-green-600 dark:text-green-400">
                    <resource.icon size={24} />
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {resource.format}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {resource.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {resource.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {resource.duration || `${resource.pages} pages`}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {resource.level}
                  </span>
                </div>
                <button
                  onClick={() => handleAccessResource(resource.title)}
                  className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Access Resource
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}