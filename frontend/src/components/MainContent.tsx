import React, { useState } from 'react';
import { Search } from 'lucide-react';

const MainContent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search functionality here
  };

  return (
    <main className="min-h-screen w-full bg-[#262525] p-6 md:p-8">
      {/* Header */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">Welcome to <span className="text-[#E8793F]">Market</span>Fuel</h1>
          <p className="text-gray-400">Your ultimate crypto analytics dashboard</p>
        </div>

        {/* Search */}
        <div className="mx-auto mb-12 max-w-2xl px-4">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for crypto coins..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border-none bg-[#1E1E1E] py-3 pl-6 pr-12 text-white placeholder-gray-500 ring-2 ring-transparent transition-all focus:outline-none focus:ring-2 focus:ring-[#E8793F]"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-white focus:outline-none"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Hot Topic', bg: 'from-purple-600 to-blue-500' },
            { title: 'Trending', bg: 'from-pink-600 to-rose-500' },
            { title: 'News', bg: 'from-amber-500 to-orange-500' }
          ].map((card, index) => (
            <div 
              key={index}
              className={`rounded-xl bg-gradient-to-br ${card.bg} p-6 text-white shadow-lg transition-transform hover:scale-[1.02]`}
            >
              <h2 className="mb-4 text-xl font-semibold">{card.title}</h2>
              <div className="h-32">
                {/* Content will go here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
