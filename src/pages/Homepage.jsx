/* eslint-disable react/prop-types */
import SneakersDetail from "../Components/SneakersDetail";
import SneakersImages from "../components/SneakersImages";

export default function Homepage({
  display,
  handleSetDisplay,
  dispatch,
  carts,
}) {
  return (
    <div className="relative mx-auto my-5 flex flex-col items-center justify-around gap-10 px-2 py-3 md:my-10 md:flex-row xl:w-[85%]">
      <SneakersImages display={display} handleSetDisplay={handleSetDisplay} />
      <SneakersDetail display={display} dispatch={dispatch} carts={carts} />
    </div>
  );
}
