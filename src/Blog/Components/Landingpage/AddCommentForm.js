import React, { useState } from 'react';

export const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comments`, {
      method: 'POST',
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername('');
    setCommentText('');
  };

  return (
    <form className="card shadow-lg p-4 mb-4">
      <h3 className="card-title h4 mb-4 text-gray-900">Add a Comment</h3>

      <div className="mb-4">
        <label htmlFor="username" className="form-label text-gray-700 text-sm font-weight-bold">
          Name:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="commentText" className="form-label text-gray-700 text-sm font-weight-bold">
          Comment:
        </label>
        <textarea
          id="commentText"
          rows="3"
          cols="10"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="form-control"
        />
      </div>

      <button
        onClick={addComment}
        className="btn btn-primary"
      >
        Add Comment
      </button>
    </form>
  );
};
