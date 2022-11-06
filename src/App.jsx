import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeFeature from "./features/HomePage";
import ProductFeature from "./features/Product";
import CartFeature from "./features/Cart";
import CheckoutFeature from "./features/Checkout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<HomeFeature />} />
        <Route path="san-pham/*" element={<ProductFeature />} />
        <Route path="gio-hang" element={<CartFeature />} />
        <Route path="dat-hang-thanh-cong" element={<CheckoutFeature />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
