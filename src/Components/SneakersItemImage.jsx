/* eslint-disable react/prop-types */
export default function SneakersItemImage({ handleSneakerClick, item }) {
  // console.log(item)
  const { id, thumbnail, title } = item;
  return (
    <li className=" hover:border-2 transition-all duration-300 ease-in-out border-button-200 cursor-pointer" onClick={() => handleSneakerClick(id)}>
      <img src={thumbnail} alt={title} />
    </li>
  );
}
