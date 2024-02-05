import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GalleryView from "./components/GalleryView";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToHashElement from "./ScrollToHashElement";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToHashElement />
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<GalleryView />} />
        <Route exact path="/contact" element={<ContactForm />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    <Footer/>

    </BrowserRouter>
  );
};

export default App;
