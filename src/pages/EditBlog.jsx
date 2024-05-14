import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const respponse = await axios.get(`http://localhost:3000/blogs/${id}`);
      setTitle(respponse.data.title);
      setArticle(respponse.data.article);
    } catch (error) {
      console.error("Error fetching data : ", error);
    }
  };

  const editData = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/blogs/${id}`, { title, article });
      navigate("/blogs");
    } catch (error) {
      console.error("Error edit data : ", error);
    }
  };

  return (
    <>
      <h2>Edit {title}</h2>
      <form onSubmit={editData}>
        <div>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="article">Article : </label>
          <textarea
            name="article"
            id="article"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default EditBlog;
