import React from "react";
import { Link } from "react-router-dom";


const Articles = ({props}) => {
  return (
    <>
      {props.map((items, index) => (
        <div className="p-4 md:w-1/2" key={index}>
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              src={items.thumbnail}
              className="lg:h-48 md:h-36 w-full object-cover object center"
              alt="img"
            />
            <Link to={`/article/${items.name}`} key={index}>
              <h1 className="text-lg font-semibold text-gray-900 my-3 px-5">
                {items.title}
              </h1>
            </Link>
            <p className="leading-relaxed mb-3 px-3">
              {items.content[0].substring(0, 100)}...
            </p>
            <div className="flex items-center flex-wrap">
              <Link
                to={`/article/${items.name}`}
                className="text-indigo-500 inline-flex items-center md:mb-2 px-2 lg:mb-0"
              >
                Readmore
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;
