import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

export default function ChangeTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="
        theme-toggle
        w-10 h-10 rounded-xl
        flex items-center justify-center
        transition cursor-pointer
      "
      title="Cambiar tema"
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}
