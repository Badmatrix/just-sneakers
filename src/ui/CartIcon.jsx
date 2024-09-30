/* eslint-disable react/prop-types */
import { IoCartOutline } from "react-icons/io5";

export default function CartIcon({ handleCartModal, carts }) {
  const num = carts.reduce((acc, curr) => acc + curr.quantity, 0)
  return (
    <div className="relative">
      <IoCartOutline
        className="cursor-pointer text-lg sm:text-2xl"
        onClick={handleCartModal}
      />
      {carts.length > 0 && (
        <p className="absolute -right-2 -top-2 aspect-square rounded-full bg-button-200 px-1 text-center text-xs font-medium text-texts-100">
          {num}
        </p>
      )}
    </div>
  );
}
