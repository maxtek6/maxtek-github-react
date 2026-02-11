import projects from '../assets/projects.json';
import ProjectTile from '../components/ProjectTile';
import { Column, Grid } from '@carbon/react';

function Projects() {
    return (
        <Grid>
            <Column sm={0} md={2} lg={2} xlg={2} max={2} />
            <Column sm={4} md={4} lg={12} xlg={12} max={12}>
                <Grid sm={4} md={4} lg={12} xlg={12} max={12}>
                {projects.map(({ name, description, documentation }) => (
                    <ProjectTile name={name} description={description} documentation={documentation} />
                ))}
                </Grid>
            </Column>
            <Column sm={0} md={2} lg={2} xlg={2} max={2} />
        </Grid >
    );
}

export default Projects;