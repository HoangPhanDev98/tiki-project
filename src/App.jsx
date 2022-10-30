import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeFeature from "./features/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<HomeFeature />} />
      </Routes>
    </div>
  );
}

export default App;
