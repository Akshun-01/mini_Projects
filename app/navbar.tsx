import { navData } from "./navData";

const Navbar = () => {
  return (
    <div className="navContainer flex flex-col justify-center items-center">
      {navData.map( data => (
          <div className="navElement" key={data.name}>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              <h1>{data.name}</h1>
            </a>
          </div>
        )
      )}
    </div>
  );
};

export default Navbar;
