/* eslint-disable react/prop-types */
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../components/Logo";
import NavLinks from "../components/NavLinks";
import Avartar from "../ui/Avatar";
import CartIcon from "../ui/CartIcon";

export default function Navbar({ handleOpenNav, handleCartModal }) {
  return (
    <nav className="flex items-center justify-between px-3 py-5 align-middle text-texts-400 md:mx-7 md:border-b">
      <div className="flex items-center gap-3 md:gap-8">
        <RxHamburgerMenu
          className="cursor-pointer text-2xl font-bold text-texts-300 transition duration-300 ease-linear hover:text-texts-400 md:hidden"
          onClick={handleOpenNav}
        />
        <Logo />
        <NavLinks />
      </div>
      <div className="flex items-center gap-5">
        <CartIcon handleCartModal={handleCartModal} />
        <Avartar />
      </div>
    </nav>
  );
}
