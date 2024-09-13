/* eslint-disable react/prop-types */

export default function SneakersDetail({ displayProduct }) {
    const { title, text, price } = displayProduct;
    const discountPrice=''
  return (
    <div className="py-3 mx-3">
      <div className=" w-3/5 px-5">
        <p className="text-xs uppercase my-2">sneaker company</p>
        <h1 className="capitalize font-bold text-3xl text-texts-400 mb-7">{title}</h1>
        <p className=" text-xs leading-5">{text}</p>
        <div className="flex items-center gap-3 my-4">
          <div className=" space-y-2">
            <h2 className=" font-bold text-base text-black">${discountPrice ||125.00}.00</h2>
            <h3 className="text-xs line-through font-semibold">${price}.00</h3>
          </div>
          <h6 className="h-6 rounded-md bg-texts-400 text-white px-2 py-1 text-xs font-semibold">
            50%
          </h6>
        </div>
      </div>
    </div>
  );
}
