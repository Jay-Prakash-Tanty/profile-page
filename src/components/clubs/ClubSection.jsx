import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import ClubCardWrapper from './ClubCard'; // Assuming the ClubCard component is named ClubCardWrapper

const clubs = [
  { name: 'Enigma', description: 'Official web and coding club of VSSUT, Burla', logo:'/enigma.jpg'},
  { name: 'E-cell', description: 'Techno-management club of VSSUT, Burla', logo:'/eecell.png'},
  { name: 'IEEE SB', description: 'Electronics and Electrical Society of VSSUT, Burla', logo: '/ieee.jpg' },
  { name: 'Enigma', description: 'Official web and coding club of VSSUT, Burla', logo: '/enigma.jpg'},
  { name: 'Enigma', description: 'Official web and coding club of VSSUT, Burla', logo: '/enigma.jpg'},
  { name: 'Enigma', description: 'Official web and coding club of VSSUT, Burla', logo: '/enigma.jpg'},
];

const ClubsSection = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#121212', color: '#ffffff' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Clubs of VSSUT, Burla
      </Typography>
      
      <Grid container spacing={3}>
        {clubs.map((club, index) => (
          <Grid 
            item 
            xs={12}      // Full width on mobile
            sm={6}       // 2 cards per row on small screens
            md={4}       // 3 cards per row on medium and larger screens
            key={index} 
          >
            <ClubCardWrapper 
              name={club.name} 
              description={club.description} 
              logo={club.logo} 
            />
          </Grid>
        ))}
      </Grid>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Button 
          variant="contained" 
          color="primary" 
          style={{ 
            backgroundColor: '#f0a500',
            padding: '0.75rem 1.5rem', // Increased padding for a better mobile experience
            fontSize: '1rem'            // Font size adjusted for better visibility
          }}
        >
          Explore All →
        </Button>
      </div>
    </div>
  );
};

export default ClubsSection;