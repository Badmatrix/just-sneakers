import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AppLayout from "./Components/AppLayout";
import NotFound from "./components/NotFound";
import { useReducer, useState } from "react";
import sneakers from "./products";

const initialState = {
  products: [],
  carts: [],
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "addCart":
      return { ...state, carts: [...state.carts, action.payload] };
    case "deleteCart":
      return { ...state, carts: action.payload };
    case "clearCart":
      return { ...state, carts: [] };
    case "updateCart":
      return {
        ...state,
        carts: [...state.carts],
      };

    default:
      throw new Error("unknown action " + action.type);
  }
}

export default function App() {
  const [{ carts }, dispatch] = useReducer(reducer, initialState);
  const [display, setDisplay] = useState(sneakers.at(0));
  const [modalOverlay, setModalOverlay] = useState(false);

  function handleSetDisplay(id) {
    setDisplay(sneakers.at(id - 1));
    setModalOverlay(true);
  }
  function handleModalOverlay() {
    setModalOverlay((open) => !open);
    setModalOverlay(false);
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AppLayout
              display={display}
              carts={carts}
              dispatch={dispatch}
              handleSetDisplay={handleSetDisplay}
              handleModalOverlay={handleModalOverlay}
              modalOverlay={modalOverlay}
            />
            
          }
        >
          <Route
            index
            element={
              <HomePage
                display={display}
                handleSetDisplay={handleSetDisplay}
                carts={carts}
                dispatch={dispatch}
              />
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
