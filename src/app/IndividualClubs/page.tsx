import React from 'react';
import Carousel from '@/components/IndividualClubs/herosection1'; // Adjust the path as necessary
import Navbar from '@/components/Member/nav1';
import { imagesArray } from '@/constants';
import { profiles } from '@/constants';
import CardSection from '@/components/IndividualClubs/ClubSection2';


const Page: React.FC = () => {
  return (
    <div>
      <Carousel imagesArray={imagesArray} interval={3000} />
      <Navbar />
      <h1 style={{ color: '#fff', textAlign: 'center', background:'#252525', fontSize:'30px' }}>Faculty Advisors</h1>
      <CardSection profiles={profiles} />
      <h1 style={{ color: '#fff', textAlign: 'center', background:'#252525', fontSize:'30px' }}>Coordinators and Assistant Coordinators</h1>
      <CardSection profiles={profiles} />
      <h1 style={{ color: '#fff', textAlign: 'center', background:'#252525', fontSize:'30px' }}>Domain Leads</h1>
      <CardSection profiles={profiles} />
    </div>
  );
};

export default Page;
