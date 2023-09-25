import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setJsonData(data));
  }, []);

  if (jsonData === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {jsonData.map((donation) => (
        <Link to={`/card/${donation.id}`} key={donation.id} >
          <div
            style={{ backgroundColor: donation.Card_bg }}
            className="rounded-md p-2 w-full"
          >
            <img
              className="rounded-t-md object-cover w-full h-48 md:w-80 md:h-48"
              src={donation.Picture}
              alt={donation.Title}
            />
            <div className="mt-2 md:mt-4 md:p-4">
              <button
                style={{ backgroundColor: donation.Category_bg, color: donation.Category }}
                className="py-1 px-3 rounded-md font-medium mt-1"
              >
                {donation.Category}
              </button>
              <h1 style={{ color: donation.Category }} className="text-xl font-semibold mt-2">
                {donation.Title}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
