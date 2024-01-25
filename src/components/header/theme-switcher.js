"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="flex">
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <HiOutlineSun size={26} />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <HiOutlineMoon size={26} />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
