import React, { useEffect, useState } from "react";

export default function FilterCheckbox({
  title,
  setIsShotMovie,
  isLocationMovies,
}) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    setIsShotMovie(newIsChecked);
    isLocationMovies && localStorage.setItem("isShotMovie", newIsChecked);
  }

  useEffect(() => {
    isLocationMovies &&
      setIsChecked(localStorage.isShotMovie === "true" ? true : false);
  }, [isLocationMovies, setIsShotMovie]);

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
