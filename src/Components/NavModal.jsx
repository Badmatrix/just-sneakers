/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";

export default function NavModal({ openNav, handleOpenNav }) {
  return (
    <div
      className={`space-y-5 overflow-hidden md:hidden ${openNav ? "fixed top-0 w-full bg-black/70" : "hidden"}`}
    >
      <div className="h-screen w-2/3 space-y-8 bg-white px-3 py-3">
        <IoClose
          className="text-3xl transition duration-200 ease-linear hover:text-texts-300"
          onClick={handleOpenNav}
        />
        <ul className="navlink space-y-5 text-lg font-semibold capitalize">
          <li>collection</li>
          <li>men</li>
          <li>women</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
}
