import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
      <div className="flex gap-2 items-center mx-2 md:mx-0">
        <RxHamburgerMenu className="text-texts-400 text-3xl md:hidden hover:text-black transition-colors ease-in duration-300 cursor-pointer" />

        <Link to="/">
          <h1 className="text-texts-400 text-2xl font-bold">sneakers</h1>
        </Link>
      </div>
    );
}
