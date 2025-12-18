
// Ipo details component iterating through data that's it nothing special

const DetailsComponent = ({ details }) => {
  return (
    <div className="bg-white rounded-[20px]  border-gray-300 border-1 p-5">
      <h2 className="font-semibold mb-4">IPO details</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 rounded-[20px] gap-y-6 gap-x-4 text-sm  border-gray-300 border-1 p-5">
        {details.map((item, idx) => (
          <div key={idx}>
            <p className="text-gray-500">{item.label}</p>
            <p className="font-semibold mt-1">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsComponent;
