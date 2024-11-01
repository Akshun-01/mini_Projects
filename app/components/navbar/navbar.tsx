import { navData } from "./navData";

const Navbar = ({toggleNav}:any) => {
  return (
    <div className="container">
    <div onClick={toggleNav} className="closeBtn bg-red-800 rounded-lg absolute top-6 left-4 px-4 py-2 cursor-pointer z-20 font-exo">X Close</div>
    <div className="navContainer absolute top-12 left-0 p-10 flex flex-wrap items-center justify-center w-full h-screen gap-10 z-20">
      {navData.map( data => (
          <div className="navCard relative rounded-md bg-zinc-900 flex justify-center w-64 h-32 pt-4" key={data.name}>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <h1 className="text-xl font-exo">{data.name}</h1>
            </a>
            <div className="card-footer">
              <div className="likeBtn absolute bottom-5 right-10">23 ♥</div>  {/* https://codepen.io/mateusz800/pen/OJPZXMa */}
              <a className="github-icon absolute bottom-5 left-10" href={data.github} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github hover:fill-cyan-500 hover:stroke-none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
        )
      )}
    </div>
    </div>
  );
};

export default Navbar;
