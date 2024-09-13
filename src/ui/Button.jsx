/* eslint-disable react/prop-types */

export default function Button({ children, className }) {
  return (
    <button className={`rounded-md px-3 py-2 ${className}`}>{children}</button>
  );
}
