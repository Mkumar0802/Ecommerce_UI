import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css' // tailwind
import Home from "./components/Home";
import LoginPage from "./components/admin/LoginPage"
import Food from "./components/Food";
import Cartbag from "./components/Cartbag";
import Registerpage from "./components/admin/RegistrationPage";
import Footer from "./components/Footer";
import Light from "./components/Light";
import Toy from "./components/Toy";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <BrowserRouter>



        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Registerpage />} />
          <Route path="home" element={<Home />} />
          <Route path="food" element={<Food />} />
          <Route path="light" element={<Light />} />
          <Route path="cartbag" element={<Cartbag />} />
          <Route path="toys" element={<Toy />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p className="text-white text-2xl">Page under Construction!</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
