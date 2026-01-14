import "./styles/App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import About from "./pages/about";
import Charism from "./pages/charism";
import Event from "./pages/events";
import Donate from "./pages/donate";
import Contact from "./pages/contact";
import Ministeries from "./pages/ministeries";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/charisma" element={<Charism />} />
          <Route path="/events" element={<Event />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ministries" element={<Ministeries />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
