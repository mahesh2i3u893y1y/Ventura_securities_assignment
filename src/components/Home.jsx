import React from "react";
import { ipoData } from "../data";
import IpoRowDesktop from "./IpoRowDesktop";
import IpoCardMobile from "./IpoCardMobile";

const Home = () => {

  return (
    <div className="max-w-7xl pt-25 mx-auto p-6 pb-20">
      <h1 className="text-2xl font-bold mb-6">IPO List</h1>

      {/* Larger Devices Header*/}
      <div className="hidden md:grid grid-cols-4 gap-4 text-gray-500 text-sm bg-gray-200 py-5 px-3 font-medium border-b">
        <p className="text-start">Company / Issue Date</p>
        <p className="text-center">Issue Size</p>
        <p className="text-center">Price Range</p>
        <p className="text-center">Min Invest/Qty</p>
      </div>

      {/* Large Devices */}

      <div className="hidden md:block bg-gray-50">
        {ipoData.map((ipo) => (
          <IpoRowDesktop key={ipo.id} ipo={ipo} />
        ))}
      </div>

      {/*Small Devices*/}

      <div className="md:hidden flex flex-col gap-6">
        {ipoData.map((ipo) => (
          <IpoCardMobile key={ipo.id} ipo={ipo} />
        ))}
      </div>
    </div>
  );
};

export default Home;
