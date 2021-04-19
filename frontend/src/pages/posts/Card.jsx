import React, { useEffect, useState } from "react";

import CommentCard from "../comments/CommentCard";
import CommentForm from "../comments/CommentForm";
import CommentsApi from "../../api/CommentsApi";
import PostsApi from "../../api/PostsApi";
import UpdateCard from "./UpdateCard";

export default function PostCard({ post, onDeleteClick, onUpdateClick }) {
    const [isUpdating, setIsUpdating] = useState(false);
    const [comments, setComments] = useState([]);


    async function createComment(commentData) {
        try {
            const response = await CommentsApi.createComment(post.id, commentData);
            const comment = response.data;
            const newComment = comments.concat(comment);

            setComments(newComment);
        } catch (e) {
            console.error(e);
        }
    }

    async function deleteComment(post) {
        try {
            await CommentsApi.deleteComment(post.id);
            const newComments = comments.filter((p) => p.id !== post.id);

            setComments(newComments);
        } catch (e) {
            console.error(e);
        }
    }

    async function updatePost(postToUpdate) {
        try {
            await PostsApi.updatePost(post.id, postToUpdate);
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
    console.log(comments)

    return (
        <div className="card mt-3">
            <div className="card-body">
                <p>{post.body}</p>
             <small className="font-weight-light float-left">{post.user}</small>
           <UpdateCard />

                <button className="btn btn-warning" size="lg" onClick={onDeleteClick}>
                    Delete post
                </button>
                <div className="comments-container">
                    {(comments) ? comments.map((comment) => (
                        <CommentCard
                            key={post.id}
                            comment={comment}
                            onDeleteClick={() => deleteComment(comment)}
                        />
                    )) : null}
                </div>

                <button className="btn btn-info"
                        onClick={() =>
                            isUpdating ? setIsUpdating(false) : setIsUpdating(true)}>
                    Edit post
                </button>
                {isUpdating && (<UpdateCard onUpdateClick={(postData) => updatePost(postData)}
                                            post={post}
                    />
                )}

                <div className="comments-form">
                    <CommentForm
                        id={post.id}
                        onSubmit={createComment}
                    />
                </div>
            </div>
        </div>
    );
}