import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";


export default function App() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
