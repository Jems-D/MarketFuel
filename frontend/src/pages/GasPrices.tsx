import React, { useState } from "react";
import ethereumLogo from "../components/icons/ethereum.svg";
import bitcoinLogo from "../components/icons/bnb.svg";
import bnbLogo from "../components/icons/bitcoin.svg";

const GasPrices = () => {
  // ✅ State for dropdown open/close
  const [isOpen, setIsOpen] = useState(false);

  // ✅ State for selected crypto
  const [selectedCrypto, setSelectedCrypto] = useState({
    name: "Ethereum",
    logo: ethereumLogo,
  }); 

  // ✅ List of crypto options
  const cryptos = [
    { name: "Ethereum", logo: ethereumLogo },
    { name: "Bitcoin", logo: bitcoinLogo },
    { name: "BNB", logo: bnbLogo },
  ];

  return (
    <div className="min-h-screen w-full bg-[#262525] p-6 md:p-8">
      {/* ✅ Center content wrapper */}
      <div className="mx-auto max-w-7xl">
        {/* ✅ Page Title Section */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
            Gas <span className="text-[#E8793F]">Prices</span>
          </h1>
          <p className="text-gray-400">Real-time gas price updates</p>
        </div>

        {/* ✅ Crypto Selector Header */}
        <div className="relative inline-block mb-6">
          <div
            className="flex items-center space-x-3 cursor-pointer bg-[#2E2E2E] px-4 py-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
          >
            {/* ✅ Selected crypto logo */}
            <img
              src={selectedCrypto.logo}
              alt={selectedCrypto.name}
              className="w-8 h-8"
            />

            {/* ✅ Selected crypto name */}
            <h2 className="text-2xl font-bold text-white">
              {selectedCrypto.name}
            </h2>

            {/* ✅ Dropdown arrow */}
            <span className="text-gray-400">▼</span>
          </div>

          {/* ✅ Dropdown menu (only shows when isOpen = true) */}
          {isOpen && (
            <div className="absolute mt-2 w-48 bg-[#2E2E2E] rounded-lg shadow-lg z-10">
              {cryptos.map((crypto) => (
                <div
                  key={crypto.name}
                  className="flex items-center space-x-3 px-4 py-2 hover:bg-[#3A3A3A] cursor-pointer"
                  onClick={() => {
                    setSelectedCrypto(crypto); // Change selected crypto
                    setIsOpen(false); // Close dropdown
                  }}
                >
                  <img
                    src={crypto.logo}
                    alt={crypto.name}
                    className="w-6 h-6"
                  />
                  <span className="text-white">{crypto.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ✅ Gas Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 🟢 LOW Card */}
          <div className="rounded-lg bg-[#2E2E2E] p-6 shadow-md text-center">
            <p className="text-green-400 font-bold text-lg flex items-center justify-center gap-2">
              ⚡ LOW
            </p>
            <p className="text-2xl font-bold text-white mt-2">
              0.0 GWEI / $~0.01
            </p>
            <p className="text-gray-400 text-sm mt-2">Base: 0 Priority: 0.1</p>
            <p className="text-gray-400 text-sm">0 minutes 45 seconds</p>
          </div>

          {/* 🟡 MEDIUM Card */}
          <div className="rounded-lg bg-[#2E2E2E] p-6 shadow-md text-center">
            <p className="text-yellow-400 font-bold text-lg flex items-center justify-center gap-2">
              ⚡ Medium
            </p>
            <p className="text-2xl font-bold text-white mt-2">
              0.0 GWEI / $~0.01
            </p>
            <p className="text-gray-400 text-sm mt-2">Base: 0 Priority: 0.1</p>
            <p className="text-gray-400 text-sm">0 minutes 45 seconds</p>
          </div>

          {/* 🔴 HIGH Card */}
          <div className="rounded-lg bg-[#2E2E2E] p-6 shadow-md text-center">
            <p className="text-red-400 font-bold text-lg flex items-center justify-center gap-2">
              ⚡ HIGH
            </p>
            <p className="text-2xl font-bold text-white mt-2">
              0.0 GWEI / $~0.01
            </p>
            <p className="text-gray-400 text-sm mt-2">Base: 0 Priority: 0.1</p>
            <p className="text-gray-400 text-sm">0 minutes 45 seconds</p>
          </div>
        </div>
        {/* ✅ TWO CLEAN BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">


          {/* 📦 Box 1 */}
          <div className="rounded-lg bg-[#2E2E2E] p-6 shadow-md">
            <div className="h-64 bg-[#262525] rounded-md flex items-center justify-center text-gray-400">
              Placeholder for Chart
            </div>
          </div>

          {/* 📦 Box 2 */}
          <div className="rounded-lg bg-[#2E2E2E] p-6 shadow-md">
            <div className="h-64 bg-[#262525] rounded-md flex items-center justify-center text-gray-400">
              Placeholder for Table
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GasPrices;
