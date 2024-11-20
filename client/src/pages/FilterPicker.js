import React, { useState } from "react";

const FilterPicker = ({ handleFilter }) => {
  const [filterCriteria, setFilterCriteria] = useState("");

  const handleInputChange = (e) => {
    setFilterCriteria(e.target.value);
  };

  const handleFilterClick = () => {
    handleFilter(filterCriteria);
  };

  return (
    <div className="filter-picker">
      <input
        type="text"
        placeholder="Filter Doctors"
        value={filterCriteria}
        onChange={handleInputChange}
      />
      <button onClick={handleFilterClick}>Filter</button>
    </div>
  );
};

export default FilterPicker;
