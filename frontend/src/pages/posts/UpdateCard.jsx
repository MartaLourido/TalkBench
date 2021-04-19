import React, {useEffect} from "react";
import PostsApi from "../../api/PostsApi";

export default function UpdateCard({ onUpdateClick, post }) {
    const [body, setBody] = React.useState(post.body);

    const handleUpdate = (e) => {
        e.preventDefault()
        onUpdateClick({ body: body });

    // useEffect(() => {
    //     PostsApi.getAllPosts()
    //         .then(({ data }) => post(data))
    //         .catch((err) => console.error(err));
    // }, [post]);

    };
    return (
        <div className="card mt-3">
            <div className="card-body">
        <textarea
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
        />

                <button
                    className="btn btn-info"
                    onClick={handleUpdate}
                >
                    Submit change
                </button>
            </div>
        </div>
    );
}