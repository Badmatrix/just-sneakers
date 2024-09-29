/* eslint-disable react/prop-types */

import Button from "../ui/Button";
import CartItem from "../components/CartItem";
const carts = [{ id: 1, name: "air jordan", price: 250, image: "" }];

export default function CartModal({ openCartModal }) {
  return (
    <div
      className={`absolute left-0 right-0 top-28 mx-auto w-11/12 space-y-6 overflow-hidden rounded-md bg-white py-2 shadow-md md:left-auto md:right-6 md:top-20 md:mx-0 md:w-2/5 lg:top-16 xl:w-1/3 pb-5 ${openCartModal ? "block" : "hidden"}`}
    >
      <h2 className="border-b border-texts-100 px-2 py-3 font-semibold capitalize text-texts-400">
        cart
      </h2>
      {!carts?.length ? (
        <p className="py-5 text-center text-texts-300">your cart is empty</p>
      ) : (
        <div className=" space-y-5">
          <ul className="space-y-3 px-3">
            {carts?.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="flex justify-center px-3">
            <Button className="h-8 bg-button-200 font-semibold">
              checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
