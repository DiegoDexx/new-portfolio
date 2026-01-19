import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ChangeTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);




  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-10 h-10 rounded-xl
                 bg-black/5 hover:bg-black/10 border border-black/10
                 dark:bg-white/10 dark:hover:bg-white/15 dark:border-white/10
                 flex items-center justify-center transition cursor-pointer"
      title="Cambiar tema"
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? (
        <FaMoon className="text-black dark:text-white" />
      ) : (
        <FaSun className="text-black dark:text-white" />
      )}
    </button>
  );
}
