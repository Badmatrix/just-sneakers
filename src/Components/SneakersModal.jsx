/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

import SneakersImages from "./SneakersImages";

export default function SneakersModal({}) {
  return (
    <div
      className={`absolute left-0 top-0 h-full w-full bg-black/70`}
    >
     <SneakersImages></SneakersImages>
    </div>
  );
}
