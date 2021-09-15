import React, { useState } from 'react';
import useDebounce from './useDebounce';

const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value)
  }

  return (
    <div className="justify-center align-center flex mt-8 mb-8 relative">
      <input
        className="border-2 p-2 rounded w-full border-gray-400"
        type="search"
        value={displayValue}
        onChange={handleChange} />
    </div>
  )
}

export default SearchInput