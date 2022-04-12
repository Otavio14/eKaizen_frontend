import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Pets from "./pages/Pets";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Index />} />
        <Route path="/" element={<Index />} />
        <Route path="/pets" element={<Pets />} />
      </Routes>
    </Router>
  );
}
