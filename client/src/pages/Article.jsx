import React from "react";
import articles from "../components/Store";
import { useParams } from "react-router-dom";
import Articles from "../components/Articles";

const Article = () => {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);
  if (!article) return <h1> Article doesn;t exist. </h1>;

  const otherArticles = articles.filter((article) => article.name !== name);

  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-700">
        {article.title}
      </h1>

      {article.content.map((para, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {para}
        </p>
      ))}

      <p className="sm:text-2xl text-xl mt-11 mb-4 from-neutral-500 font-bold">You Might Also Like...</p>
      <div className="flex flex-wrap -m-4">
        <Articles props={otherArticles} />
      </div>
    </>
  );
};

export default Article;
