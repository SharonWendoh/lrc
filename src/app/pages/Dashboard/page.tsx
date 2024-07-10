import SimpleCard from "@/app/components/cards/card";
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
                        <SimpleCard text="Total no of lines" value={22200}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SimpleCard text="Total no of lines" value={22200}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SimpleCard text="Total no of lines" value={22200}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} md={7}>
                        <StackedAreas />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <PieActiveArc />
                    </Grid>
                </Grid>
            </Box>
        </main>
    )
}
