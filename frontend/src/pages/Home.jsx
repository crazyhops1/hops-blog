import React, { useEffect, useState } from 'react';
import Nav from '../comp/Nav';
import HeroSec from '../comp/HeroSec';
import Recent from '../comp/Recent';
import TopRecentBlogs from '../comp/TopRecentBlogs';
import Bottom from '../comp/Bottom';
import Animation from '../comp/Animation';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Optional: ensure loader shows at least 1.5s
        setLoading(true);
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=latest&sortBy=publishedAt&pageSize=10&page=1&apiKey=5a787aaf4e384c068b8290521b5b2b28'
        );

        // Simulate a small delay for loader visibility
        setTimeout(() => {
          setData(response.data.articles || []);
          setLoading(false);
        }, data);
      } catch (err) {
        setError('Failed to fetch blogs. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Animation />;

  if (error) {
    return (
      <div className="text-center py-5">
        <h4 className="text-danger">{error}</h4>
        <p>Check your internet or try refreshing the page.</p>
      </div>
    );
  }

  const latestBlog = data[0] || {
    title: 'No Blog Available',
    description: 'Stay tuned for updates.',
    urlToImage: 'https://via.placeholder.com/300x180?text=No+Image',
  };

  return (
    <div>
      <Nav />
      <HeroSec latest={latestBlog} />
      <Recent latest={latestBlog} />
      <TopRecentBlogs allpost={data} />
      <Bottom />
    </div>
  );
};

export default Home;
