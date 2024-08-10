import React, { useState, useEffect } from "react";
import useFetchPosts from "../hooks/useFetchpost";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [start, setStart] = useState(() => {
    // Initialize start from localStorage if available
    const cachedStart = localStorage.getItem("postStart");
    return cachedStart ? parseInt(cachedStart, 10) : 0;
  });
  const limit = 10; // Number of posts per page
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError("");

      try {
        const cachedPosts = localStorage.getItem(`posts_${start}`);
        if (cachedPosts) {
          // Load posts from localStorage
          setPosts(JSON.parse(cachedPosts));
          setLoading(false);
        } else {
          // Fetch posts from API
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
          );
          setPosts(response.data);
          localStorage.setItem(`posts_${start}`, JSON.stringify(response.data));
          setLoading(false);
        }
      } catch (err) {
        setError("Failed to fetch posts. Please try again.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, [start, limit]);

  const handleNext = () => {
    setStart((prevStart) => prevStart + limit);
    localStorage.setItem("postStart", start + limit);
  };

  const handlePrevious = () => {
    if (start >= limit) {
      setStart((prevStart) => prevStart - limit);
      localStorage.setItem("postStart", start - limit);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center bg-[#CADCFC] p-4 relative">
      <h1 className="mt-2 text-4xl sm:text-6xl font-semibold text-[#00246B] mb-8 underline underline-offset-3 text-center">
        All Posts
      </h1>
      <Link to="/createPost">
        <h1 className="p-2 text-center absolute top-4 right-4 rounded-md shadow-md bg-[#00246B] text-[#CADCFC] hover:text-white cursor-pointer">
          Create post
        </h1>
      </Link>

      <div className="flex flex-wrap gap-8 justify-center">
        {posts.map((post) => (
          <Cards
            key={post.id}
            title={post.title}
            description={post.body}
            postId={post.id}
          />
        ))}
      </div>
      <div className="flex mt-6 gap-6 rounded-md overflow-clip mb-2 z-20">
        <button
          onClick={handlePrevious}
          disabled={start === 0}
          className="p-2 w-24 text-center bg-[#00246B] text-[#CADCFC] rounded hover:bg-[#001A52] transition-colors"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={posts.length < limit}
          className="p-2 w-24 text-center bg-[#00246B] text-[#CADCFC] rounded hover:bg-[#001A52] transition-colors"
        >
          Next
        </button>
      </div>
      {loading && (
        <p className="text-2xl absolute top-24 z-30 text-white ring-1 bg-[#001A52] text-wrap p-2">
          Loading...
        </p>
      )}
      {error && (
        <p className="text-2xl absolute top-24 z-30 text-white ring-1 text-wrap bg-[#001A52] p-2">
          Error: {error}
        </p>
      )}
    </div>
  );
};

export default HomePage;
