import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Twitch from "./routes/twitch";
import Login from "./routes/login";
import Register from './routes/register';
import Home from './routes/home'


function App() {
  return (
  <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="getToken" element={<Twitch />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
      </Routes>
  </BrowserRouter>
      </header>
    </div>


  );
}

export default App;