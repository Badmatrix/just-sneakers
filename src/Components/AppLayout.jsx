/* eslint-disable react/prop-types */
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NavModal from "./NavModal";
import CartModal from "../components/CartModal";

export default function AppLayout({ carts, dispatch }) {
  const [openNav, setOpenNav] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);

  function handleOpenNav() {
    setOpenNav((open) => !open);
  }
  function handleCartModal() {
    setOpenCartModal((open) => !open);
  }
  return (
    <div className="absolute">
      <div className="relative h-screen max-w-full font-Kumbh md:mx-auto md:w-5/6 lg:w-3/4">
        <Navbar
          handleOpenNav={handleOpenNav}
          handleCartModal={handleCartModal}
          carts={carts}
        />
        <Outlet />
        <CartModal
          handleCartModal={handleCartModal}
          openCartModal={openCartModal}
          carts={carts}
          dispatch={dispatch}
        />
        <NavModal openNav={openNav} handleOpenNav={handleOpenNav} />
      </div>
    </div>
  );
}
