import { Column, Content, Grid } from '@carbon/react';

function Home() {
    return (
        <Grid>
            <Column
                sm={4}   // mobile: full width (4-column grid)
                md={4}   // tablet: full width
                lg={6}   // desktop: half width (2 columns total)
            >
                <h3>Maxtek</h3>
            </Column>
            <Column
                sm={4}   // mobile: full width (4-column grid)
                md={4}   // tablet: full width
                lg={6}   // desktop: half width (2 columns total)
            >
                <h3>Consulting</h3>
            </Column>
        </Grid>
    );
}

export default Home;