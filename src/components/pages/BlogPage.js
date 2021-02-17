// MODULE IMPORTS
import React from "react";
import { Link, useParams } from "react-router-dom";
// STYLE IMPORT
import "./_blogpage.scss";
// DATA IMPORT
import { blogList } from "../../data/BlogList";

export const BlogPage = () => {
  let { id } = useParams();
  const blog = blogList.find((blog) => blog.blogId === id);

  return (
    <div className="work__page">
      <h1>{blog.title}</h1>
      <h2>{blog.date}</h2>

      <div className="work__page__content">
        {/* <div className="work__images">
          {blog.thumbnail.map((item) => <img src={item} className="temp_images" />)}
        </div> */}
        <div className="work__text">
          {blog.text.map((para) => (
            <p>{para}</p>
          ))}
        </div>
      </div>

      <div className="back__button">
        <Link to="/#Work">...Back to blogs</Link>
      </div>
    </div>
  );
};
