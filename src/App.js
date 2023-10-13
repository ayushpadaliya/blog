import './App.css';
import Nav from './Blog/Components/Homepage/Nav';
import Sign from './Blog/Components/Homepage/Sign';

import Index from './Blog/Components/Homepage/Index';
import Login from './Blog/Components/Homepage/Login';
import MainApp from './Blog/Components/Landingpage/MainApp';
import ArticleList from './Blog/Components/Landingpage/ArticleList';
import Article from './Blog/Components/Landingpage/Article';
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate a successful login
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {/* Layout with Nav */}
        <Route
          path="/"
          element={
            <div>
              <Nav />
              <Outlet /> {/* Outlet for nested routes */}
            </div>
          }
        >
          <Route path="/" element={<Index />} />
          <Route path='/write' element={<Login />} />
          <Route exact path='/articles-list' element={<ArticleList />} />
          <Route exact path='/article/:name' element={<Article />} />
          <Route path='/Login' element={<Login onLogin={handleLogin} />} />
          <Route path='/sign' element={<Sign />} />
        </Route>
        
        {/* Layout without Nav (Landing Page) */}
        <Route path='/Loadingpage' element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;
