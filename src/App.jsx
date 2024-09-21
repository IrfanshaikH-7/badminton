// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BadmintonShuttlecock from './components/Shuttle';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/play" element={<BadmintonShuttlecock />} />
      </Routes>
    </Router>
  );
}

export default App;
