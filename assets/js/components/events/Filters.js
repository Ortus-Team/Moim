import React from 'react';

export class Filters extends React.Component {
  render() {
    return (
      <div className='dirFiltersWrapper'>
        <div className='eventsDirFiltersContainer'>
          {/* Filters */}
          <div className='dirFilters'>
            <div className="dirGridDrop">
              <button className="dropbtn">Grid</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dirListDrop">
              <button className="dropbtn">List</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="text"><span># of Groups</span></div>
          </div>



          {/* Sort by */}
          <div className='dirSort'>
            <div className="text"><span>Sort by:</span></div>
            <div className="dirSortDrop">
              <button className="dropbtn">Category</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
};