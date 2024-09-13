/* eslint-disable react/prop-types */

import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function NavModal({ openNav,handleOpenNav }) {

  return (
    <div
      className={`text-texts-300 absolute top-0 h-screen w-2/3 space-y-8 bg-white py-10 font-semibold capitalize ${openNav ? "block" : "hidden"}`}
    >
      <div>
        <IoMdClose className="cursor-pointer text-3xl font-semibold transition-all duration-200 ease-linear hover:text-black" onClick={handleOpenNav} />
      </div>
      <ul className="space-y-5 text-lg">
        <li>
          <NavLink to="/">collection</NavLink>
        </li>

        <li>
          <NavLink to="/">men</NavLink>
        </li>
        <li>
          <NavLink to="/">women</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
