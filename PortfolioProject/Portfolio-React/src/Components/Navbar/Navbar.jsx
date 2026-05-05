import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="flex justify-between items-center text-white max-w-6xl mx-auto px-6 md:px-20 py-6 relative">

      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } absolute md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent bg-opacity-80 md:flex gap-6 text-center py-4 md:py-0`}
      >
        <a href="#About"><li>About</li></a>
        <a href="#Experience"><li>Experience</li></a>
        <a href="#Projects"><li>Projects</li></a>
        <a href="#Contact"><li>Contact</li></a>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden cursor-pointer"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden cursor-pointer"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;