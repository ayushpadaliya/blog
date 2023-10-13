import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <div className="card shadow-lg p-4 mb-2">
      <h3 className="card-title h4 mt-4 mb-4 text-gray-900">Comments:</h3>
      {comments.map((comment, index) => (
        <div key={index} className="mb-4">
          <h4 className="card-title h5 font-weight-bold">{comment.username}</h4>
          <p className="card-text mt-1 mb-2">{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
