import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
