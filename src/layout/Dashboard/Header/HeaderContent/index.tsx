import { Fragment } from 'react';

// material-ui
import { Button } from '@mui/material';

// project import
import Profile from './Profile';
import { useNavigate } from 'react-router';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Button variant="contained" size="small" onClick={() => navigate('/share-videos')}>
        Share video
      </Button>
      <Profile />
    </Fragment>
  );
};

export default HeaderContent;
