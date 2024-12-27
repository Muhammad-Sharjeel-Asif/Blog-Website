'use client'

import React, { useState } from "react";

interface Comment {
  name: string;
  text: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (name.trim() && newComment.trim()) {
      setComments([...comments, { name, text: newComment }]);
      setName(""); // Clear name input
      setNewComment(""); // Clear comment input
    }
  };

  return (
    <div className="mt-16 px-4">
      {comments.length === 0 ? (
        <p className="text-gray-500 italic mb-8 text-center">No comments yet. Be the first to comment!</p>
      ) : (
        <ul className="space-y-4 mb-8">
          {comments.map((comment, index) => (
            <li
              key={index}
              className="bg-purple-100 border border-purple-300 rounded-lg p-4 shadow-md"
            >
              <p className="font-semibold text-purple-800">{comment.name}</p>
              <p className="text-gray-700 mt-2">{comment.text}</p>
            </li>
          ))}
        </ul>
      )}
      <h3 className="text-xl mb-4 font-semibold">
        Leave a Comment <span role="img" aria-label="comment">💬</span>
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 border-purple-600 bg-purple-200 shadow-md rounded px-8 pt-6 pb-8"
      >
        <label className="mb-1 text-purple-700 font-medium">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 rounded border-purple-500 py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <label className="mb-1 text-purple-700 font-medium">Comment</label>
        <textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="border-2 rounded border-purple-500 py-2 px-3 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <button
          type="submit"
          className="bg-purple-800 mt-4 text-white font-semibold rounded py-2 px-4 hover:bg-purple-900 transition duration-300"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
