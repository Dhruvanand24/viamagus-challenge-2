import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const { title, description, postId } = props;

  return (
    <Link
      to={`/Description/${postId}`}
      className="flex flex-col w-96 sm:w-80 md:w-80 sm:max-w-80 md:max-w-80 lg:max-w-96 rounded-md shadow-sm ring-2 ring-fuchsia-950 overflow-clip z-20 "
    >
      <div className=" font-bold  flex shadow-inner text-center py-2 px-2 justify-center text-wrap">
        <h2 className="text-fuchsia-950">{title}</h2>
      </div>
      <div className="bg-gradient-to-b from-fuchsia-800 to-fuchsia-500  flex text-wrap p-4 h-full">
        <p className="text-white">{description}</p>
      </div>
    </Link>
  );
};

export default Cards;
