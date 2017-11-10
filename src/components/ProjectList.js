import React from 'react';

const ProjectList = props => {
  const projectList = props.projects.map((project, index) => {
    return (
      <ProjectListItem
        key={index}
        project={project}
        className="list-inline-item"
      />
    );
  });

  return (
    <div id="portfolio" className="container-fluid">
      {projectList}
    </div>
  );
}

const ProjectListItem = props => {
  const {project: {
    title, imageURL, dates, website, github, tech, description
  }} = props;

  const techList = tech.map((each, index) => {
    return (
      <li key={`tech-list-${index}`} className="list-inline-item">
        {each}
      </li>
    );
  });

  return (
    <div className="clearfix project-entry">

      <div className='col-sm-6'>
        <img className="img-responsive img-thumbnail" src={imageURL} />
      </div>

      <div className='col-sm-6'>
        {website ? <h2><a href={website} target="_blank">{title}</a></h2> : <h2>{title}</h2>}
        {github ? <a href={github} target="_blank"><small>GitHub</small></a> : null}
        <p>{dates}</p>
        {description}
        <ul className="list-inline">
          {techList}
        </ul>
      </div>

    </div>
  );
}

export default ProjectList;