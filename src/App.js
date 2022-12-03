import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProductDetail from "./Components/ProductDetail";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<ProductList />} />
          <Route path="product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
