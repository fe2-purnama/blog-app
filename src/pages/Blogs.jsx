import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    MyBlogs();
  }, []);

  const MyBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/blogs");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching data : ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`);
      MyBlogs();
    } catch (error) {
      console.error("Error deleting blog : ", error);
    }
  };

  return (
    <>
      <h2>Blogs</h2>
      <Link to="/add-blog">Add Data</Link>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/blogs/${item.id}`} state={{ article: item }}>
              <b>{item.title}</b>
            </Link>
            <Link to={`/edit-blog/${item.id}`}>Edit</Link>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blogs;
