/* eslint-disable react/prop-types */
import ButtonsContainer from "../components/ButtonsContainer";

export default function SneakersDetail({ display, dispatch, carts }) {
  // console.log(display)
  const { id, title, thumbnail, text, price } = display;
  const exist = carts?.some((item) => Number(item.id) === Number(id));
  const discount = (price / 100) * 50;
  const item = carts.find((item) => item.id === id);

  function increaseCartItem(id) {
    if (!exist) handleAddtoCart(id);
    if (exist) {
      dispatch({
        type: "updateCart",
        payload: { ...item, quantity: item.quantity++ },
      });
    }
  }
  function decreaseCartItem(id) {
    // const item = carts.find((item) => item.id === id);
    if (!exist) return;
    if (item?.quantity <= 1) {
      const del = carts.filter((item) => item.id !== id);
      dispatch({ type: "deleteCart", payload: del });
    }
    dispatch({
      type: "updateCart",
      payload: { ...item, quantity: item.quantity-- },
    });
  }

  function handleAddtoCart(id) {
    if (exist) return;
    const newItem = {
      id,
      title,
      thumbnail,
      price: discount,
      quantity: 1,
    };
    dispatch({ type: "addCart", payload: newItem });
  }

  return (
    <section className="mx-auto flex justify-center py-5">
      <div className="space-y-8 lg:w-2/3">
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
              <h3 className="text-lg md:text-xl">${discount}.00</h3>
              <span className="rounded-md bg-black px-1 py-1 text-xs font-normal tracking-wide text-texts-100 sm:px-2">
                50%
              </span>
            </div>
            <h6 className="text-sm font-semibold text-texts-300 line-through md:text-base">
              ${price}.00
            </h6>
          </div>
        </div>
        <ButtonsContainer
          handleAddtoCart={handleAddtoCart}
          decreaseCartItem={decreaseCartItem}
          increaseCartItem={increaseCartItem}
          display={display}
          item={item}
        />
      </div>
    </section>
  );
}
