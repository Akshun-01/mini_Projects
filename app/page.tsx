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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hi There! 👋
      <ExploreBtn onClick={toggleNav} />
      {isOpen ? (
        <div>
          <div className="backdrop absolute top-0 left-0 w-[98%] h-full bg-black opacity-80 z-10"></div>
          <Navbar toggleNav={toggleNav}/>
        </div>
      ) : null}
      <div className="footer absloute bottom-10 opacity-60">
        Explore some of my mini projects which I thought are quite cool and had
        a lot of fun making them! ^^
      </div>
    </main>
  );
}

// ref site: https://0x009922.github.io/some-animations/#/
