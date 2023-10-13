import React from 'react';
import Articles from './Articles';
import articleContent from './article-content';

const ArticleList = () => {
  return (
    <div>
      <h1 className="display-5 mt-6 mb-4 font-weight-bolder text-dark">
        <center>Articles:</center>
      </h1>

      <div className="container py-4">
        <div className="row">
          <Articles articles={articleContent} />
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
