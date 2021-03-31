import React, { useState } from 'react'
import './_Work.scss';
import { projects } from '../../data/projectList';

export const Work = () => {
    return (
        <div className="Work">
            <div className="Work_filter">
                <h2>ARCHITECTURE</h2>
                <h2>RESEARCH</h2>
                <h2>ART</h2>
                <h2>GRAPHIC DESIGN</h2>
            </div>
            <div className="Work_list">
                {
                    projects.map((project) => {
                        return (
                            <WorkItem key={project.projectId} project={project} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export const WorkItem = ({ project }) => {
    const [hover, setHover] = useState(false);
    return (
        <div className="Work_grid_item" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <h2 className={hover ? "active" : null}>{project.title}</h2>
            { 
                hover ? (<img src={project.thumbnailSrc} alt={project.title}/>) : null
            }
        </div>
    )
}