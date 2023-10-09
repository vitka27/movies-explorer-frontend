import React, { useState } from "react";

export default function FilterCheckbox({ title }) {
  const [isChecked, setIsChecked] = useState(false);
  function handleChange() {
    setIsChecked(!isChecked);
  }

  return (
    <section className="filter-checkbox">
      <label className="filter-checkbox__block">
        <input
          className="filter-checkbox__block-input"
          type="checkbox"
          value={isChecked}
          onChange={handleChange}
        />
        <div className="filter-checkbox__block-slider"></div>
      </label>
      <p className="filter-checkbox__title">{title}</p>
    </section>
  );
}
