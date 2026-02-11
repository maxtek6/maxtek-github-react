import { Column, Grid, Stack, Tile } from '@carbon/react';
import OrgGraph from '../components/OrgGraph';

import organizations from '../assets/organizations.json';

function Home() {
    return (
        <Grid>
            <Column sm={0} md={1} lg={2} xlg={2} max={2} />
            <Column sm={4} md={4} lg={6} xlg={6} max={6}>
                <OrgGraph members={organizations} />
            </Column>
            <Column sm={4} md={4} lg={6} xlg={6} max={6}>
                <Stack gap={3}>
                    <h3>Maxtek Consulting</h3>
                    <p>US-based consulting firm specializing in open source software.</p>
                </Stack>
            </Column>
            <Column sm={0} md={1} lg={2} xlg={2} max={2} />
        </Grid>
    );
}

export default Home;