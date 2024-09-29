import sneakers from "../products";
import SneakersListImages from "./SneakersListImages";

/* eslint-disable react/prop-types */
export default function SneakersImages({ display, handleSetDisplay }) {
  const { title, image } = display;
  return (
    <section className="space-y-5 md:w-1/2">
      <div className="w-full overflow-hidden rounded-md">
        <img src={image} alt={title} />
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
