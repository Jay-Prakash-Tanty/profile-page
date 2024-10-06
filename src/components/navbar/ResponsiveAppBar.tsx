"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useMediaQuery } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const pages = ['Home', 'About', 'Clubs', 'Profile'];

function ResponsiveAppBar() {
  const [activePage, setActivePage] = React.useState(pages[0]);
  const [isSidenavOpen, setSidenavOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width: 900px)');
  const sidenavRef = React.useRef<HTMLDivElement | null>(null);

  const handleSidenavToggle = () => {
    setSidenavOpen(prev => !prev);
  };

  const handlePageChange = (page: string) => {
    setActivePage(page);
    setSidenavOpen(false); // Close sidenav when a page is selected
  };

  const handleLoginClick = () => {
    alert('Login clicked');
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSidenavOpen && sidenavRef.current && !sidenavRef.current.contains(event.target as Node)) {
        setSidenavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidenavOpen]);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#252525' }}>
        <Container>
          <Toolbar disableGutters>
            {/* Logo and Title */}
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <img
                src="/images/vssut logo.jpg"
                alt="VSSUT Logo"
                style={{ width: 40, height: 40 }}
              />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.8em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: '8px',
                }}
              >
                <span style={{ fontSize: '0.9em' }}>Clubs of</span>
                <span style={{ fontSize: '1.2em' }}>VSSUT</span>
              </Typography>
            </Box>

            {/* Navigation Links for Desktop */}
            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    sx={{
                      my: 2,
                      color: activePage === page ? 'white' : '#bdbdbd',
                      position: 'relative',
                      fontSize: '18px',
                      padding: '12px 16px',
                      textTransform: 'none',
                      '&:hover': {
                        color: 'white',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          left: '50%',
                          bottom: '-4px',
                          height: '2px',
                          width: '100%',
                          backgroundColor: 'white',
                          transform: 'translateX(-50%) scaleX(1)',
                          transition: 'transform 0.3s ease',
                        },
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: '50%',
                        bottom: '-4px',
                        height: '2px',
                        width: '100%',
                        backgroundColor: 'transparent',
                        transform: 'translateX(-50%) scaleX(0)',
                        transition: 'transform 0.3s ease',
                      },
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            )}

            {/* Hamburger Menu for Mobile */}
            {isMobile && (
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleSidenavToggle}
                color="inherit"
                sx={{ ml: 'auto' }}
              >
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
            )}

            {/* Login Button for Desktop */}
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  color: '#424242',
                  border: '1px solid white',
                  borderRadius: '4px',
                  padding: '6px 32px', // Adjust padding as needed
                  fontSize: '18px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#424242',
                  },
                }}
                onClick={handleLoginClick}
              >
                LOG IN
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Sidenav - only show on mobile */}
      {isMobile && (
        <nav
          ref={sidenavRef}
          id="sidenav-1"
          className="sidenav"
          style={{
            position: 'fixed',
            top: 0,
            left: isSidenavOpen ? 0 : '-250px', // Use this to slide the sidenav in/out
            height: '100%',
            width: '250px',
            backgroundColor: '#252525',
            padding: '10px',
            zIndex: 1000,
            transition: 'left 0.3s ease', // Add transition for smooth sliding
          }}
        >
          <Box sx={{ padding: '10px' }}>
            <ul className="sidenav-menu">
              {pages.map((page) => (
                <li className="sidenav-item" key={page}>
                  <Button
                    className="sidenav-link"
                    onClick={() => handlePageChange(page)}
                    sx={{ color: 'white', padding: '10px 20px', width: '100%' }}
                  >
                    {page}
                  </Button>
                </li>
              ))}
              <li className="sidenav-item">
                <Button
                  variant="outlined"
                  onClick={handleLoginClick}
                  sx={{
                    backgroundColor: 'white',
                    color: '#424242',
                    border: '1px solid white',
                    borderRadius: '4px',
                    padding: '6px 16px', 
                    width: '100%',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: '#424242',
                    },
                  }}
                >
                  LOG IN
                </Button>
              </li>
            </ul>
          </Box>
        </nav>
      )}
    </>
  );
}

export default ResponsiveAppBar;
