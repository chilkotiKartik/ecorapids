import React, { useState } from 'react';

const trashItems = [
  { id: 1, type: 'Plastic Bottle', x: 50, y: 100 },
  { id: 2, type: 'Can', x: 200, y: 150 },
  { id: 3, type: 'Paper', x: 300, y: 200 },
  { id: 4, type: 'Plastic Bag', x: 400, y: 250 },
  { id: 5, type: 'Glass Bottle', x: 150, y: 300 },
];

export function CleanWaterGame() {
  const [collectedTrash, setCollectedTrash] = useState<number[]>([]);

  const handleCollectTrash = (id: number) => {
    setCollectedTrash([...collectedTrash, id]);
  };

  return (
    <div className="bg-blue-100 dark:bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Clean the River
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Click on the trash items to clean up the river and help protect our environment!
          </p>
        </div>

        <div className="relative mt-8 h-96 bg-blue-300 dark:bg-blue-700 rounded-lg overflow-hidden">
          {trashItems.map((item) => (
            !collectedTrash.includes(item.id) && (
              <div
                key={item.id}
                className="absolute cursor-pointer"
                style={{ left: item.x, top: item.y }}
                onClick={() => handleCollectTrash(item.id)}
              >
                <img
                  src={`/images/${item.type.toLowerCase().replace(' ', '-')}.png`}
                  alt={item.type}
                  className="w-12 h-12"
                />
              </div>
            )
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {collectedTrash.length === trashItems.length
              ? 'Great job! You have cleaned up all the trash!'
              : `You have collected ${collectedTrash.length} out of ${trashItems.length} trash items.`}
          </p>
        </div>
      </div>
    </div>
  );
}