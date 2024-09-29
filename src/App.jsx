import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AppLayout from "./Components/AppLayout";
import NotFound from "./components/NotFound";
import { useState } from "react";
import sneakers from "./products";

export default function App() {
  const [display, setDisplay] = useState(sneakers.at(0));
  // const [modalOverlay, setModalOverlay] = useState(false);

  function handleSetDisplay(id) {
    setDisplay(sneakers.at(id - 1));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AppLayout display={display} />}>
          <Route
            index
            path="/"
            element={
              <HomePage display={display} handleSetDisplay={handleSetDisplay} />
            }
          />
          <Route index path="/about" element={<About />} />
          <Route index path="/contact" element={<Contact />} />
          <Route index path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
