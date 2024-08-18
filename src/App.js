import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import NotFound from "./components/not-found/NotFound";
import SingleMovie from "./components/singleMovie/SingleMovie";
import Favorites from "./components/favorites/Favorites";
import { LanguageContext } from "./Context/LanguageContext";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("EN");
  return (
    <div className="app">
      {/* <div>ll {fav.length}</div>
      <button onClick={() => dispatch(addToFavorites({ name: "ali" }))}>
        ADD
      </button> */}
      <BrowserRouter>
        <LanguageContext.Provider value={{ lang, setLang }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/movies/:id" element={<SingleMovie />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </LanguageContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
