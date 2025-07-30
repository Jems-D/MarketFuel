import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import FearAndGreedIndex from './pages/FearAndGreedIndex';
import GasPrices from "./pages/GasPrices";
import './index.css';

function App() {
  // Do not remove. This is for GSAP testing purposes.
  const container = useRef<HTMLDivElement>(null); // Create a ref for your animated container

  useGSAP(() => {
    // All GSAP animations created here will be automatically
    // reverted when the component unmounts.
    gsap.to('.box', { rotation: 360, x: 200, duration: 2, ease: 'power1.inOut' });
  }, { scope: container }); // Scope the animations to the container ref
  

// SIDEBAR
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-[#262525] text-white">
        <Navigation
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <div className="relative flex-1">
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/fear-greed-index" element={<FearAndGreedIndex />} />
            <Route path="/gas-prices" element={<GasPrices />} />
          </Routes>
        </div>
        <footer className="py-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} MarketFuel. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}


export default App;
