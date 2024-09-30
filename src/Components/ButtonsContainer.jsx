/* eslint-disable react/prop-types */
import Button from "../ui/Button";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export default function ButtonsContainer({
  handleAddtoCart,
  id,
  increaseCartItem,
  decreaseCartItem,
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <Button className="flex justify-between bg-texts-100 lg:w-52">
        <FiMinus className="text-button-200" onClick={()=>decreaseCartItem(id)} />
        <span>0</span>
        <IoMdAdd className="text-button-200" onClick={()=>increaseCartItem(id)}/>
      </Button>
      <Button
        className="gap-3 bg-button-200 text-center text-sm font-semibold hover:bg-orange-400 md:text-xs lg:w-64 lg:gap-3 lg:text-sm xl:w-72"
        onClick={() => handleAddtoCart(id)}
      >
        <IoCartOutline className="text-sm md:text-base lg:text-lg" />
        Add to cart
      </Button>
    </div>
  );
}
