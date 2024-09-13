/* eslint-disable react/prop-types */
import SneakersItemImage from "./SneakersItemImage";
import products from "../products";

export default function Sneakers({ displayProduct, handleSneakerClick }) {
  return (
    <div className="w-1/2 space-y-5">
      <figure className="overflow-hidden rounded-2xl">
        <img src={displayProduct.image} alt="" className="w-full" />
      </figure>

      <ul className="sneaker-list flex gap-4">
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
