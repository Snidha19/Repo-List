import React, { useState } from "react";
import style from "./index.module.scss";
import { ImSearch } from "react-icons/im";

const SearchBar = ({ onClickSearchButton, ...props }) => {
  const [searchUserInput, setSearchUserInput] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchUserInput(value);
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") onClickSearchButton(searchUserInput);
        }}
        placeholder="Please enter username"
        value={searchUserInput}
        className={style.input_field}
      />
      <button
        className={style.search_button}
        onClick={() => onClickSearchButton(searchUserInput)}
      >
        <ImSearch />
      </button>
    </div>
  );
};

export default SearchBar;
