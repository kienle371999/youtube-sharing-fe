import { Grid } from '@mui/material';
import WelcomeBanner from 'sections/dashboard/WelcomeBanner';

const VideosList = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={3}>
      <Grid item xs={12}>
        <WelcomeBanner />
      </Grid>
    </Grid>
  );
};

export default VideosList;
