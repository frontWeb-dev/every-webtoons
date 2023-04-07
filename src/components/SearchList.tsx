import React from "react";
import { Link } from "react-router-dom";

const SearchList = ({ webtoon }) => {
  return (
    <Link to={`/list/${webtoon.title}`}>
      <div key={webtoon._id} className=" mb-4 flex space-x-4">
        <img src={webtoon.img} className="h-auto w-28" />
        <div className="flex flex-col justify-center">
          <h2>{webtoon.title}</h2>
          <p>{webtoon.author}</p>
          <p>{webtoon.service}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchList;
