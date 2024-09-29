/* eslint-disable react/prop-types */
import { IoCartOutline } from "react-icons/io5";

export default function CartIcon({ handleCartModal }) {
  return (
    <div className="relative">
      <IoCartOutline
        className="cursor-pointer text-lg sm:text-2xl"
        onClick={handleCartModal}
      />
      <p className="absolute -right-2 -top-2 aspect-square rounded-full bg-button-200 px-1 text-center text-xs font-medium text-texts-100">
        6
      </p>
    </div>
  );
}
