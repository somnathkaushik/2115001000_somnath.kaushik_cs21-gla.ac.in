import React from 'react';

const Sort = ({ setSort }) => {
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div>
      <select onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
      </select>
    </div>
  );
};

export default Sort;