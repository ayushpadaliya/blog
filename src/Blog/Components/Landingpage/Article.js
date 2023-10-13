import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';
import Articles from './Articles';
import CommentsList from './CommentsList';
import { AddCommentForm } from './AddCommentForm';

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => {
    if (article.name === name) {
      return article;
    }
  });

  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body.comments);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) {
    return (
      <>
        <h1 className="display-4 mt-5 mb-5 font-weight-bold text-center text-dark">
          Article {name} doesn't exist.
        </h1>
      </>
    );
  }
  const otherArticle = articleContent.filter((article) => article.name !== name);
  return (
    <>
    <div className='container'>
      <h1 className="display-1 mt-5 mb-5 font-weight-bold text-dark "><br></br>
        {article && article.title}
      </h1>
      {article &&
        article.content.map((paragraph, index) => {
          return (
            <p className="mx-auto  lead mb-4 text-align:justify" key={index}>
              {paragraph}
            </p>
          );
        })}

      <CommentsList comments={articleInfo.comments} />

      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />

      <hr />
      <h1 className="display-5 mt-4 mb-4 font-weight-bold text-dark">
        Other Articles
      </h1>
      <div className="row">
        <Articles articles={otherArticle} />
      </div>
      </div>
    </>
  );
};

export default Article;
