import { BsCart3 } from "react-icons/bs";

export default function AvartarCartIcon() {
  return (
    <div className="flex items-center gap-7">
      <div className=" relative">
        <BsCart3 className="relative text-xl" />
        <p className="bg-button-200 absolute rounded-full text-button-100 px-1 aspect-square text-xs -top-3 -right-3 font-semibold">3</p>
      </div>
      <div className="border-button-200 rounded-full border-2">
        <img
          src="/images/image-avatar.png"
          alt="avartar"
          className="w-8"
        />
      </div>
    </div>
  );
}
