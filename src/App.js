import React from 'react';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';

import Home from './pages/Home';
import Services from './pages/Services';
import WhyOmni from './pages/WhyOmni';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/*" element={<Services />} />
        <Route path="/why-omni" element={<WhyOmni />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
