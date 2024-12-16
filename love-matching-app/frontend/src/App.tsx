import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './HomePage/index';
import Register from './HomePage/Register';
import Login from './HomePage/Login';
import Profile from './HomePage/Profile';
import './styles.css';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <Home />
  </Router>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <Link to="/" className="nav-link">首页</Link>
          <Link to="/register" className="nav-link">注册</Link>
          <Link to="/login" className="nav-link">登录</Link>
          <Link to="/profile" className="nav-link">个人资料</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 