import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const refContainer = React.useRef(null);

  const handleChange = () => {
    setSearchTerm(refContainer.current.value);
  };

  React.useEffect(() => {
    refContainer.current.focus();
  }, []);

  return (
    <section className="section search">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-control">
          <label htmlFor="name">search here</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={refContainer}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
