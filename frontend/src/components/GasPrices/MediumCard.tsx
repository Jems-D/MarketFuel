import React from "react";

type Props = {};

function MediumCard({}: Props) {
  return (
    <div className="rounded-lg bg-[#2E2E2E] p-6 shadow-md text-center">
      <p className="text-yellow-400 font-bold text-lg flex items-center justify-center gap-2">
        ⚡ Medium
      </p>
      <p className="text-2xl font-bold text-white mt-2">0.0 GWEI / $~0.01</p>
      <p className="text-gray-400 text-sm mt-2">Base: 0 Priority: 0.1</p>
      <p className="text-gray-400 text-sm">0 minutes 45 seconds</p>
    </div>
  );
};

export default MediumCard;
