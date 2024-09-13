import AvartarCartIcon from "../ui/AvartarCartIcon";
import Logo from "../ui/Logo";
import NavLinks from "../ui/NavLinks";
      


export default function Navbar() {
  return (
    <nav className="border-texts-200 flex items-center justify-between md:border-b py-5 px-2 md:px-0">
      <div className="flex items-center gap-7">
        <Logo />
        <NavLinks />
      </div>
      <AvartarCartIcon />
    </nav>
  );
}
