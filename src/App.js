import './App.css';
import { Routes, Route } from "react-router-dom";
import Connect from './pages/connect/Connect';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/connect' element={<Connect />} />
        </Routes>
    </div>

  );
}

export default App;
