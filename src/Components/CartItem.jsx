/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";

export default function CartItem({ item, deleteCart }) {
  // console.log(item)
  const { id, title, thumbnail, price, quantity } = item;
  const itemPrice=price * quantity

  return (
    <li className="flex items-center justify-between gap-3">
      <div className="aspect-square w-12 rounded-md overflow-auto">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="text-sm first-letter:capitalize text-texts-300">
        <h6 className="">{title}</h6>
        <h4 className="text-xs text-texts-400">
          ${price} x {quantity } <span className="font-semibold">${itemPrice }.00</span>
        </h4>
      </div>
      <span>
        <MdDeleteForever
          className="cursor-pointer text-2xl text-texts-300"
          onClick={() => deleteCart(id)}
        />
      </span>
    </li>
  );
}
