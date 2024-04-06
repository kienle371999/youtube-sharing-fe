import { Button, Stack, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import { UserProfile } from 'types/auth';

interface YoutubeCardProps {
  url: string;
  title: string;
  description: string;
  likeCount: number;
  userId: number;
  user: UserProfile;
}

const YoutubeCard = ({ url, title, description, likeCount, userId, user }: YoutubeCardProps) => (
  <MainCard>
    <Stack spacing={2}>
      <Typography variant="h5">{title}</Typography>
      <Typography>
        <Typography component="span" variant="subtitle1">
          Shared by:
        </Typography>{' '}
        {user.username}
      </Typography>
      <Typography>
        {' '}
        <Typography component="span" variant="subtitle1">
          Likes:{' '}
        </Typography>{' '}
        {likeCount}
      </Typography>
      <Typography variant="subtitle1">Description</Typography>
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
