import React from 'react';
import { CleanWaterGame } from './CleanWaterGame';

export function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Welcome to Eco Rapids
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Join us in our mission to protect the environment and promote sustainability.
          </p>
        </div>

        {/* Other content of the home page */}

        {/* Clean Water Game */}
        <CleanWaterGame />
      </div>
    </div>
  );
}