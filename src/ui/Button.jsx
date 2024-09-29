/* eslint-disable react/prop-types */

export default function Button({ children, className }) {
  return (
    <button
      className={`flex h-12 w-full items-center justify-center rounded-md px-3 py-2 text-center text-texts-400 shadow-md transition duration-300 ease-linear ${className}`}
    >
      {children}
    </button>
  );
}
