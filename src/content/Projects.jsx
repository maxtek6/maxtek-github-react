import projects from '../assets/projects.json';
import ProjectTile from '../components/ProjectTile';
import { Column, Grid } from '@carbon/react';

function ProjectColumn({ children }) {
    return (
        <Column span={4} style={{ marginLeft: -1, marginTop: -1, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}>
            {children}
        </Column>
    )
}

function Projects() {
    return (
        <Grid condensed>
            <Column sm={0} md={2} lg={2} xlg={2} max={2} />
            <Column sm={4} md={4} lg={12} xlg={12} max={12}>
            <Grid condensed>
                    {projects.map(({ name, description, documentation }) => (
                        <ProjectColumn>
                        <ProjectTile name={name} description={description} documentation={documentation} />
                        </ProjectColumn>
                    ))}
            </Grid>
            </Column>
            <Column sm={0} md={2} lg={2} xlg={2} max={2} />
        </Grid >
    );
}

export default Projects;