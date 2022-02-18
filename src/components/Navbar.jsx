import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#f0ce60] flex md:justify-between justify-between items-center py-2 px-4">
      <div className="">
        <Link to="/">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51hKyr0it6L.png"
            alt=""
            className="w-10 h-10"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
