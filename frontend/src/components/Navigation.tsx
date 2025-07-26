import React from 'react';
import { Menu } from 'lucide-react';


interface NavigationProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className="sticky top-0 z-40 flex h-[60px] items-center justify-between px-5">
      <div>
        {!isSidebarOpen && (
          <button 
            onClick={toggleSidebar}
            className="menu-button rounded px-4 py-2 text-white transition-colors hover:bg-white/10"
            aria-label="Open menu"
          >
            <Menu />
          </button>
        )}
      </div>
      <div className="flex items-center gap-6">
        <button className="text-lg font-semibold text-white">Dashboard</button>
        <button className="text-lg font-semibold text-white">Placeholder</button>
        <button className="text-lg font-semibold text-white">Placeholder</button>
      </div>
    </nav>
  );
};

export default Navigation;
