import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import news from './assets/news.svg';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search/${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <Link to="/general" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={news} alt="News" className="w-14 h-14 rounded-full" />
        </Link>
        <form onSubmit={handleSearchSubmit} className="flex ml-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search articles..."
            className="bg-gray-100 border-2 border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </form>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:justify-end font-serif">
          <Link to="/general" className="mr-5 hover:text-gray-900 hover:border-b-2 hover:border-blue-500 text-lg">Home</Link>
          <Link to="/entertainment" className="mr-5 hover:text-gray-900 hover:border-b-2 hover:border-blue-500 text-lg">Entertainment</Link>
          <Link to="/sports" className="mr-5 hover:text-gray-900 hover:border-b-2 hover:border-blue-500 text-lg">Sports</Link>
          <Link to="/technology" className="mr-5 hover:text-gray-900 hover:border-b-2 hover:border-blue-500 text-lg">Technology</Link>
          <Link to="/health" className="mr-5 hover:text-gray-900 hover:border-b-2 hover:border-blue-500 text-lg">Health</Link>
          <Link to="/business" className="mr-5 hover:text-gray-900 hover:border-b-2 hover:border-blue-500 text-lg">Business</Link>
          <Link to="/liked" className="mr-5 hover:text-gray-900 hover:border-b-2 hover:border-blue-500 text-lg">Liked Articles</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;