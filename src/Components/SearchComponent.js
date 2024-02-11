import React from 'react';
import '../Style.css';
import SearchIcon from '@mui/icons-material/Search';
function SearchComponent() {
  return (
    <div className='SearchComponent'>
        <input type='text' className='search-input' placeholder='Search' />
        <SearchIcon style={{ color: '#00000085' }} />
    </div>
  )
}

export default SearchComponent;