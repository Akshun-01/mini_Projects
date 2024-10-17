import { navData } from "./navData";

const Navbar = ({toggleNav}:any) => {
  return (
    <div className="container">
    <div onClick={toggleNav} className="closeBtn bg-red-800 rounded-lg absolute top-6 left-4 px-4 py-2 cursor-pointer z-20">X Close</div>
    <div className="navContainer absolute top-12 left-0 p-10 flex flex-wrap items-center justify-center w-full h-screen gap-10 z-20">
      {navData.map( data => (
          <div className="navCard relative rounded-md bg-slate-500 flex items-center justify-center w-64 h-64" key={data.name}>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <h1>{data.name}</h1>
            </a>
            <div className="likeBtn absolute bottom-5 right-10">23 ♥</div>  {/* https://codepen.io/mateusz800/pen/OJPZXMa */}
            {/* add github link as well */}
          </div>
        )
      )}
    </div>
    </div>
  );
};

export default Navbar;
