import MainLogin from "@/components/(auth)/MainLogin";
import ResponsiveAppBar from "@/components/navbar/ResponsiveAppBar";
import Carousel from "@/components/carousal/Carousal";
import EventsAndNews from "@/components/Events and news/EventsAndNews";
import About from "@/components/AboutSec/About";
import UpEve from "@/components/UpCommingEve/UpCommingEve";
import Alumni from "@/components/Alumni/Alumni";
import Thought from "@/components/Thought_of_day/Thought";
import Footer from "@/components/footer/Footer";
import {images} from "@/constants/index";

import ClubSection from "@/components/clubs/ClubSection";

import CounterWrapper from "@/components/clubs/about";

import React from 'react';
export default function Home() {
  return (
    <div className="no-scrollbar">
      <ResponsiveAppBar />
      <Carousel imagesArray={images} interval={5000} />
      <CounterWrapper />
      <ClubSection />
      <About />
      <EventsAndNews />
      <UpEve />
      <Alumni />
      <Thought />
      <Footer />
    </div>
  );
}
