/* eslint-disable react/prop-types */
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";

import Button from "../ui/Button";
import { BsCart3 } from "react-icons/bs";

export default function SneakersDetail({ displayProduct }) {
  const { title, text, price } = displayProduct;
  const discountPrice = "";
  return (
    <section className="col-span-2 py-3 md:mx-3 md:w-[75%] md:translate-x-16">
      <div className="px-5 md:w-4/5">
        <p className="my-2 text-xs uppercase">sneaker company</p>
        <h1 className="text-texts-400 mb-7 text-3xl font-bold capitalize">
          {title}
        </h1>
        <p className="text-xs leading-5">{text}</p>
        <div className="my-4 flex items-center gap-3">
          <div className="space-y-2">
            <h2 className="text-base font-bold text-black">
              ${discountPrice || 125.0}.00
            </h2>
            <h3 className="text-xs font-semibold line-through">${price}.00</h3>
          </div>
          <h6 className="bg-texts-400 h-6 rounded-md px-2 py-1 text-xs font-semibold text-white">
            50%
          </h6>
        </div>
        <div className="my-5 flex items-center gap-5">
          <div className="bg-texts-100 flex h-9 items-center space-x-5 rounded-md px-3 py-2 text-xs font-bold">
            <span className="">
              <AiOutlineMinus className="text-button-200 hover:text-texts-400 cursor-pointer font-bold" />
            </span>
            <span>0</span>

            <span>
              <IoMdAdd className="text-button-200 hover:text-texts-400 cursor-pointer font-bold" />
            </span>
          </div>
          <Button className="bg-button-200 flex h-9 w-44 items-center justify-center gap-3 text-xs font-semibold capitalize text-black">
            <BsCart3 className="text-sm" />
            add to cart
          </Button>
        </div>
      </div>
    </section>
  );
}
