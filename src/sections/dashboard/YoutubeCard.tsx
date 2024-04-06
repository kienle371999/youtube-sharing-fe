import { Button, Stack, Typography } from '@mui/material';
import MainCard from 'components/MainCard';

interface YoutubeCardProps {
  url: string;
  title: string;
  description: string;
  likeCount: number;
  userId: number;
}

const YoutubeCard = ({ url, title, description, likeCount, userId }: YoutubeCardProps) => (
  <MainCard>
    <Stack spacing={2}>
      <Typography variant="h5">{title}</Typography>
      <Typography>{`Shared by: ${userId}`}</Typography>
      <Typography>{`${likeCount} likes`}</Typography>
      <Typography>{'Description:'}</Typography>
      <Typography variant="caption" color="secondary">
        {description}
      </Typography>
      <Button variant="contained" size="small" href={url} sx={{ width: 64 }} target="_blank">
        Link
      </Button>
    </Stack>
  </MainCard>
);

export default YoutubeCard;
