import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing_page';
import AboutUs from './components/about_us';
import Navbar from './components/navbar';
import Footer from './components/footer'; 
import Products from './components/products';
import Careers from './components/careers';

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
        {/* Header/Navbar - appears on all pages */}
        <Navbar />
        
        {/* Main content area that grows to fill space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/careers" element={<Careers />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;