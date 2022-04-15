import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GoUp from "./components/GoUp";
import Index from "./pages/Index";
import Pets from "./pages/Pets";

export default function App() {
  return (
    <Router>
      <Navbar />
      <GoUp />
      <Routes>
        <Route path="*" element={<Index />} />
        <Route path="/" element={<Index />} />
        <Route path="/pets" element={<Pets />} />
      </Routes>
    </Router>
  );
}
