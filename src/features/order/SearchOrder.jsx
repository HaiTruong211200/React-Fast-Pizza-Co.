import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="sm:w-64 w-28 px-4 py-2 text-sm 
        rounded-full bg-yellow-200 sm:focus:w-72 transition-all
        duration-300 focus:ring focus:outline-none
        focus:ring-yellow-500 focus:ring-opacity-50"
        placeholder="Search order ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}
