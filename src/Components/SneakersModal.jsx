/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

import SneakersImages from "../components/SneakersImages";

// import SneakersImages from "./SneakersImages";

export default function SneakersModal({
  display,
  handleSetDisplay,
  handleModalOverlay,
  modalOverlay,
}) {
  return (
    <div
      className={`w-o left-0 top-0 h-full bg-black/70 md:absolute md:w-full ${modalOverlay ? "block" : "hidden"}`}
    >
      <div className="relative bottom-auto left-0 right-0 top-auto mx-auto w-0 space-y-10 md:w-2/5 lg:w-1/3 lg:space-y-0">
        <IoMdClose
          className="float-right my-3 hidden cursor-pointer text-3xl text-button-200 transition duration-300 ease-linear hover:text-texts-200 md:block"
          onClick={handleModalOverlay}
        />
        <SneakersImages display={display} handleSetDisplay={handleSetDisplay} />
      </div>
    </div>
  );
}
