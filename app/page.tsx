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
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" /> */}
      {/* Can add this 👆. Or can add stars using particleJs or something similar */}
      Hi There! 👋
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
