import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core';
import {
  User as UserIcon,
  LogOut as LogOutIcon,
} from 'react-feather';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Logo from './Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
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
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Hidden>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem component={RouterLink} to="/app/account" onClick={handleClose}>
            <UserIcon size="20" />
            &nbsp;
            Minha Conta
          </MenuItem>
          <MenuItem component={RouterLink} to="/login">
            <LogOutIcon size="20" />
            &nbsp;
            Sair
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
