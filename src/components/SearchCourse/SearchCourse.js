import React from 'react';

const SearchCourse = () => {
    return (
      <div className="input-group rounded learn-page-container">
        <div className="w-50 text-center">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
        <span className="input-group-text border-0">Search</span>
      </div>
    );
};

export default SearchCourse;