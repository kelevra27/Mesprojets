import React, { useState, } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const elements = form.elements;
    const username = elements.username.value;
    const password = elements.password.value;

    if (username === 'test' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      setErrorMessage('Erreur de connexion');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/success" />
            ) : (
              <form onSubmit={handleLogin}>
                <label htmlFor="username">Nom d'utilisateur :</label>
                <input type="text" name="username" />
                <br />
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" name="password" />
                <br />
                <button type="submit">Se connecter</button>
                {errorMessage && <p>{errorMessage}</p>}
              </form>
            )
          }
        />
        <Route path="/success" element={
        <div>
          <h1>Succès de la connexion</h1>
          <Link to="/">Se déconnecter</Link>
        </div>
        }/>
      </Routes>
    </Router>
  );
}

export default App;

