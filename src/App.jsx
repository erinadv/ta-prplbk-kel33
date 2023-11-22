import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import LoginForm from "./pages/LoginForm";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import DetailCharacter from "./pages/Character";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    setLoggedIn(false);
  };

  const handleLogin = (username, password) => {
    // validasi username dan password
    if (username === 'admin' && password === 'admin123') {
      setLoggedIn(true);
    }
    else {
      setLoggedIn(false);
    }
  };

  return (
    <Router>
    <div>

        <ul>
          {loggedIn ? (
            <nav >
              <Link to="/characters" style={{ margin: 5 }}>Home</Link>
              <Link to="/profile" style={{ margin: 5 }}>Profile</Link>
              <button onClick={logout}>Logout</button>
            </nav>
          ) : null}
        </ul>

      <Routes>
        <Route exact path="/" element={loggedIn ? <Navigate to="/characters" /> : <LoginForm onLogin={handleLogin} />} />
        
        <Route path="/characters" element={loggedIn ? <HomePage /> : <Navigate to="/" />} />
        <Route path="/characters/:id" element={loggedIn ? <DetailCharacter /> : <Navigate to="/" />} />
        <Route path="/profile" element={loggedIn ? <ProfilePage /> : <Navigate to="/" />} />
      </Routes>
    </div>
    </Router>
  );
};


export default App;
