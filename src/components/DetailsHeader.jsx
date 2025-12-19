import { useNavigate } from "react-router-dom";
import {  FiDownload } from "react-icons/fi";
import { MdArrowBackIos } from "react-icons/md";

const DetailsHeader = ({ company }) => {
  const navigate = useNavigate();

//   static header with passed data with back navigation 

  return (
    <div className="w-full bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <p className="text-sm text-gray-500 mb-3">
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-gray-900"
          >
            Home
          </span>
          <span className="mx-1">›</span>
          <span className="text-gray-500">Market watch</span>
        </p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 cursor-pointer rounded-xl border flex items-center justify-center hover:bg-gray-100"
            >
              <MdArrowBackIos />
            </button>

            <div className="flex items-center gap-3">
              <img
                src={company.logo}
                alt={company.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h1 className="font-semibold text-lg">{company.name}</h1>
                <p className="text-sm text-gray-500">{company.subTitle}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="cursor-pointer flex  w-10 h-10 rounded-full border items-center justify-center hover:bg-gray-100">
              <FiDownload />
            </button>

            <button className="hidden sm:flex bg-[#0B0E2D] cursor-pointer text-white px-5 py-2 rounded-xl font-medium hover:opacity-90 transition">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
