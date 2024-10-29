"use client";
import * as React from 'react';
import type { NextPage } from 'next';
import Navbar from '@/components/Member/nav1'; 
import Home from '@/components/ClubDetail/Home';
import Member from '@/components/ClubDetail/Member';
import Projects from '@/components/ClubDetail/Projects'; 
import Achievements from '@/components/ClubDetail/Achievements'; 

const ClubsDetails: NextPage = () => {
  const [activeLink, setActiveLink] = React.useState<string>('home');

  return (
    <>
    
    <div style={{ position: 'fixed', top: '350px', width: '100%', zIndex: 1000 }}>
      <Navbar onLinkChange={setActiveLink} />
      </div>
      <div className="content">
        {activeLink === 'home' && <Home />}
        {activeLink === 'members' && <Member />}
        {activeLink === 'projects' && <Projects />} 
        {activeLink === 'Achievements' && <Achievements />} 
        
      </div>
     
    </>
  );
}

export default ClubsDetails;
