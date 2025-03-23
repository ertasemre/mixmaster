import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#121212' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: '56px', sm: '64px' } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              cursor: 'pointer',
              color: '#1DB954',
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
            onClick={() => navigate('/')}
          >
            MixMaster.service
          </Typography>
          
          {/* Desktop menü */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            gap: 2
          }}>
            <Button
              variant="outlined"
              onClick={() => navigate('/login')}
              sx={{
                borderColor: '#1DB954',
                color: '#1DB954',
                '&:hover': {
                  borderColor: '#1ed760',
                  bgcolor: 'rgba(29, 185, 84, 0.1)'
                },
                textTransform: 'none',
                borderRadius: '50px',
                px: 3,
                height: '40px'
              }}
            >
              Giriş Yap
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate('/packages')}
              sx={{ 
                bgcolor: '#1DB954',
                '&:hover': { 
                  bgcolor: '#1ed760'
                },
                textTransform: 'none',
                borderRadius: '50px',
                px: 3,
                height: '40px'
              }}
            >
              Başla
            </Button>
          </Box>

          {/* Mobil menü */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{ color: '#1DB954' }}
            >
              <MenuIcon />
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
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                '& .MuiPaper-root': {
                  bgcolor: '#121212',
                  color: 'white',
                  mt: 5
                }
              }}
            >
              <MenuItem 
                onClick={() => handleNavigation('/login')}
                sx={{ 
                  color: '#1DB954',
                  '&:hover': { bgcolor: 'rgba(29, 185, 84, 0.1)' }
                }}
              >
                Giriş Yap
              </MenuItem>
              <MenuItem 
                onClick={() => handleNavigation('/packages')}
                sx={{ 
                  color: '#1DB954',
                  '&:hover': { bgcolor: 'rgba(29, 185, 84, 0.1)' }
                }}
              >
                Başla
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 