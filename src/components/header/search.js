"use client";
import { HiMagnifyingGlass } from "react-icons/hi2";
import SearchItem from "./search-item";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { searchMovies } from "@/src/lib/movies";

const HeaderSearch = ({ isOpen, onChangePathname }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await searchMovies({
        query: searchQuery,
      });

      setSearchResults(results);
    };
    if (searchQuery.length > 2) {
      fetchData();
    } else {
      setSearchResults(null);
    }
  }, [searchQuery]);

  const search = useRef();
  const router = useRouter();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = search.current.value;
    if (query.length) {
      router.push(`/search/${query}`);
      setSearchResults(null);
    }
  };

  const searchBox = useRef();
  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!searchBox.current?.contains(event.target)) {
        setSearchResults(null);
      }
    };
    window.addEventListener("mousedown", handleOutSideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [searchBox]);

  const pathname = usePathname();
  useEffect(() => {
    setSearchResults(null);
    search.current.value = "";
    onChangePathname();
  }, [pathname]);

  let classes;
  if (isOpen) {
    classes =
      "absolute md:relative md:block w-full left-0 p-2 top-full bg-color2 z-20";
    setTimeout(() => {
      search.current.focus();
    }, 100);
  } else {
    classes = "hidden md:block relative";
  }

  return (
    <div className={classes} ref={searchBox}>
      <form onSubmit={handleSearchSubmit}>
        <div className="flex border items-center bg-color3 rounded-md py-2 px-1 text-color2">
          <input
            type="text"
            name="search"
            ref={search}
            className="w-full md:w-72 px-2"
            onChange={handleSearch}
          />
          <button type="submit">
            <HiMagnifyingGlass className="text-color2" size={26} />
          </button>
        </div>
      </form>
      {searchResults && (
        <div className="absolute top-full w-full bg-color3 z-10 left-0 max-h-[400px] overflow-auto">
          {searchResults.map((item) => (
            <SearchItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
