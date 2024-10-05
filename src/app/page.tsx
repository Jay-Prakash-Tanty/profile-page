import About from "@/components/AboutSec/About";
import UpEve from "@/components/UpCommingEve/UpCommingEve";
import Alumni from "@/components/Alumni/Alumni";
import Thought from "@/components/Thought_of_day/Thought";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hello Developers
      
    </div>


    <div className="bg-[#1E1E1E]">

      <About/>
    
    
      <UpEve/>
    
    
      <Alumni/>
    
    
      <Thought/>
    
    
      <Footer/>

    </div>

    </>
  );
}
