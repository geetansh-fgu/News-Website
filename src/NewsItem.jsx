import React from "react";

function NewsItem(props) {
  const { desc, title, imageURL, newsUrl, sourceName, onLike, isLiked } = props;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
      <img className="w-full" src={imageURL} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{desc}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="inline-block bg-gray-200 rounded px-3 py-2 text-sm font-semibold text-gray-700 mr-2">
          {sourceName}
        </span>
        <a
          href={newsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Read More
        </a>
        <button
          type="button"
          onClick={onLike}
          className={`text-blue-700 border border-blue-700 hover:bg-white-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center ${isLiked ? 'bg-blue-700 text-white' : 'bg-transparent'}`}
        >
          <svg
            className={`w-4 h-4 ${isLiked ? 'text-white' : 'text-blue-700'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
          </svg>
          <span className="sr-only">Like</span>
        </button>
      </div>
    </div>
  );
}

export default NewsItem;