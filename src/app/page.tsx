"use client";
import MainLogin from "@/components/(auth)/MainLogin";
import ResponsiveAppBar from "@/components/navbar/ResponsiveAppBar";
import Carousel from "@/components/carousal/Carousal";
import EventsAndNews from "@/components/Events and news/EventsAndNews";
import About from "@/components/AboutSec/AboutVssut";
import UpEve from "@/components/UpCommingEve/UpCommingEve";
import Alumni from "@/components/Alumni/Alumni";
import Thought from "@/components/Thought_of_day/Thought";
import Footer from "@/components/footer/Footer";
import { images } from "@/constants/index";
import { clubs } from "@/constants/index";

import ClubSection from "@/components/clubs/ClubSection";
import CounterWrapper from "@/components/clubs/about";

import React, { useState } from 'react';
import Login from "@/components/(auth)/Login";
import EmailPasswordLogin from "@/components/(auth)/EmailPasswordLogin";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="no-scrollbar">
       {/* <MainLogin/> */}
      <ResponsiveAppBar isAuthenticated={isAuthenticated} />
      <Carousel imagesArray={images} interval={5000} />
      <CounterWrapper />
      <ClubSection clubs={clubs}/>
      <About />
      <EventsAndNews />
      <UpEve />
      <Alumni />
      <Thought />
      <Footer />
    </div>
  );
}