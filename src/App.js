import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/competences" exact element={<Knowledges />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/contact" exact element={<Contact />} />
          {/* * = si jamais l'url ne correspond à rien */}
          <Route path="*" exact element={<NotFound />} />
          {/* <Route element={<NotFound/>} /> */}
        </Routes>
      </BrowserRouter>
  );
};

export default App;
