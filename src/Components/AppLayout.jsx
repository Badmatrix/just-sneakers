import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="md:mx-auto md:w-[84%]">
      <Navbar />
      <div className="my-5 md:mt-10 lg:mt-14 md:mx-3">
        <Outlet />
      </div>
    </div>
  );
}
