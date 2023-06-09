import React from 'react';
import profilePic from '../assets/profilePic.jpg'

const AboutMe = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center">
                <img src={profilePic} alt="Profile" className="w-32 h-32 rounded-full" />
            </div>
          <h1 className="text-3xl font-extrabold text-gray-900">About Me</h1>
          <p className="mt-4 text-gray-500">
            I'm a passionate frontend developer with expertise in modern web technologies. I love creating intuitive
            and visually appealing user interfaces that provide a seamless user experience.
          </p>
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900">Skills</h2>
            <ul className="mt-4 list-disc list-inside text-gray-500">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
              <li>Version Control (Git)</li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900">Experience</h2>
            <ul className="mt-4 list-disc list-inside text-gray-500">
              <li>
                Frontend Developer at XYZ Company - 2020 to Present
                <ul className="mt-2">
                  <li>
                    Developed and maintained responsive web applications using React and Tailwind CSS.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to deliver high-quality software solutions.
                  </li>
                  <li>Implemented UI designs and ensured adherence to best practices.</li>
                </ul>
              </li>
              <li>
                Junior Frontend Developer at ABC Agency - 2018 to 2020
                <ul className="mt-2">
                  <li>
                    Assisted in building and maintaining client websites using HTML, CSS, and JavaScript.
                  </li>
                  <li>
                    Worked closely with senior developers to implement new features and resolve issues.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
