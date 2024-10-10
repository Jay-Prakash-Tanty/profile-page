import * as React from 'react';
import type { NextPage } from 'next';
import { Stack } from '@mui/material';
import { technicalClubs } from '@/constants';
import { nonTechnicalClubs } from '@/constants';
import ClubsSection2 from '@/components/clubs/ClubSection2';
import AboutClub from '@/components/AboutSec/AboutClub';

const Clubs: NextPage = () => {
  return (
    <Stack sx={{backgroundColor: '#1E1E1E'}}>
    <AboutClub/>
    <ClubsSection2 technicalClubs={technicalClubs} nonTechnicalClubs={nonTechnicalClubs}/>
    </Stack>
  );
}

export default Clubs;
