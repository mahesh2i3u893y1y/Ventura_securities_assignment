import React from "react";
import { useNavigate } from "react-router-dom";

// DeskTop view of the OPEN IPOS in row wise 

const IpoRowDesktop = ({ ipo }) => {
  const navigate = useNavigate();

  const handleIpoDetailsNavigation = () => {
    navigate(`/ipodetails/${ipo.id}`);
  };

  return (
    <div
      onClick={handleIpoDetailsNavigation}
      className="grid px-3 cursor-pointer grid-cols-4 gap-4 items-center py-3 border-b border-gray-300"
    >
      <div className="flex items-center gap-3">
        <img src={ipo.logo} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">{ipo.companyName}</p>
          <p className="text-sm text-gray-500">{ipo.issueDates.dateFormat}</p>
        </div>
      </div>

      <p className="font-medium text-center">₹{ipo.issueSizeCr} Crores</p>

      <p className="font-medium text-center">{ipo.priceRange}</p>

      <div className="text-center">
        <p className="font-semibold">₹{ipo.minInvestment.toLocaleString()}</p>
        <p className="text-sm text-gray-500">{ipo.lotSize} Shares / 5 Lots</p>
      </div>
    </div>
  );
};

export default IpoRowDesktop;
