import React, { useState } from 'react'
import './_Work.scss';
import { projects } from '../../data/projectList';
import { Link } from 'react-router-dom';

export const Work = () => {
    const [filter, setFilter] = useState(false)


    return (
        <div className="Work">
            <div className="Work_filter">
                <button className={filter === 'architecture' ? 'Work_filter_active' : null} onClick={() => setFilter('architecture')}>ARCHITECTURE</button>
                <button className={filter === 'research' ? 'Work_filter_active' : null} onClick={() => setFilter('research')}>RESEARCH</button>
                <button className={filter === 'art' ? 'Work_filter_active' : null} onClick={() => setFilter('art')}>ART</button>
                <button className={filter === 'graphicDesign' ? 'Work_filter_active' : null} onClick={() => setFilter('graphicDesign')}>GRAPHIC DESIGN</button>
                {
                    filter ? (<p onClick={() => setFilter(false)}>X</p>) : null
                }
            </div>
            <div className="Work_list">
                {
                    projects.map((project) => {
                        return (
                            <WorkItem key={project.projectId} project={project} filter={filter} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export const WorkItem = ({ project, filter }) => {
    const [hover, setHover] = useState(false);
    let url = "projects/" + project.projectId;
    return (
        <div className="Work_grid_item" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Link to={"/" + url}><h2 className={
                filter === false ? null :
                    filter !== project.category ? 'Work_grid_item_filter' : null
            }>{project.title}</h2></Link>
            {
                hover ? (<img src={project.thumbnailSrc} alt={project.title} />) : null
            }
        </div>
    )
}