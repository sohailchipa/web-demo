import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Error from './pages/error';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;

