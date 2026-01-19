import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";


export default function App() {
  return (
      <div className="min-h-screen bg-light text-black dark:bg-dark dark:text-white">



    <Routes>  

        <Route path="/" element={<Home />} />
  
  


    </Routes>
  
    </div>
  );
}
