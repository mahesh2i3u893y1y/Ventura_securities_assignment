
// Helper functions to destrcture data this will help in resuing 

export const buildDetailsData = ({
  issueSizeCr,
  priceRange,
  minInvestment,
  lotSize,
  issueDates,
  listedOn,
  listedPrice,
  listingGains,
}) => [
  { label: "Issue size", value: `₹${issueSizeCr} Cr` },
  { label: "Price range", value: priceRange },
  {
    label: "Minimum amount",
    value: `₹${minInvestment.toLocaleString()}`,
  },
  { label: "Lot size", value: `${lotSize} shares/lots` },
  {
    label: "Issue dates",
    value: issueDates?.dateFormat || "—",
  },
  {
    label: "Listed on",
    value: listedOn ? new Date(listedOn).toDateString() : "—",
  },
  {
    label: "Listed price",
    value: listedPrice ? `₹${listedPrice}` : "—",
  },
  {
    label: "Listing gains",
    value: listingGains
      ? `${listingGains.value > 0 ? "+" : ""}${listingGains.value} (${listingGains.percentage}%)`
      : "—",
  },
];

export const buildTimelineItems = ({ timeline }) => {
  if (!timeline) return [];

  return [
    { label: "Bidding starts", date: timeline.biddingStart },
    { label: "Bidding ends", date: timeline.biddingEnd },
    { label: "Allotment finalization", date: timeline.allotment },
    { label: "Refund initiation", date: timeline.refund },
    { label: "Demat transfer", date: timeline.demat },
    { label: "Listing date", date: timeline.listing },
  ];
};
