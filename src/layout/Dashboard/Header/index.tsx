import { Fragment, ReactNode, useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, AppBarProps } from '@mui/material';

// project import
import HeaderContent from './HeaderContent';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

const Header = () => {
  const theme = useTheme();

  // header content
  const headerContent = useMemo(() => <HeaderContent />, []);

  // common header
  const mainHeader: ReactNode = <Toolbar>{headerContent}</Toolbar>;

  // app-bar params
  const appBar: AppBarProps = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      zIndex: 1200
    }
  };

  return (
    <Fragment>
      <AppBar {...appBar}>{mainHeader}</AppBar>
    </Fragment>
  );
};

export default Header;
