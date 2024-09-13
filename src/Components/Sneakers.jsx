/* eslint-disable react/prop-types */
import SneakersItemImage from "./SneakersItemImage";
import products from "../products";

export default function Sneakers({ displayProduct, handleSneakerClick }) {
  return (
    <div className="col-span-1 space-y-5 md:translate-x-10">
      <figure className="overflow-hidden md:rounded-2xl">
        <img src={displayProduct.image} alt="" className="w-full" />
      </figure>

      <ul className="sneaker-list hidden md:flex md:gap-2 lg:gap-3">
        {products.map((item) => (
          <SneakersItemImage
            key={item.id}
            item={item}
            handleSneakerClick={handleSneakerClick}
          />
        ))}
      </ul>
    </div>
  );
}
