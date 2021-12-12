import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const refContainer = React.useRef(null);

  const handleChange = () => {
    setSearchTerm(refContainer.current.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="name">search here</label>
      <input
        type="text"
        id="name"
        name="name"
        ref={refContainer}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchForm;
