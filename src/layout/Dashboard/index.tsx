import { Outlet } from 'react-router-dom';

// material-ui
import { Box, Container, Toolbar } from '@mui/material';

import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import AuthGuard from 'utils/route-guard/AuthGuard';

import useConfig from 'hooks/useConfig';
import { openSnackbar } from 'api/snackbar';
import { SnackbarProps } from 'types/snackbar';

// ==============================|| MAIN LAYOUT ||============================== //

const DashboardLayout = () => {
  const { container } = useConfig();

  const eventSource = new EventSource(`${process.env.REACT_APP_API_URL}api/video-events`);

  eventSource.onmessage = ({ data }) => {
    const parsedData = JSON.parse(data);

    if (parsedData) {
      openSnackbar({
        open: true,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        message: `${parsedData?.name} shared the video with title ${parsedData?.title}`,
        variant: 'alert',
        alert: { color: 'secondary' }
      } as SnackbarProps);
    }
  };

  return (
    <AuthGuard>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Header />

        <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <Toolbar />
          <Container
            maxWidth={container ? 'xl' : false}
            sx={{
              ...(container && { px: { xs: 0, sm: 2 } }),
              position: 'relative',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Breadcrumbs />
            <Outlet />
            <Footer />
          </Container>
        </Box>
      </Box>
    </AuthGuard>
  );
};

export default DashboardLayout;
