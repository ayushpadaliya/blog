import social1 from "./images/social1.jpg"

import React from 'react';
import { Link } from 'react-router-dom';

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        
        <div key={index} className="col-md-6 mb-4">
          <div className="card">
            <Link to={`/article/${article.name}`}>
              <img
                className="card-img-top"
                src={article.thumbnail}
                alt="Blog Thumbnail"
              />
            </Link>
            <div className="card-body">
              <Link to={`/article/${article.name}`}>
                <h3 className="card-title h5">{article.title}</h3>
              </Link>
              <p className="card-text">
                {article.content[0].substring(0, 115)}...
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <Link
                  className="btn btn-primary"
                  to={`/article/${article.name}`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;
