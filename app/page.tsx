"use client";
import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import ExploreBtn from "./components/ExploreBtn";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-12 relative bg-black">
      <span className="z-10 font-comic text-5xl">Hi There! 👋 </span>
      <ExploreBtn onClick={toggleNav} />
      {isOpen ? (
        <div>
          <div className="backdrop absolute top-0 left-0 w-[98%] h-full bg-black opacity-80 z-10"></div>
          <Navbar toggleNav={toggleNav}/>
        </div>
      ) : null}
      <div className="footer absloute bottom-10 opacity-60">
        Here is a collection of some of my side projects which I thought are quite cool and fun to make! ^^
      </div>
    </main>
  );
}

// ref site: https://0x009922.github.io/some-animations/#/
// background: https://ui.aceternity.com/components/background-beams-with-collision

/*
TODO: 
- change card color and font (can also add animation to the card text)
- add background animation to homepage
- add like functionality and animation
- update the content written on homepage
- add click animations
*/
