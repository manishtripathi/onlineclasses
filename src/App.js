import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
