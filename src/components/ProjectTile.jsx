import { Column, Grid, Link, Stack, Tile, TileGroup } from '@carbon/react';
import { Code, Doc } from '@carbon/react/icons';

function LinkStack({ projectLink, documentation }) {
    return (
        <Grid>
            <Column span={1} />
            <Column span={1}>
                <Link href={projectLink} target='_blank' rel='noopener noreferrer'>
                    <Code size={24} />
                </Link>
            </Column>
            <Column span={1}>
                {documentation && (
                    <Link href={documentation} target='_blank' rel='noopener noreferrer'>
                        <Doc size={24} />
                    </Link>
                )}
            </Column>
            <Column span={1} />
        </Grid>
    )
}

function ProjectTile({ name, description, documentation }) {
    const projectLink = `https://github.com/maxtek6/${name}`;
    return (
        <Tile className='project-tile'>
                <Stack gap={3}>
                    <Grid>
                        <Column span={2}>
                            <h3>{name}</h3>
                        </Column>
                        <Column span={2} />
                    </Grid>
                    <Grid style={{ minHeight: '48px' }}>
                        <Column span={4}>
                            <p>{description}</p>
                        </Column>
                    </Grid>
                    <LinkStack projectLink={projectLink} documentation={documentation} />
                </Stack>
        </Tile>
    )
}

export default ProjectTile;