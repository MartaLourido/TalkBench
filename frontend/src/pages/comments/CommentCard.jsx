import React from "react";

export default function CommentCard({ comment, onDeleteClick }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <p>{comment.body}</p>
        <small className="font-weight-light float-left">{comment.user}</small>

        <button className="btn btn-warning" onClick={onDeleteClick}>
          Delete comment
        </button>

      </div>
    </div>
  );
}
