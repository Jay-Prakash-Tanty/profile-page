import MainLogin from "@/components/(auth)/MainLogin";

import EventsAndNews from "@/EventsAndNews/EventsAndNews";

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

      <MainLogin/>
      <EventsAndNews/>

    </>
  );
}
