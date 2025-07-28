import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Home, Waves, Calendar, Map, Droplet } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`fixed inset-0 z-50 ${!isOpen ? 'pointer-events-none' : ''}`}>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${!isOpen ? 'opacity-0' : 'opacity-100'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className={`fixed left-0 top-0 h-screen w-80 bg-[#1e1e1e] shadow-lg transition-transform duration-300 ease-in-out z-50 ${
          !isOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#1e1e1e] p-5">
            <h1 className="text-xl font-bold text-white"><span className="text-[#E8793F]">Market</span>Fuel</h1>
            <button 
              onClick={onClose} 
              className="flex h-8 w-8 items-center justify-center rounded text-2xl text-white transition-colors hover:bg-white/10"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto px-4 py-6">
            <nav className="space-y-1">
              <Link
                to="/"
                className="group flex items-center rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                onClick={onClose}
              >
                <Home className="mr-3 h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                to="/gas-prices"
                className="group flex items-center rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                onClick={onClose}
              >
                <Droplet className="mr-3 h-5 w-5" />
                <span>Gas Prices</span>
              </Link>
              <Link
                to="/fear-greed-index"
                className="group flex items-center rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                onClick={onClose}
              >
                <BarChart3 className="mr-3 h-5 w-5" />
                <span>Fear & Greed Index</span>
              </Link>
              <Link
                to="/"
                className="group flex items-center rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                onClick={onClose}
              >
                <Waves className="mr-3 h-5 w-5" />
                <span>Whale Watch</span>
              </Link>
              <Link
                to="/"
                className="group flex items-center rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                onClick={onClose}
              >
                <Calendar className="mr-3 h-5 w-5" />
                <span>Airdrop Calendar</span>
              </Link>
              <Link
                to="/"
                className="group flex items-center rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                onClick={onClose}
              >
                <Map className="mr-3 h-5 w-5" />
                <span>Crypto Heat Map</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
