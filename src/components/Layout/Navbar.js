import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
}));

const NavButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontSize: '1rem',
  padding: '8px 16px',
  borderRadius: '8px',
  color: '#1a1a1a',
  '&:hover': {
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
  }
}));

const pages = [
  { name: "Prodüktörler", path: '/producers' },
  { name: 'Hizmetler', path: '/services' },
  { name: 'Fiyatlar', path: '/pricing' },
  { name: 'Blog', path: '/blog' }
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: '#2196F3',
              textDecoration: 'none',
              fontSize: '1.5rem'
            }}
          >
            MixMaster
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#1a1a1a' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.name} 
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem component={RouterLink} to="/login">
                <Typography textAlign="center">Giriş Yap</Typography>
              </MenuItem>
              <MenuItem component={RouterLink} to="/register">
                <Typography textAlign="center">Kayıt Ol</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontWeight: 700,
              color: '#2196F3',
              textDecoration: 'none',
              fontSize: '1.5rem'
            }}
          >
            MixMaster
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {pages.map((page) => (
              <NavButton
                key={page.name}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
              >
                {page.name}
              </NavButton>
            ))}
          </Box>

          {/* Auth Buttons - Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <NavButton
              component={RouterLink}
              to="/login"
            >
              Giriş Yap
            </NavButton>
            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              sx={{
                textTransform: 'none',
                fontSize: '1rem',
                padding: '8px 24px',
                borderRadius: '8px',
                backgroundColor: '#2196F3',
                '&:hover': {
                  backgroundColor: '#1976D2'
                }
              }}
            >
              Kayıt Ol
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar; 