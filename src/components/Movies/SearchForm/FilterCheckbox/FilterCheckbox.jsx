import React, { useEffect, useState } from "react";

export default function FilterCheckbox({ title, setIsShot, isLocationMovies }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    setIsShot(newIsChecked);
    isLocationMovies &&
      localStorage.setItem("isShot", JSON.stringify(newIsChecked));
  }

  useEffect(() => {
    isLocationMovies &&
      setIsChecked(localStorage.isShot === "true" ? true : false);
  }, [isLocationMovies, setIsShot]);

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__block">
        <input
          className="filter-checkbox__block-input"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          aria-label="чекбокс"
        />
        <span className="filter-checkbox__block-slider"></span>
      </label>
      <label className="filter-checkbox__title">{title}</label>
    </div>
  );
}
