import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";
import s from "./Searchform.module.css";
export default function Searchform({ onSubmit }) {
  const [name, setName] = useState("");
  const onChengeValue = (e) => {
    const { value } = e.currentTarget;
    setName(value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(name);
  };

  return (
    <form className={s.Form} onSubmit={handleSubmit}>
      <button
        aria-label="Search button"
        type="submit"
        className={s.Form__Button}
        disabled={name === ""}
      >
        <FaSearch size="2em" fill="#ccc" className={s.Button__icon} />
      </button>

      <input
        className={s.Form__Input}
        onChange={onChengeValue}
        value={name}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
}
Searchform.propTypes = {
  onSubmit: PropTypes.func,
};
