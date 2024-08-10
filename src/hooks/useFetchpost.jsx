import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPosts = (start, limit) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
        );
        setPosts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [start, limit]);

  return { posts, loading, error };
};

export default useFetchPosts;
