import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const { title, description, postId } = props;

  return (
    <Link
      to={`/Description/${postId}`}
      className="flex flex-col w-96 rounded-md shadow-md overflow-clip z-20"
    >
      <div className="bg-[#00246B] flex text-center py-2 font-ED justify-center text-wrap">
        <h2 className="text-white">{title}</h2>
      </div>
      <div className="bg-[#8AB6F9] flex text-wrap p-2 h-full">
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Cards;
