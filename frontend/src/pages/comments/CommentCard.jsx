import React from "react";
import CommentsApi from "../../api/CommentsApi";

export default function CommentCard({ comment, onDeleteClick }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <p>{comment.body}</p>

        <button className="btn btn-warning" onClick={onDeleteClick}>
          Delete comment
        </button>

      </div>
    </div>
  );
}
