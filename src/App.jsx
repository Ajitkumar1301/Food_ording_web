import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage"; // Ensure this file exists and has the component
import RestaurantMenu from "./Components/RestaurantMenu";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
