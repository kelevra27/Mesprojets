import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './routes/register';
import Login from './routes/login';
import Home from './routes/home'
import Playstation from './routes/playstation';
import Xbox from './routes/xbox';
import Pc from './routes/pc';
import Switch from './routes/switch';
import Navbar from './components/navbar';
import Game from './routes/gameAdd';
import GameUp from './routes/gameUpdate';
import GameAll from './routes/gameAll';
import Admin from './routes/Admin';
import SettingAdmin from './routes/settingAdmin';
import Cart from './routes/cart'
import SettingsUser from './routes/settingsUser';
import { useState } from 'react';
import UserUpdate from './routes/userUpdate';
import UserDelete from './components/userDelete';
import EditRole from './components/editRole';
import Pay from './routes/pay';
import Success from './routes/success';
import OneGameView from './routes/oneGameView'

function App() {
  const [isConnected, setIsConnected] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar isConnected={isConnected} />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="games/all" element={<GameAll />} />
            <Route path="games/create" element={<Game />} />
            <Route path="games/:id/update" element={<GameUp />} />
            <Route path="Admin" element={<Admin />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login setIsConnected={setIsConnected} />} />
            <Route path="playstation" element={<Playstation />} />
            <Route path="xbox" element={<Xbox />} />
            <Route path="pc" element={<Pc />} />
            <Route path="switch" element={<Switch />} />
            <Route path="cart" element={<Cart />} />
            <Route path="setting" element={<SettingsUser />} />
            <Route path="Admin/setting" element={<SettingAdmin />} />
            <Route path="admin/:id/update" element={<UserUpdate />} />
            <Route path="admin/:id/delete" element={<UserDelete />} />
            <Route path="admin/:id/editRole" element={<EditRole />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/:id/oneGameView" element={<OneGameView />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>


  );
}

export default App;
