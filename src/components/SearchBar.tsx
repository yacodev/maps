import React, { useRef, ChangeEvent, useContext } from 'react';
import { PlacesContext } from '../context';
import { SearchResult } from './index';

export const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout>();
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(e.target.value);
    }, 500);
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='Search...'
        className='form-control'
        onChange={onQueryChange}
      />
      <SearchResult />
    </div>
  );
};
