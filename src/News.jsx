import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const { category, onLike, likedArticles } = props;
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const resultNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    resultNews();
  }, [category]);

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page + 1}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
    setPage(page + 1);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles([...articles, ...parsedData.articles]);
  };

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchData}
      hasMore={articles.length < totalResults}
      loader={<h4 className="text-center">Loading...</h4>}
      endMessage={<p className="text-center"><b>That's all we have for now!!</b></p>}
    >
      <br />
      <div className="container mx-auto my-3 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {articles.map((element, index) => (
            <NewsItem
              key={index}
              sourceName={element.source.name}
              title={element.title}
              desc={element.description}
              imageURL={element.urlToImage || "Image"}
              newsUrl={element.url}
              onLike={() => onLike(element)}
              isLiked={likedArticles.some((a) => a.url === element.url)}
            />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default News;