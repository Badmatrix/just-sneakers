/* eslint-disable react/prop-types */
import AvartarCartIcon from "../ui/AvartarCartIcon";
import Logo from "../ui/Logo";
import NavLinks from "../ui/NavLinks";
      


export default function Navbar({ openCart, handleOpenNav }) {
  return (
    <nav className="border-texts-200/20 flex items-center justify-between px-2 py-5 md:border-b md:px-0">
      <div className="flex items-center gap-7">
        <Logo handleOpenNav={handleOpenNav} />
        <NavLinks />
      </div>
      <AvartarCartIcon openCart={openCart} />
    </nav>
  );
}
