import React from 'react';

const Pagination = ({ page, setPage, totalPages }) => {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div>
      <button onClick={handlePrev} disabled={page === 1}>Previous</button>
      <span>{page} of {totalPages}</span>
      <button onClick={handleNext} disabled={page === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;