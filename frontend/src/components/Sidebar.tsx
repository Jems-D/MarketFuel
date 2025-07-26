import React, { useEffect, useRef } from 'react';

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
          <ul className="flex-1 overflow-y-auto p-2">
            {['Gas Prices', 'Airdrop Calendar', 'Fear & Greed Index', 'Whale Watch', 'Crypto Heat Map'].map((item) => (
              <li 
                key={item}
                className="mb-1 rounded p-3 text-white transition-colors hover:bg-white/10 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
