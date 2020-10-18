import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UseStorage } from './UseContext';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import NotFound from './Components/NotFound';
import ProtectedRoute from './Components/Helper/ProtectedRoute';


function App() {
  return (
    <div >
      <BrowserRouter>
        <UseStorage>
          <Header />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login/*" element={<Login />} />
            <ProtectedRoute path="/user/*" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </UseStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
