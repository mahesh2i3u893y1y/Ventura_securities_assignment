import React, { useState } from "react";

// ReadMode Feature controlling via state 

const ReadMoreText = ({ text, limit = 400 }) => {
  const [more, setMore] = useState(false);

  if (!text) return null;

  return (
    <p className="text-gray-600 text-sm leading-relaxed">
      {more ? text : text.slice(0, limit)}
      {text.length > limit && (
        <>
          {!more && "... "}
          <button
            onClick={() => setMore(!more)}
            className="text-red-600 font-medium hover:underline ml-1 cursor-pointer"
          >
            {more ? "Read less" : "Read more"}
          </button>
        </>
      )}
    </p>
  );
};

export default ReadMoreText;
