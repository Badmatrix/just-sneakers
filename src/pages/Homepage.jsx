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
    <main className="mx-auto w-full md:grid md:grid-cols-3  md:gap-5 lg:gap-14 items-center space-y-5 px-3 md:px-5 ">
      <Sneakers
        displayProduct={displayProduct}
        handleSneakerClick={handleSneakerClick}
      />
      <SneakersDetail displayProduct={displayProduct} />
    </main>
  );
}
