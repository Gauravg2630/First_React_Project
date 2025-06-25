import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SidebarLeft from './Components/Sidebar';
import Feed from './Components/Feed';
import Suggestions from './Components/Suggestions';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import Stories from './Components/Stories';
import Reels from './Components/Reels';

function Layout() {
  return (
    <div className="d-flex main-body">
      <SidebarLeft />
      <Feed />
      <Suggestions />
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  const noLayoutRoutes = ['/login', '/register'];

  return (
    <>
      {!noLayoutRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/reels" element={<Reels />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
