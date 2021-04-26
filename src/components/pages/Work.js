import React, { useEffect, useState } from "react";
import "./_Work.scss";
import { projects } from "../../data/projectList";
import { Link } from "react-router-dom";

export const Work = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    let sorted;
    if (filter) {
      sorted = [...projects].sort((a) => (a.category === filter ? -1 : 1));
    } else {
      sorted = [...projects].sort((a, b) => {
        return a.year > b.year ? -1 : a.year < b.year ? 1 : 0;
      });
    }
    setData(sorted);
  }, [filter]);

  return (
    <div className="Work" id="Work">
      <div className="Work_filter">
        <button
          className={filter === "architecture" ? "Work_filter_active" : null}
          onClick={() => {
            filter == "architecture"
              ? setFilter(false)
              : setFilter("architecture");
          }}
        >
          ARCHITECTURE
        </button>
        <button
          className={filter === "research" ? "Work_filter_active" : null}
          onClick={() => {
            filter == "research" ? setFilter(false) : setFilter("research");
          }}
        >
          RESEARCH
        </button>
        <button
          className={filter === "art-design" ? "Work_filter_active" : null}
          onClick={() => {
            filter == "art-design" ? setFilter(false) : setFilter("art-design");
          }}
        >
          ART | DESIGN
        </button>
      </div>
     
      <div className="Work_list">
        {data.map((project) => {
          return (
            <WorkItem
              key={project.projectId}
              project={project}
              filter={filter}
            />
          );
        })}
      </div>
    </div>
  );
};

export const WorkItem = ({ project, filter }) => {
  const [hover, setHover] = useState(false);
  let url = "projects/" + project.projectId;
  return (
    <div
      className="Work_grid_item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={"/" + url}>
        <h2
          className={
            filter === false
              ? null
              : filter !== project.category
              ? "Work_grid_item_filter"
              : null
          }
        >
          {project.title}
        </h2>
      </Link>
      {hover ? <img src={project.thumbnail} alt={project.title} /> : null}
    </div>
  );
};
