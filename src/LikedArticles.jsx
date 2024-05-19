import React from 'react';
import NewsItem from './NewsItem';

function LikedArticles({ likedArticles, onLike }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Liked Articles</h1>
      {likedArticles.length === 0 ? (
        <p>No liked articles yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {likedArticles.map((article) => (
            <NewsItem
              key={article.url}
              title={article.title}
              desc={article.desc}
              imageURL={article.imageURL}
              newsUrl={article.url}
              sourceName={article.sourceName}
              onLike={() => onLike(article)}
              isLiked={likedArticles.some((a) => a.url === article.url)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default LikedArticles;