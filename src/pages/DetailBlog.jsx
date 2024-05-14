import React from "react";
import { useLocation } from "react-router-dom";

const DetailBlog = () => {
  const location = useLocation();

  const { article } = location.state;

  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.article}</p>
    </>
  );
};

export default DetailBlog;
