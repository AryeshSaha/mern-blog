import React from "react";

//article store
import articles from "../components/Store";

//reusable
import Articles from "../components/Articles";

const ArticleList = () => {
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900 text-center">
        Articles
      </h1>

      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles props={articles} />
        </div>
      </div>
    </>
  );
};

export default ArticleList;
