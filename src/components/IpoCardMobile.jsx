import React from "react";
import { useNavigate } from "react-router-dom";

// showing the OPEN IPO's in mobile view 
// Here we can also use LINK for the better SEO 

const IpoCardMobile = ({ ipo }) => {
    const navigate = useNavigate()

    const handleIpoDetailsNavigation = () => {
        navigate(`/ipodetails/${ipo.id}`)
    }

  return (

    <div onClick={handleIpoDetailsNavigation} className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm relative">

      <div className="flex items-start gap-3">
        <img
          src={ipo.logo}
          alt={ipo.companyName}
          className="w-10 h-10 rounded-full"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-[15px] text-gray-900 leading-tight">
            {ipo.companyName}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {ipo.issueDates.dateFormat}
          </p>
        </div>
      </div>

      <div className="border-t my-4"></div>

      <div className="grid grid-cols-2 gap-y-4 text-sm">
        <div>
          <p className="text-gray-500">Issue size</p>
          <p className="font-semibold text-gray-900">₹ {ipo.issueSizeCr} cr</p>
        </div>

        <div>
          <p className="text-gray-500">Price range</p>
          <p className="font-semibold text-gray-900">{ipo.priceRange}</p>
        </div>

        <div>
          <p className="text-gray-500">Min. Amount</p>
          <p className="font-semibold text-gray-900">
            ₹ {ipo.minInvestment.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-gray-500">Min. Qty.</p>
          <p className="font-semibold text-gray-900">{ipo.lotSize} shares</p>
        </div>
      </div>
    </div>
  );
};

export default IpoCardMobile;
