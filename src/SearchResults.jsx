import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from './NewsItem';

function SearchResults() {
  const { query } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="container mx-auto my-3 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {articles.map((article, index) => (
          <NewsItem
            key={index}
            sourceName={article.source.name}
            title={article.title}
            desc={article.description}
            imageURL={article.urlToImage || "Image"}
            newsUrl={article.url}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
