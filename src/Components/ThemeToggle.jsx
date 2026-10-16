import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const getInitialTheme = () => {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
};

const ThemeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // localStorage unavailable (private mode) — theme just won't persist
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`theme-toggle ${className}`}
    >
      {theme === "dark" ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
    </button>
  );
};

export default ThemeToggle;
