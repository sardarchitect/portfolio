// IMPORT MODULES
import React from "react";
// IMPORT STYLE
import "./_blog.scss";
// IMPORT DATASET
import { blogList } from "../../data/BlogList";
import { logDOM } from "@testing-library/react";
import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <div className="blog">
      <h1>BLOG</h1>
      <div className="blog__grid">
        {blogList.map((post) => {
        let url = "blog/" + post.blogId;
          return (
            <Link to={"/"+url}>
              <div key={post.blogId} className="blog__card">
                <div className="blog__card__text">
                  <h2>{post.title}</h2>
                  <h3>{post.abstract}</h3>
                  <p>{post.date}</p>
                </div>
                <div
                  className="blog__card__thumbnail"
                  style={{
                    background: `url(${post.thumbnail})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `100% `,
                  }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
