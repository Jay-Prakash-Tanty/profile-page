import MainLogin from "@/components/(auth)/MainLogin";
import ResponsiveAppBar from "@/components/navbar/ResponsiveAppBar";
import Carousel from "@/components/carousal/Carousal";
import EventsAndNews from "@/EventsAndNews/EventsAndNews";
import About from "@/components/AboutSec/About";
import UpEve from "@/components/UpCommingEve/UpCommingEve";
import Alumni from "@/components/Alumni/Alumni";
import Thought from "@/components/Thought_of_day/Thought";
import Footer from "@/components/footer/Footer";


export default function Home() {
const images = [
  {
    src: '/images/image1.jpg',
    caption: 'Explore all the clubs \n of your college',
  },
  {
    src: '/images/image2.jpg',
    caption: 'Explore all the clubs of your college',
  },
  {
    src: '/images/image3.jpg',
    caption: 'Explore all the clubs of your college',
  },
];

  return (
    <>


       <ResponsiveAppBar />
       <div style={{ width: '100%' }}>
        <Carousel
          imagesArray={images}
          interval={5000}
        >
        </Carousel>
      </div>
      <MainLogin/>
      <About/>
      <EventsAndNews/>      
      <UpEve/>
      <Alumni/>
      <Thought/>
      <Footer/>


    </>
  );
}
