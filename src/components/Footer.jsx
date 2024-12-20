import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} BookShop. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
