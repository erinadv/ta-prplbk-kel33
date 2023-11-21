import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Route, Link } from "react-router-dom";

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
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
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
        alert(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`} onClick={() => handleCharacterClick(character)}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Character = () => {
  const { match: { params: { id } } } = React.useContext(RouteContext);
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
      <p>
        {character.occupation}
      </p>
      <p>
        {character.age}
      </p>
      <p>
        {character.status}
      </p>
    </div>
  );
};

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
  </nav>
);

const Profile = () => (
  <div>
    <h1>Hello, World!</h1>
  </div>
);

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
// ReactDOM.render(<Login />, document.getElementById("root"));