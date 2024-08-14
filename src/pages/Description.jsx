import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetchPostDetail from "../hooks/useFetchPostDetails";

const Description = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { post, loading, error } = useFetchPostDetail(postId);

  useEffect(() => {
    if (error) {
      navigate("/");
    }
  }, [error, navigate]);

  return (
    <div className="flex flex-col min-h-screen items-center bg-fuchsia-100 p-4">
      <h1 className="text-6xl font-semibold text-fuchsia-950  mb-8">
        Post Details
      </h1>
      {loading && <p className="text-2xl">Loading...</p>}
      {error && <p className="text-2xl text-red-500">Error: {error}</p>}
      {post && (
        <div className="max-w-2xl w-full bg-fuchsia-950 text-white shadow-2xl rounded p-4 z-20">
          <h2 className="text-2xl font-bold text-white mb-4">{post.title}</h2>
          <p>
            <span>UserId: </span>
            {post.userId}
          </p>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Description;
