import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Hidden,
  Typography
} from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = (props) => (
  <AppBar elevation={0} {...props}>
    <Toolbar sx={{ height: 64 }}>
      <Hidden lgUp>
        <Box sx={{ flexGrow: 1 }} />
      </Hidden>
      <RouterLink to="/">
        <Box display="flex" align-items="center" gap="15px">
          <Logo />
          <Hidden lgDown>
            <Typography color="#fff" variant="logo">
              Classroom Admin
            </Typography>
          </Hidden>
        </Box>
      </RouterLink>
      <Hidden lgUp>
        <Box sx={{ flexGrow: 1 }} />
      </Hidden>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
