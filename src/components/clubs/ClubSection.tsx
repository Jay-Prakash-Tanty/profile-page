import React from 'react';
import { Typography, Button, Box , Grid} from '@mui/material';
import ClubCardWrapper from './ClubCard'; 

interface Club {
  name: string;
  description: string;
  logo: string;
}

interface ClubsSectionProps {
  clubs: Club[];
}

const ClubsSection: React.FC<ClubsSectionProps> = ({ clubs = []}) => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#1E1E1E', color: '#ffffff' }}>
      <Typography variant="h4" align="center" fontFamily={'Poppins'} gutterBottom sx={{fontSize: '36px' , color : 'ffffff' , fontWeight: '600' , lineHeight: '54px'}} my={4}>
        Clubs of VSSUT, Burla
      </Typography>

      <Grid container spacing={2}>
        {clubs.map((club, index) => (
          <Grid
            xs={12}      
            sm={6}       
            md={4}       
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

      <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#f0a500', 
            padding: '0.75rem 1.5rem',  
            fontSize: '1rem',           
            '&:hover': {
              backgroundColor: '#c98e00',  
            }
          }}
        >
          Explore All →
        </Button>
      </Box>
    </Box>
  );
};

export default ClubsSection;
