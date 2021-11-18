import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cartpage from "./pages/CartPage"
import Homepage from './pages/Home'
import "./App.css"
import { ShoppingCartContextProvider } from './context/ShoppingCartContext';

function App() {

  return (
    <ShoppingCartContextProvider>
    <Router>
      <Routes>
        <Route path="/cart" element={<Cartpage/>}/>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </Router>
    </ShoppingCartContextProvider>
  );
}

export default App;
