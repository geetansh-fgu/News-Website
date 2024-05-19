import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from './NewsItem';

function SearchResults({ onLike, likedArticles }) {
  const { query } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`);
      const data = await response.json();
      setArticles(data.articles);
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <NewsItem
            key={article.url}
            title={article.title}
            desc={article.description}
            imageURL={article.urlToImage}
            newsUrl={article.url}
            sourceName={article.source.name}
            onLike={() => onLike(article)}
            isLiked={likedArticles.some((a) => a.url === article.url)}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;