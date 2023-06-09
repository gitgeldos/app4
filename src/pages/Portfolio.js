import React from 'react';
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: project1,
      githubLink: 'https://github.com/gitgeldos/spa.git',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: project2,
      githubLink: 'https://github.com/gitgeldos/app3.git',
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900">Portfolio</h1>
          <p className="mt-4 text-gray-500">
            Here are some of the projects I've worked on:
          </p>
          <div className="mt-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h2>
                  <p className="text-gray-500 mb-4">{project.description}</p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="https://www.linkedin.com/in/kerimakmyradov/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/gitgeldos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
