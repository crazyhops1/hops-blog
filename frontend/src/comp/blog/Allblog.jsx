import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import Animation from '../Animation';

const Allblog = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [fromDate, setFromDate] = useState('');
  const [initialLoading, setInitialLoading] = useState(true); // 👈 New

  const observerRef = useRef();

  const fetchData = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/everything?q=latest&sortBy=publishedAt&pageSize=10&page=${page}${fromDate ? `&from=${fromDate}` : ''}&apiKey=5a787aaf4e384c068b8290521b5b2b28`;
      const response = await axios.get(url);
      const articles = response.data.articles || [];

      setData((prev) => [...prev, ...articles]);
      setHasMore(articles.length === 10);
    } catch (error) {
      console.error('❌ Fetch error:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
      setInitialLoading(false); // 👈 Hide initial loader after fetch
    }
  }, [page, fromDate, loading, hasMore]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setData([]);
    setPage(1);
    setHasMore(true);
    setInitialLoading(true); // 👈 Reset loader on date change
  }, [fromDate]);

  const lastBlogRef = useCallback(
    (node) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore]
  );

  // 🌟 Show loader before first render
  if (initialLoading) {
    return <Animation/>
  }

  return (
    <div className="py-5 bg-light">
      <div className="text-center mb-4" style={{ color: '#7C4EE4' }}>
        <h2 className="fw-bold">Our BLOGS</h2>
        <p className="text-secondary">Search and scroll to load more...</p>
      </div>

      <div className="container mb-4">
        <input
          type="date"
            className="form-control  text-dark fw-semibold"
            style={{borderColor:"#7C4EE4", backgroundColor:'#7C4EE4'}}
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {data.map((item, index) => {
            const isLast = index === data.length - 1;
            return (
              <div
                key={index}
                ref={isLast ? lastBlogRef : null}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
              >
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={item.urlToImage || 'https://via.placeholder.com/300x180?text=No+Image'}
                    className="card-img-top"
                    alt={item.title || 'Blog Thumbnail'}
                    style={{ aspectRatio:"4/3", objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-semibold">
                      {item.title?.slice(0, 15) || 'Untitled Blog'}
                    </h6>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                      {item.description
                        ? item.description.slice(0, 50) + '...'
                        : 'No description available.'}
                    </p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm rounded-pill mt-auto"
                      style={{ backgroundColor: '#7C4EE4', color: '#fff' }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {loading && (
          <div className="text-center mt-4">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="text-muted mt-2">Loading more blogs...</p>
          </div>
        )}

        {!loading && !hasMore && data.length > 0 && (
          <p className="text-center text-muted mt-4">You've reached the end!</p>
        )}
      </div>
    </div>
  );
};

export default Allblog;
