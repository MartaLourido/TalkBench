import React, { useEffect, useState } from "react";

import CommentCard from "../comments/CommentCard";
import CommentForm from "../comments/CommentForm";
import CommentsApi from "../../api/CommentsApi";

export default function PostCard({ post, onDeleteClick}) {
    const [comments, setComments] = useState([]);

    // A getComments work, but createComment doesn´t work (error 404),
    // smth wrong in how here is connected to CommentsApi path and CommentController method
    async function createComment(commentData) {
        try {
            const response = await CommentsApi.createComment(commentData, post.id);
            const comment = response.data;
            const newComment = comments.concat(comment);

            setComments(newComment);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        CommentsApi.getComments(post.id)
            .then(({ data }) => setComments(data))
            .catch((err) => console.error(err));
    }, [setComments]);

    // Components
    const CommentsArray = comments.map((comment) => (
        <CommentCard key={post.id} comment={comment} />
    ));

  return (
    <div className="card mt-3">
      <div className="card-body">

          <p>{post.body}</p>

          <div className="comments-form">
              <CommentForm
                  onSubmit={(commentData) => createComment(commentData, post.id)}
              />
          </div>


          <button className="btn btn-warning" onClick={onDeleteClick}>
              Delete
          </button>

          <div className="comments-container">{CommentsArray}</div>

      </div>
    </div>
  );
}
