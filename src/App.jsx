import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeFeature from "./features/HomePage";
import ProductFeature from "./features/Product";
import CartFeature from "./features/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<HomeFeature />} />
        <Route path="san-pham/*" element={<ProductFeature />} />
        <Route path="gio-hang" element={<CartFeature />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
