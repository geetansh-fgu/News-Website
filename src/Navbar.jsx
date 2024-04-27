import React from 'react';
import { Link } from 'react-router-dom';
import news from './assets/news.svg';

function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center"> {/* Adjust justify-center to center align */}
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={news} alt="News" className="w-14 h-14 rounded-full" />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:justify-end"> {/* Adjust justify-center to center align */}
          <Link to="/general" className="mr-5 hover:text-gray-900 text-lg">Home</Link>
          <Link to="/entertainment" className="mr-5 hover:text-gray-900 text-lg">Entertainment</Link>
          <Link to="/sports" className="mr-5 hover:text-gray-900 text-lg">Sports</Link>
          <Link to="/technology" className="mr-5 hover:text-gray-900 text-lg">Technology</Link>
          <Link to="/health" className="mr-5 hover:text-gray-900 text-lg">Health</Link>
          <Link to="/business" className="mr-5 hover:text-gray-900 text-lg">Business</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
