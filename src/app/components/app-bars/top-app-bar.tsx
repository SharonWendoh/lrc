"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';

const settings = ['Account', 'Logout'];

export default function TopAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#FFFFFF"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' , xl: 'flex'}, flexGrow: 1,
               mr: 1  }}>
            <Image 
                src="/safaricom-logo.png"
                width={130} 
                height={60}
                alt="Safaricom Logo"
                style={{
                    
                }}
            ></Image>
            </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000000',
              textDecoration: 'none',
            }}
          >
            LINE RECYCLING
          </Typography>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1  }}>
            <Image 
                src="/safaricom-logo.png"
                width={50}
                height={40}
                alt="Safaricom Logo"
                style={{
                    
                }}
            ></Image>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000000',
              textDecoration: 'none',
            }}
          >
            LINE RECYCLING
          </Typography>
          <Box sx={{ flexGrow: 0, ml: 'auto'  }}>
            <Tooltip title="Profile Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, border: 1,borderBlockColor: "#000000" }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
