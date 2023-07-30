/** @format */

import React, { useCallback } from "react";
import { useState } from "react";

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState([]);

  const debounce = (func)=>{
    let timer;
    return function(...args){
        const context = this;
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            timer = null;
            func.apply(context,args);
        },1000);

    }
  }

  const handleSearch = (event) => {
    const { value } = event.target;
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => {
        setSearchValue(json.data.items);
      });
  };


  const opimizedHandleSearch = useCallback(debounce(handleSearch),[]);

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='max-w-md px-4 mx-auto mt-12'>
        <div className='relative'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
          <input
            type='text'
            placeholder='Search'
            className='w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600'
            onChange={opimizedHandleSearch}
          />
        </div>
        {searchValue?.map((item,i)=>{
            return(
                <div key = {i}>
                    <span className="flex p-2 border-2 mt-1 mb-1 rounded-md">{item.name}</span>
                </div>
            )
        })}
      </form>
    </div>
  );
};

export default SearchComponent;
