import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import './App.css'

const Login = ({ onLogin }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>

      {error && <p>{error}</p>}
    </div>
  );
};

const Home = () => {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://bobsburgers-api.herokuapp.com/characters")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
          <Link to={`/characters/${character.id}`}>{character.name}</Link>
        </li>
        ))}
      </ul>
    </div>
  );
};

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = React.useState({});

  React.useEffect(() => {
    axios
      .get(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} style={{ width: 100, height: 100, resizeMode:'contain' }}/>
      <p>{character.gender}</p>
      <p>{character.age}</p>
      <p>{character.voicedBy}</p>
    </div>
  );
};

const Navbar = () => (
  <nav  >
    <Link to="/" style={{ margin: 10 }}>Home</Link>
    <Link to="/profile">Profile</Link>
  </nav>
);

const Profile = () => (
  <div>
    <h1>Hello, Kelompok 33!</h1>
    <p>Erina Devianti</p>
    <p>Didi Suhardi</p>
    <p>Alya Adelia Mumtaz</p>
    <p>Ida Bagus Putu Putra Manuaba</p>
  </div>
);

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <div>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/characters/:id" exact element={<Character />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      </>
      )}
      
    </div>
    </Router>
    
  );
};


export default App;
