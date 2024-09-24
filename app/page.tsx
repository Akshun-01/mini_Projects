'use client'
import { useState } from "react";
import Navbar from "./navbar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
      {/* <ExploreBtn onClick={setIsOpen(true)}></ExploreBtn> */}
      <button onClick={()=>setIsOpen(!isOpen)}> Open Navbar </button>
      {isOpen ? <Navbar /> : null}
      <div className="footer absloute bottom-10 opacity-60">
        Explore some of my mini projects which I thought are quite cool and had
        a lot of fun making them! ^^
      </div>
    </main>
  );
}

// ref site: https://0x009922.github.io/some-animations/#/
// explore btn: https://www.youtube.com/watch?v=W06u8rj1c2s
