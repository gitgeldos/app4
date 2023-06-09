import React from 'react';

const Header = () => {
    const menuItems = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'Blog', link: '/blog' },
        { id: 3, title: 'Portfolio', link: '/portfolio' },
        { id: 4, title: 'About Me', link: '/about' },
      ];
    
      return (
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-white font-bold text-2xl">Kerim CV</span>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.id}
                        href={item.link}
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
};

export default Header;