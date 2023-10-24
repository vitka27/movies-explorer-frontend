import React, { useState } from "react";

export default function FilterCheckbox({ title }) {
  const [isChecked, setIsChecked] = useState(false);
  function handleChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__block">
        <input
          className="filter-checkbox__block-input"
          type="checkbox"
          value={isChecked}
          onChange={handleChange}
          aria-label="чекбокс"
        />
        <span className="filter-checkbox__block-slider"></span>
      </label>
      <label className="filter-checkbox__title">{title}</label>
    </div>
  );
}
