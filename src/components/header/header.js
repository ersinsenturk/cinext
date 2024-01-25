"use client";
import Link from "next/link";
import HeaderSearch from "./search";
import HeaderProfile from "./profile";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";

import { useState } from "react";
import ThemeSwitcher from "./theme-switcher";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState();
  const handleToogleSearch = () => {
    setIsOpen((prevVal) => !prevVal);
  };
  return (
    <header className="bg-color2 dark:bg-color1 text-color3 relative">
      <div className="container mx-auto py-4 px-2 md:px-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-serif font-extrabold text-3xl md:text-5xl"
        >
          ciNext
        </Link>
        <button className="md:hidden ml-auto mr-4" onClick={handleToogleSearch}>
          {isOpen ? <HiXMark size={26} /> : <HiMagnifyingGlass size={26} />}
        </button>
        <HeaderSearch
          isOpen={isOpen}
          onChangePathname={() => setIsOpen(false)}
        />
        <div className="flex gap-4">
          <HeaderProfile />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
