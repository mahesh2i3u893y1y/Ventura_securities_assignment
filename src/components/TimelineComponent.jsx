import React from "react";
import { FaCheck } from "react-icons/fa";

// Timeline component with  two UI's based on the screen 

const Timeline = ({ items }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border-gray-300 border-1">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">IPO timeline</h2>

      <div className="hidden md:block">
        <div className="relative">
          <div className="absolute top-6 left-0 right-0 h-[2px] bg-green-400 mx-6" />

          <div className="relative flex justify-between">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 z-10">
                  <FaCheck className="text-white text-lg" />
                </div>
                <div className="mt-4 text-center max-w-[120px]">
                  <p className="text-sm font-semibold text-gray-900 leading-tight">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mobile view  */}

      <div className="md:hidden">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-green-500" />
          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index} className="relative flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center z-10 flex-shrink-0 bg-green-500">
                  <FaCheck className="text-white text-lg" />
                </div>

                {/* Text */}
                <div className="ml-6 mt-2">
                  <p className="text-base font-semibold text-gray-900">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
