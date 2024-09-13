import { useState } from "react";
import Sneakers from "../Components/Sneakers";
import products from "../products";
import SneakersDetail from "../Components/SneakersDetail";

export default function Homepage() {
  const [displayProduct, setDisplayProduct] = useState(products.at(0));

  function handleSneakerClick(id) {
    setDisplayProduct(products.at(id - 1));
  }
  // console.log(displayProduct);

  return (
    <main className="mx-5 flex gap-28">
      <Sneakers
        displayProduct={displayProduct}
        handleSneakerClick={handleSneakerClick}
      />
      <SneakersDetail displayProduct={displayProduct} />
    </main>
  );
}
