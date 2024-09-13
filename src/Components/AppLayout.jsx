import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CartModal from "./CartModal";
import { useState } from "react";
import NavModal from "./NavModal";

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  function openCart() {
    setIsOpen((open) => !open);
  }
  function handleOpenNav() {
    setOpenNav((open) => !open);
    document.body.classList.toggle('overflow-hidden')

  }

  return (
    <div className="relative mx-auto w-[90%] sm:w-[70%] md:w-[80%]">
      <Navbar openCart={openCart} handleOpenNav={handleOpenNav} />
      <div className="my-5 w-full md:mx-3 md:mt-10 md:translate-x-8 lg:mt-14">
        <Outlet />
      </div>
      <CartModal isOpen={isOpen} />
      <NavModal handleOpenNav={handleOpenNav} openNav={openNav} />
    </div>
  );
}
