import sneakers from "../products";
import SneakersListImages from "./SneakersListImages";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";


/* eslint-disable react/prop-types */
export default function SneakersImages({ display, handleSetDisplay }) {
  const { title, image } = display;
  const images = sneakers.map((item) => Object.assign({"url":item.image}));
  
  return (
    <section className="space-y-5">
      <div className="hidden w-full overflow-hidden rounded-md md:block">
        <img src={image} alt={title} />
      </div>
      <div className="md:hidden rounded-md overflow-hidden">
        <Slider imageList={images} showDotControls={false} autoPlay={false} />
      </div>

      <ul className="hidden gap-3 md:flex">
        {sneakers.map((item) => (
          <SneakersListImages
            key={item.id}
            item={item}
            handleSetDisplay={handleSetDisplay}
          />
        ))}
      </ul>
    </section>
  );
}
