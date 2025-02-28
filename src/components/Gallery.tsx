import React from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Tree Planting Initiative',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
    description: 'Community members coming together to plant trees in urban areas'
  },
  {
    id: 2,
    title: 'Beach Cleanup Drive',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&q=80&w=1000',
    description: 'Volunteers cleaning up local beaches'
  },
  {
    id: 3,
    title: 'Environmental Workshop',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000',
    description: 'Expert-led workshop on sustainable practices'
  },
  {
    id: 4,
    title: 'Youth Environmental Summit',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000',
    description: 'Young leaders discussing environmental challenges'
  },
  {
    id: 5,
    title: 'Urban Garden Project',
    category: 'projects',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1000',
    description: 'Community garden initiative in the city'
  },
  {
    id: 6,
    title: 'Recycling Workshop',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000',
    description: 'Learning about proper recycling techniques'
  }
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Our Impact Gallery
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-8">
          {['all', 'events', 'education', 'projects'].map(category => (
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              {galleryItems.find(item => item.id === selectedImage) && (
                <>
                  <img
                    src={galleryItems.find(item => item.id === selectedImage)!.image}
                    alt={galleryItems.find(item => item.id === selectedImage)!.title}
                    className="w-full h-auto"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {galleryItems.find(item => item.id === selectedImage)!.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {galleryItems.find(item => item.id === selectedImage)!.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}