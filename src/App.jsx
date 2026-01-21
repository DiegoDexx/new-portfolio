import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoadingPage from "./pages/loadpage";

//CONFIGURA UN GRID DE 12 COLUMNAS PARA EL LAYOUT GENERAL
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300">
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-white dark:bg-[#0b1b3a] grid place-items-center pointer-events-none">
          <LoadingPage />
        </div>
      )}
      <Routes>  
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
