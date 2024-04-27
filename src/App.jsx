import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Title from './Title';
import News from './News';

function App() {
  return (
    <Router>
      <Title />
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<News category="general" />} />
        <Route path="/general" element={<News category="general" />} />
        <Route path="/entertainment" element={<News category="entertainment" />} />
        <Route path="/sports" element={<News category="sports" />} />
        <Route path="/technology" element={<News category="technology" />} />
        <Route path="/health" element={<News category="health" />} />
        <Route path="/business" element={<News category="business" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
