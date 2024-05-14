import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import DetailBlog from "./pages/DetailBlog";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthRoute from "./components/AuthRoute";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />

          {/* rute detail data */}
          <Route path="/blogs/:id" element={<DetailBlog />} />

          {/* Rute tambah data */}
          <Route path="/add-blog" element={<AddBlog />} />

          {/* Rute edit data */}
          <Route path="/edit-blog/:id" element={<EditBlog />} />
        </Route>
      </Route>

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
