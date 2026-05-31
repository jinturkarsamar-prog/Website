import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Manufacturing from "./pages/Manufacturing";
import Distribution from "./pages/Distribution";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="manufacturing" element={<Manufacturing />} />
          <Route path="distribution" element={<Distribution />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
