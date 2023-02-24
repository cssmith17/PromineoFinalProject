import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import MGS1 from './components/MGS1';
import MGS2 from './components/MGS2';
import MGS3 from './components/MGS3';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/videogame/1" element={<MGS1 />} />

        <Route path="/videogame/2" element={<MGS2 />} />

        <Route path="/videogame/3" element={<MGS3 />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </NavBar>
    </BrowserRouter>

   </>
  );
}

export default App;
