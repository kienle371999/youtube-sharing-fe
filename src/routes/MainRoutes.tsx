import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import VideoForm from 'pages/dashboard/video-form';

// render - dashboard
const VideoList = Loadable(lazy(() => import('pages/dashboard/video-list')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '/dashboard',
          element: <VideoList />,
          children: []
        },
        {
          path: 'share-videos',
          element: <VideoForm />,
          children: []
        }
      ]
    }
  ]
};

export default MainRoutes;
