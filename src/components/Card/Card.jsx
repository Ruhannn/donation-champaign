import React, { useEffect, useState } from "react";

const Card = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setJsonData(data))
  }, []);

  if (jsonData === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {jsonData.map((donation) => (
        <div key={donation.id} style={{ backgroundColor: donation.Card_bg }} className="rounded-md p-2 md:flex w-80 h-80 md:flex-col">
          <img
            className="rounded-t-md object-cover w-80 h-48 md:w-80 md:h-48"
            src={donation.Picture}
            alt={donation.Title}
          />
          <div className="mt-2 md:mt-4 md:p-4">
            <button style={{ backgroundColor: donation.Category_bg, color: donation.Category }} className="py-1 px-3 rounded-md font-medium mt-1">
              {donation.Category}
            </button>
            <h1 style={{ color: donation.Category }} className="text-xl font-semibold mt-2">
              {donation.Title}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
