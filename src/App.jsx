import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Title from './Title';
import News from './News';
import SearchResults from './SearchResults';
import LikedArticles from './LikedArticles';

function App() {
  const [likedArticles, setLikedArticles] = useState(() => {
    const savedLikedArticles = localStorage.getItem('likedArticles');
    return savedLikedArticles ? JSON.parse(savedLikedArticles) : [];
  });

  useEffect(() => {
    localStorage.setItem('likedArticles', JSON.stringify(likedArticles));
  }, [likedArticles]);

  const handleLike = (article) => {
    setLikedArticles((prevLikedArticles) => {
      const isAlreadyLiked = prevLikedArticles.some((a) => a.url === article.url);
      if (isAlreadyLiked) {
        return prevLikedArticles.filter((a) => a.url !== article.url);
      } else {
        return [...prevLikedArticles, article];
      }
    });
  };

  return (
    <Router>
      <Title />
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<News category="general" onLike={handleLike} likedArticles={likedArticles} />} />
        <Route path="/general" element={<News category="general" onLike={handleLike} likedArticles={likedArticles} />} />
        <Route path="/entertainment" element={<News category="entertainment" onLike={handleLike} likedArticles={likedArticles} />} />
        <Route path="/sports" element={<News category="sports" onLike={handleLike} likedArticles={likedArticles} />} />
        <Route path="/technology" element={<News category="technology" onLike={handleLike} likedArticles={likedArticles} />} />
        <Route path="/health" element={<News category="health" onLike={handleLike} likedArticles={likedArticles} />} />
        <Route path="/business" element={<News category="business" onLike={handleLike} likedArticles={likedArticles} />} />
        <Route path="/search/:query" element={<SearchResults onLike={handleLike} likedArticles={likedArticles} />} />
        <Route path="/liked" element={<LikedArticles likedArticles={likedArticles} onLike={handleLike} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;