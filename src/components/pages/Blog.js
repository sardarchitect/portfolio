// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";
// IMPORT STYLE
import "./_blog.scss";
// IMPORT DATASET
import { blogList } from "../../data/BlogList";

export const Blog = () => {
  const comingSoon=true;

  return (
    <div className="blog">
      <h1>BLOG</h1>
      {comingSoon ? (
        <h2 className="comingsoon">Coming Soon!</h2>
      ) : (
        <div className="blog__grid">
          {blogList.map((post) => {
            let url = "blog/" + post.blogId;
            return (
              <Link to={"/" + url}>
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
      )}
    </div>
  );
};
