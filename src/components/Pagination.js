import React from 'react';

import './Pagination.css'

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? (offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <ul className="flex justify-center p-8 pagination">
      <li>
        <button
          className="btn"
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          Previous
        </button>
      </li>
      {Array.from({ length: MAX_ITEMS })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => setOffset((page - 1) * limit)}
              className={page === current ? 'pagination__item--active' : null}
            >
              {page}
            </button>
          </li>
        ))}
      <li>
        <button
          className="btn"
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          Next
        </button>
      </li>
    </ul>
  )
}

export default Pagination;