/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";


export default function CartItem({ item }) {
  const { id, name, image, price } = item;
  return (
    <li className="flex items-center justify-between gap-3">
      <div className="aspect-square w-12">
        <img src="/images/image-product-1-thumbnail.jpg" alt={name} />
      </div>
      <div className="text-sm first-letter:capitalize">
        <h6>{name}</h6> <h4>{price}</h4>
      </div>
      <span>
        <MdDeleteForever className="cursor-pointer text-2xl text-texts-300" />
      </span>
    </li>
  );
}
