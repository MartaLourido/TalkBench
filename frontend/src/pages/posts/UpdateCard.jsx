import React from "react";

export default function UpdateCard({ post, onUpdateClick }) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <p>{post.body}</p>

                <button className="btn btn-danger" onClick={onUpdateClick}>
                    Edit
                </button>

            </div>
        </div>
    );
}