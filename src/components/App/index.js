import Header from "../Header";
import Home from "../Pages/Home";
import Cart from "../Pages/cart/Cart";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
  
    </div>
  );
}

export default App;
