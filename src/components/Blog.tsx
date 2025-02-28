import React from 'react';
import { Tag, User, Calendar, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Impact of Reforestation on Local Ecosystems',
    excerpt: 'Exploring how tree planting initiatives are revitalizing biodiversity in urban areas.',
    content: '',
    author: 'Kartik',
    date: '2024-03-15',
    readTime: '5 min',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1000',
    tags: ['reforestation', 'biodiversity', 'urban-planning']
  },
  {
    id: 2,
    title: 'Sustainable Living: Small Changes, Big Impact',
    excerpt: 'Practical tips for reducing your carbon footprint through everyday choices.',
    content: '',
    author: 'Monu',
    date: '2024-03-10',
    readTime: '4 min',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
    tags: ['sustainable-living', 'carbon-footprint', 'eco-friendly']
  },
  {
    id: 3,
    title: 'Ocean Plastic: Innovative Solutions to a Global Crisis',
    excerpt: 'How new technologies are helping to clean our oceans and prevent plastic pollution.',
    content: '',
    author: 'Kartik',
    date: '2024-03-05',
    readTime: '6 min',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80&w=1000',
    tags: ['ocean-cleanup', 'plastic-pollution', 'innovation']
  }
];

export function Blog() {
  const [selectedTag, setSelectedTag] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  // Extract all unique tags
  const allTags = ['all', ...new Set(blogPosts.flatMap(post => post.tags))];

  // Filter posts based on selected tag and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Environmental Blog
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Insights, stories, and updates from our environmental community
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === tag
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900'
                }`}
              >
                {tag === 'all' ? 'All Topics' : tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map(post => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-green-600 dark:text-green-400 mb-4">
                  <Tag className="h-5 w-5 mr-2" />
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm space-x-4 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime} read</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}