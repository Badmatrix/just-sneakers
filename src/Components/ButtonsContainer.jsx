import Button from "../ui/Button";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export default function ButtonsContainer() {
  return (
    <div className="flex flex-col gap-5 md:flex-row ">
      <Button className="flex justify-between bg-texts-100 lg:w-52">
        <FiMinus className="text-button-200" />
        <span>0</span>
        <IoMdAdd className="text-button-200" />
      </Button>
      <Button className="md:w-72 md:text-xs lg:text-sm gap-3 bg-button-200 text-center text-sm font-semibold hover:bg-orange-400 lg:gap-3">
        <IoCartOutline className="text-sm md:text-base lg:text-lg" />
        Add to cart
      </Button>
    </div>
  );
}
