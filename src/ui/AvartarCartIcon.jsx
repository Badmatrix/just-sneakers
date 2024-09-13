/* eslint-disable react/prop-types */
import { BsCart3 } from "react-icons/bs";

export default function AvartarCartIcon({ openCart }) {
  return (
    <div className="flex items-center gap-3 sm:gap-5 md:gap-7">
      <div className="relative">
        <BsCart3 className="relative text-lg md:text-xl cursor-pointer" onClick={openCart} />
        <p className="bg-button-200 absolute -right-3 -top-3 aspect-square rounded-full px-1 text-xs font-semibold text-button-100">
          3
        </p>
      </div>
      <div className="border-button-200 rounded-full border-2">
        <img src="/images/image-avatar.png" alt="avartar" className="sm:w-8 w-6" />
      </div>
    </div>
  );
}
