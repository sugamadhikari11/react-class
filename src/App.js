import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './components/home';
import Counter from './components/counter';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;