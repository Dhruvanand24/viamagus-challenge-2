import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Title is required");
      return;
    }

    if (description.length > 1000) {
      setError("Description exceeds the maximum character limit of 1000");
      return;
    }

    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body: description,
      });
      setSuccess("Post created successfully!");
      setError("");
      setTimeout(() => navigate("/"), 2000); // Redirect to previous page after 2 seconds
    } catch (error) {
      setError("Failed to create the post. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center bg-fuchsia-100 p-4">
      <h1 className="text-4xl font-semibold text-fuchsia-950 mb-8">
        Create New Post
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-lg w-full z-20"
      >
        <label htmlFor="title" className="mb-2 font-medium text-[#00246B]">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <label
          htmlFor="description"
          className="mb-2 font-medium text-[#00246B]"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 mb-4 border border-gray-300 rounded"
          maxLength="1000"
          rows="10"
        />
        <button
          type="submit"
          className="p-2 bg-fuchsia-950 text-[#CADCFC] rounded  transition-colors"
        >
          Submit
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {success && <p className="mt-4 text-green-500">{success}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
