import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul className="navlinks text-texts-300 md:flex gap-5 text-sm capitalize hidden ">
      <li>
        <NavLink to="/">collection</NavLink>
      </li>

      <li>
        <NavLink to="/">men</NavLink>
      </li>
      <li>
        <NavLink to="/">women</NavLink>
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
