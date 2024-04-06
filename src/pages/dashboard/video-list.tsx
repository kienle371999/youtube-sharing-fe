import { Grid, Pagination } from '@mui/material';
import { useGetVideos } from 'api/video';
import React, { useState } from 'react';
import WelcomeBanner from 'sections/dashboard/WelcomeBanner';
import YoutubeCard from 'sections/dashboard/YoutubeCard';

const VideoList = () => {
  const [cPage, setCPage] = useState(0);
  const { videoPage } = useGetVideos(cPage);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={3}>
      <Grid item xs={12}>
        <WelcomeBanner />
      </Grid>
      {React.Children.toArray(
        videoPage?.data?.map((item, index) => (
          <Grid key={index} item xs={12}>
            <YoutubeCard
              url={item.url}
              title={item.title}
              description={item.description}
              likeCount={item.likeCount}
              userId={item.userId}
              user={item.user}
            />
          </Grid>
        ))
      )}
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
        <Pagination
          count={videoPage?.meta?.pageCount}
          page={cPage + 1}
          onChange={(event, page) => {
            setCPage(page - 1);
          }}
          variant="combined"
          color="primary"
        />
      </Grid>
    </Grid>
  );
};

export default VideoList;
