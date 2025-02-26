import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type }) {
  const base = `bg-yellow-400 uppercase
    font-semibold text-stone-800  
    inline-block rounded-full hover:bg-yellow-300
    transition-colors duration-300 focus:outline-none
    focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2
   disabled:cursor-not-allowed`;

  const styles = {
    primary: base + " py-3 px-4 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-sm",
    secondary: `uppercase border-5 border-stone-300 font-semibold text-stone-400  
    inline-block rounded-full
    hover:text-stone-800 hover:bg-stone-300
    transition-colors duration-300 focus:outline-none
    focus:ring focus:ring-stone-300 focus:bg-stone-300 focus:ring-offset-2
   disabled:cursor-not-allowed py-3 px-4 md:px-6 md:py-4`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
