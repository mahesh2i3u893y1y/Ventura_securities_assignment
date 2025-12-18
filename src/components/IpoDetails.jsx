import React from "react";
import { useParams } from "react-router-dom";
import { ipoData } from "../data";
import DetailsHeader from "./DetailsHeader";
import DetailsComponent from "./DetailsComponent";
import TimelineComponent from "./TimelineComponent";
import ReadMoreText from "./ReadMoreText";

// helper functions to segrerate the data check the utils folder
import { buildDetailsData, buildTimelineItems } from "../utils/ipoUtils";




const IpoDetails = () => {
  // getting the ipoId from params
  const { ipoId } = useParams();

  //   seraching for the particular id from the ipodata 
  const ipo = ipoData.find((item) => item.id === ipoId);


//   this is for the debugger helps the UI not to crash incase no such ID
  if (!ipo) {
    return <div className="p-6 text-center text-red-500">IPO not found</div>;
  }

  const { logo, companyName, about } = ipo;
//   destructring 

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-20">

        {/* Header section  */}
      <DetailsHeader
        company={{
          logo,
          name: companyName,
          subTitle: `${companyName} Limited`,
        }}
      />
      {/* All these are the below section  */}
      <div className="max-w-7xl mx-auto p-4 space-y-6">
        <DetailsComponent details={buildDetailsData(ipo)} />
        <TimelineComponent items={buildTimelineItems(ipo)} />
        <div className="bg-white rounded-2xl p-5 border border-gray-300">
          <h2 className="font-semibold mb-2">About company</h2>
          <ReadMoreText text={about} />
        </div>
      </div>
    </div>
  );
};

export default IpoDetails;
