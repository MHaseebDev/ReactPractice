import React, { useRef } from "react";
import { useKeyDown } from "../customHooks/useKeyDown";

const Search = ({ query, onSetQuery }) => {
  const inputEl = useRef(null);

  useKeyDown("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    onSetQuery("");
  });

  // Transforming this logic into custom hook so we can use it somewhere else also
  // useEffect(() => {
  //   const callback = (e) => {
  //     if (document.activeElement === inputEl.current) return;

  //     if (e.code === "Enter") {
  //       inputEl.current.focus();
  //       onSetQuery("");
  //     }
  //   };

  //   document.addEventListener("keydown", callback);

  //   return () => document.removeEventListener("keydown", callback);
  // }, [onSetQuery]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onSetQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export default Search;
