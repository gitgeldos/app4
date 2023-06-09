import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900">Welcome to My Website!</h1>
          <p className="mt-4 text-gray-500">Check out some of the pages on this site:</p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Link to="/about" className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">About Me</h2>
                <p className="text-gray-500 mt-2">
                  Learn more about me and my background as a frontend developer.
                </p>
              </div>
            </Link>
            <Link to="/portfolio" className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">Portfolio</h2>
                <p className="text-gray-500 mt-2">
                  Explore my projects and see the work I've done.
                </p>
              </div>
            </Link>
            <Link to="/blog" className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">Blog</h2>
                <p className="text-gray-500 mt-2">
                  Read my latest blog posts on various frontend development topics.
                </p>
              </div>
            </Link>
            {/* Add more preview links as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
