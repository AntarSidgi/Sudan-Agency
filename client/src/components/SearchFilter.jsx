import React, { useEffect, useState } from "react";
// icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// use Navigation hook
import { useNavigate } from "react-router-dom";

const SearchFilter = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    // clear timeout event
    return () => clearTimeout(timeout);
  });

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(searchTerm);
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector("input").value = "";
      setSearchTerm("");
    } else {
      // if input is empty out an animation to term
      setIsAnimating(true);
      //console.log("please search for something");
    }
  };

  return (
    
    <form
      onSubmit={handleSubmit}
      className={`${
        isAnimating ? "animate-shake" : "animate-none"
      } w-full relative`}
    >
      {/** search */}
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <button className="cursor-pointer pointer-events-auto absolute inset-y-0 right-0 flex items-center pr-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </button>
                    <input
                    onChange={handleSearchInput}
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-transparent bg-gray-100 py-2 pr-10 pl-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-accent focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="إبحث عن ..."
                      type="search"
                    />
                  </div>
                </div>
              </div>
      {/** search end */}
    </form>
  );
};

export default SearchFilter;
