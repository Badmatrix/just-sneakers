/* eslint-disable react/prop-types */

import CartItem from "./CartItem";
const carts = [
  //   { id: 1, title: "lorem sneakers", price: 30 },
  //   { id: 2, title: "lorem sneakers", price: 30 },
];

export default function CartModal({ isOpen }) {
  return (
    <div
      className={`shadow-texts-400 absolute top-24 mx-auto w-11/12 rounded-sm border-2 bg-white px-2 py-3 shadow-md md:right-0 md:top-20 md:w-2/5 lg:w-1/3 translate-x-5 md:translate-x-0 ${isOpen ? "block" : "hidden"}`}
    >
      <h1 className="border-texts-300/50 border-b">cart</h1>
      {!carts.length ? (
        <p className="text-texts-400 my-5 text-center text-sm font-semibold first-letter:capitalize">
          your cart is empty
        </p>
      ) : (
        <ul>
          {carts.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
