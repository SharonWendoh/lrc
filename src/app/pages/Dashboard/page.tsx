import StatsCard from "@/app/components/cards/card";
import SimpleCard from "@/app/components/cards/card";
import HorizontalBars from "@/app/components/charts/bar-graphs/horizontal-bar-graph";
import VerticalBarGraph from "@/app/components/charts/bar-graphs/vertical-bar-graph";
import StackedAreas from "@/app/components/charts/line-chart";
import PieActiveArc from "@/app/components/charts/pie-chart";
import { Box, Grid } from '@mui/material';

export default function Page(){
    return (
        <main>
            <Box
                marginLeft={0} 
                justifyContent="flex-start" 
            >
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} md={4}>
                        <StatsCard text="Total no of lines" value={22200}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StatsCard text="Successful" value={22200}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StatsCard text="Failed" value={22200}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} md={7}>
                        <StackedAreas />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <PieActiveArc />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} md={12}>
                    <VerticalBarGraph />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} md={12}>
                        <HorizontalBars />
                    </Grid>
                </Grid>
            </Box>
        </main>
    )
}
