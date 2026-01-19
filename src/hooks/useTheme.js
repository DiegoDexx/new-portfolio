import { useContext } from "react";
import { ThemeProvider } from "../contexts/ThemeContext";

export const useTheme = () => useContext(ThemeProvider);
    