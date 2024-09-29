/* eslint-disable react/prop-types */

export default function SneakersListImages({ item, handleSetDisplay }) {
  const { id, title, thumbnail } = item;
  return (
    <li
      className="overflow-hidden rounded-md hover:border-2 border-button-200 "
      onClick={() => handleSetDisplay(id)}
    >
      <img src={thumbnail} alt={title} title={title} className="" />
    </li>
  );
}
