import React from "react";

export default function UpdateCard({ Post, onUpdateClick }) {
    const [body, setBody] = React.useState("");

    const handleUpdate = () => {
      // Invoke the passed in event callback
      onUpdateClick({ body: body });
  
      // Clear the input field
      setBody("");
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
          onClick={() => onUpdateClick({...Post, body })}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
