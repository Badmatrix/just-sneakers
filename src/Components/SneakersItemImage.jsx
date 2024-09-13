/* eslint-disable react/prop-types */
export default function SneakersItemImage({ handleSneakerClick, item }) {
  // console.log(item)
  const { id, thumbnail, title } = item;
  return (
    <li
      className="border-button-200 cursor-pointer overflow-hidden md:rounded-md xl:rounded-lg transition-all duration-300 ease-in-out hover:border-2"
      onClick={() => handleSneakerClick(id)}
    >
      <img src={thumbnail} alt={title} />
    </li>
  );
}
