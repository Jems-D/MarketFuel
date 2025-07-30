import React from "react";

const FearAndGreedIndex = () => {
  return (
    <div className="min-h-screen w-full bg-[#262525] p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
            Fear & Greed <span className="text-[#E8793F]">Index</span>
          </h1>
          <p className="text-gray-400">Current market sentiment analysis</p>
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5">
          {/* Left Column - 3 Cards - Full width on mobile, 1/4 on desktop */}
          <div className="md:col-span-1 space-y-2.5">
            {/* Card 1 */}
            <div className="rounded-lg bg-[#2E2E2E] p-4 md:p-6 shadow-lg transition-all hover:shadow-xl hover:shadow-[#E8793F]/10">
              <h3 className="mb-2 text-base md:text-lg font-semibold text-white">
                CMD Crypto Fear and Greed Index
              </h3>
              <div className="text-3xl md:text-4xl font-bold text-[#E8793F]">
                --
              </div>
              <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-400">
                Neutral
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg bg-[#2E2E2E] p-4 md:p-6 shadow-lg transition-all hover:shadow-xl hover:shadow-[#E8793F]/10">
              <h3 className="mb-2 text-base md:text-lg font-semibold text-white">
                Historical Value
              </h3>
              <div className="text-3xl md:text-4xl font-bold text-[#E8793F]">
                --%
              </div>
              <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-400">
                --
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg bg-[#2E2E2E] p-4 md:p-6 shadow-lg transition-all hover:shadow-xl hover:shadow-[#E8793F]/10">
              <h3 className="mb-2 text-base md:text-lg font-semibold text-white">
                Yearly High and Low
              </h3>
              <div className="text-3xl md:text-4xl font-bold text-[#E8793F]">
                --
              </div>
              <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-400">
                --
              </p>
            </div>
          </div>

          {/* Right Column - Historical Data - Full width on mobile, 3/4 on desktop */}
          <div className="md:col-span-3 rounded-lg bg-[#2E2E2E] p-4 md:p-6 shadow-lg transition-all hover:shadow-xl hover:shadow-[#E8793F]/10">
            <h2 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-white">
              Trend Indicator
            </h2>
            <div className="h-48 md:h-[calc(100%-3rem)] rounded bg-[#262525] p-3 md:p-4 text-sm md:text-base text-gray-400">
              Chart/Table will be displayed here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FearAndGreedIndex;
