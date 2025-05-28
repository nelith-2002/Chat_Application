import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import bgImage from './assets/bgImage.svg'; 
function App() {
  return (
    <div className="bg-[url('/src/assets/bgImage.svg')] bg-contain min-h-screen">
    
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
