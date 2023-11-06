import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Demo from './components/Demo';

function App() {
  return (
    
      <div className="w-full">
              <BrowserRouter>
              <Navbar>
                <Routes>
                  <Route path="/get-in-touch" element={<Demo />} />
                </Routes>
              </Navbar>
            </BrowserRouter>  
        </div> 
  );
}

export default App;








     