import projects from '../assets/projects.json';
import ProjectTile from '../components/ProjectTile';
import { Column, Content, Grid } from '@carbon/react';
import AppContent from '../components/AppContent';

function Projects() {
    return (
        <Grid condensed>
            {projects.map(({ name, description, documentation }) => (
                <Column span={4}>
                    <ProjectTile
                        name={name}
                        description={description}
                        documentation={documentation}
                    />
                </Column>
            ))}
        </Grid>
    );
}

export default Projects;