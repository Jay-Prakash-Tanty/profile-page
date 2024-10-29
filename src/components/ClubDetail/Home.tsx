import React from 'react';
import Carousel from '@/components/subComponents/herosection1'; 

import { imagesArray } from '@/constants';
import { profiles } from '@/constants';
import CardSection from '@/components/subComponents/ClubSection2';


const Home: React.FC = () => {
  return (
    <div>
      <Carousel imagesArray={imagesArray} interval={3000} />
      
      <h1 style={{ color: '#fff', textAlign: 'center', background:'#252525', fontSize:'30px' }}>Faculty Advisors</h1>
      <CardSection profiles={profiles} />
      <h1 style={{ color: '#fff', textAlign: 'center', background:'#252525', fontSize:'30px' }}>Coordinators and Assistant Coordinators</h1>
      <CardSection profiles={profiles} />
      <h1 style={{ color: '#fff', textAlign: 'center', background:'#252525', fontSize:'30px' }}>Domain Leads</h1>
      <CardSection profiles={profiles} />
    </div>
  );
};

export default Home;
