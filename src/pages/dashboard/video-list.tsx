import { Grid } from '@mui/material';
import { useGetVideos } from 'api/video';
import React from 'react';
import WelcomeBanner from 'sections/dashboard/WelcomeBanner';
import YoutubeCard from 'sections/dashboard/YoutubeCard';

const VideoList = () => {
  const { video } = useGetVideos();

  return (
    <Grid container rowSpacing={4.5} columnSpacing={3}>
      <Grid item xs={12}>
        <WelcomeBanner />
      </Grid>
      {React.Children.toArray(
        video?.map((item, index) => (
          <Grid key={index} item xs={12}>
            <YoutubeCard url={item.url} title={item.title} description={item.description} likeCount={item.likeCount} userId={item.userId} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default VideoList;
