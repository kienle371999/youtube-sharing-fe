import { Fragment } from 'react';

// material-ui
import { Button } from '@mui/material';

// project import
import Profile from './Profile';
import Notification from './Notification';
import { useNavigate } from 'react-router';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Button variant="contained" size="small" onClick={() => navigate('/share-videos')}>
        Share video
      </Button>
      <Notification />
      <Profile />
    </Fragment>
  );
};

export default HeaderContent;
