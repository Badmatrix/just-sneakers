/* eslint-disable react/prop-types */
import ButtonsContainer from "../components/ButtonsContainer";

export default function SneakersDetail({ display }) {
  const { title, text, price } = display;
  return (
    <section className=" py-5 flex justify-center w-5/6 mx-auto">
      <div className="md:w-2/3 lg:w-1/2 space-y-8">
        <div className="space-y-5">
          <header className="space-y-3">
            <h6 className="font-Kumbh text-[11px] uppercase tracking-wider text-texts-300">
              sneaker company
            </h6>
            <h2 className="text-3xl font-bold capitalize">{title}</h2>
          </header>
          <p className="text-xs text-texts-200">{text}</p>
          <div className="flex items-center justify-between md:block">
            <div className="flex items-baseline gap-3 font-bold text-texts-400">
              <h3 className="md:text-xl text-lg">$125.00</h3>
              <span className="rounded-md bg-black px-1 sm:px-2 py-1 text-xs font-normal tracking-wide text-texts-100">
                50%
              </span>
            </div>
            <h6 className="md:text-base text-sm font-semibold text-texts-300 line-through">
              {price}.00
            </h6>
          </div>
        </div>
        <ButtonsContainer />
      </div>
    </section>
  );
}
