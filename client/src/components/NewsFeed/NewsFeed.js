import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import './NewsFeed.css';

const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = '6302891ad7154a22828c21d11ddaf189';
    const apiUrl = `https://newsapi.org/v2/everything?q=earthquake&apiKey=${apiKey}`;

    // Check if there is cached news data in local storage
    const cachedNews = JSON.parse(localStorage.getItem('cachedNews'));

    if (cachedNews) {
      setNews(cachedNews);
      setLoading(false);
    }

    // Fetch the latest news in the background
    axios.get(apiUrl)
      .then(response => {
        setNews(response.data.articles);
        setLoading(false);
        // Cache the latest news in local storage
        localStorage.setItem('cachedNews', JSON.stringify(response.data.articles));
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.error('Error fetching disaster news:', error);
      });
  }, []);

  return (
    <div>

      <div className="news-container">
        {loading ? (
          <div className="loading-spinner">
            <ClipLoader color={'#123abc'} loading={loading} size={150} />
          </div>
        ) : (
          news.map((article, index) => (
            <div className="news-card" key={index}>
              <img
                src={article.urlToImage || 'https://via.placeholder.com/150'}
                alt={article.title}
                className="news-image"
              />
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsApp;