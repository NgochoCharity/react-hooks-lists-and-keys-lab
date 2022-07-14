import React from "react";

function ProjectItem({ name, about, technologies }) {
  let tech = technologies.map((Tech) =>{
    return(<span key = {Tech}>{Tech}</span>)
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
       {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
