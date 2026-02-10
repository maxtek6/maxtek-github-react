import { Column, Grid, Link, Stack, Tile } from '@carbon/react';
import {Code, Doc} from '@carbon/react/icons';

function LinkStack({ projectLink, documentation }) {
    return (
        <Stack orientation='horizontal'>
            <Link href={projectLink} target='_blank' rel='noopener noreferrer'>
                <Code size={24}/>
            </Link>
            {documentation && (
                <Link href={documentation} target='_blank' rel='noopener noreferrer'>
                    <Doc size={24}/>
                </Link>
            )}
        </Stack>
    )
}

function ProjectTile({ name, description, documentation }) {
    const projectLink = `https://github.com/maxtek6/${name}`;
    return (
        <Tile className='project-tile'>
            <Grid>
                <Column span={3}>
                    <h3>{name}</h3>
                </Column>
                <Column span={1}>
                    <LinkStack projectLink={projectLink} documentation={documentation} />
                </Column>
            </Grid>
            <Grid>
                <Column span={4}>
                    <p>{description}</p>
                </Column>
            </Grid>
        </Tile>
    )
}

export default ProjectTile;