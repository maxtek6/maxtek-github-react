import projects from '../assets/projects.json';
import { Link, Tile } from '@carbon/react';
import { Code, Doc } from '@carbon/react/icons';

function Project({ name, description, documentation }) {
    const projectLink = `https://github.com/maxtek6/${name}`;
    return (
    <Tile className="project-tile">
      <div className="project-tile__content">
        <h3 className="project-tile__name">{name}</h3>
        <p className="project-tile__description">{description}</p>
      </div>
      <div className="project-tile__links">
        <Link
          className="project-tile__link"
          href={projectLink}
          renderIcon={(props) => <Code {...props} size={24} />}
          target="_blank"
          rel="noopener noreferrer"
        />
        <Link
          className="project-tile__link"
          href={documentation}
          renderIcon={(props) => <Doc {...props} size={24} />}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
      </Tile>
    )
}

function ProjectList() {
  return (
    <>
      {projects.map(({ name, description, documentation }) => (
        <Project key={name} name={name} description={description} documentation={documentation} />
      ))}
    </>
  );
}

export default ProjectList;