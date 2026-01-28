import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home/HomePage';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App;
