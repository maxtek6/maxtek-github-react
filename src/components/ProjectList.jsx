import projects from '../assets/projects.json';
import { Column, Grid, Link, Stack, Tile } from '@carbon/react';
import { Code, Doc } from '@carbon/react/icons';

function Project({ name, description, documentation }) {
  const projectLink = `https://github.com/maxtek6/${name}`;
  return (
    <Tile>
    </Tile>
  )
}

function ProjectList() {
  return (
    <Grid condensed align='center'>
      {projects.map(({ name, description, documentation }) => (
        <Column sm={4} md={4} lg={6}>
          <Project
            key={name}
            name={name}
            description={description}
            documentation={documentation}
          />
        </Column>
      ))}
    </Grid>
  );
}

export default ProjectList;