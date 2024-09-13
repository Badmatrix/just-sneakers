/* eslint-disable react/prop-types */
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Logo({ handleOpenNav }) {
  return (
    <div className="mx-2 flex items-center gap-2 md:mx-0">
      <RxHamburgerMenu
        onClick={handleOpenNav}
        className="text-texts-400 cursor-pointer text-2xl transition-colors duration-300 ease-in hover:text-black md:hidden md:text-3xl"
      />

      <Link to="/">
        <h1 className="text-texts-400 text-xl font-bold sm:text-2xl">
          sneakers
        </h1>
      </Link>
    </div>
  );
}
