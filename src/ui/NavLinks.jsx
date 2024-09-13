import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul className="navlinks text-texts-300 hidden gap-5 text-sm capitalize md:flex">
      <li>
        <NavLink to="/collection">collection</NavLink>
      </li>

      <li>
        <NavLink to="/men">men</NavLink>
      </li>
      <li>
        <NavLink to="/women">women</NavLink>
      </li>
      <li>
        <NavLink to="/about">about</NavLink>
      </li>
      <li>
        <NavLink to="/contact">contact</NavLink>
      </li>
    </ul>
  );
}
