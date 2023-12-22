import ExampleAnimation from "./components/ExampleAnimation";
import ProductPage from "./components/product-page/ProductPage";
import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ExampleAnimation path="../public/animations/bracelet_animation.json" />
        }
      />
      <Route path="/product-page" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
