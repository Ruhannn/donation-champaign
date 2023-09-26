import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredDonationApplication } from "../../Utility/Save";

const DonationList = () => {
  const donationData = useLoaderData();
  const [donation, setDonation] = useState([]);
  const [showAllItems, setShowAllItems] = useState(false);

  useEffect(() => {
    const storedDonationId = getStoredDonationApplication();
    if (donationData.length > 0) {
      const filteredDonation = donationData.filter((item) =>
        storedDonationId.includes(item.id)
      );
      setDonation(filteredDonation);
    }
  }, []);

  const toggleItems = () => {
    setShowAllItems(!showAllItems);
  };

  const itemsToDisplay = showAllItems ? donation : donation.slice(0, 4);

  return (
    <>
      {donation.length === 0 && (
        <div className="text-center mt-6">
  <h1 className="text-4xl sm:text-5xl font-semibold">
    No donations available at the moment.
  </h1>
  <br />
  <Link
    className="px-4 mt-11 py-2 bg-[#009444] text-white rounded inline-block"
    to="/">
    Go to Donation Page
  </Link>
</div>

      )}
      <div className="container px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {itemsToDisplay.map((item) => (
          <div key={item.id}>
            <div
              style={{ background: item.Card_bg }}
              className="flex gap-4 w-full">
              <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                <img
                  className="object-cover rounded-l-md h-full w-full"
                  src={item.Picture}
                  alt=""
                />
              </div>
              <div className="py-6 flex flex-col gap-2">
                <button
                  style={{ background: item.Category_bg, color: item.Text_bg }}
                  className="px-3 py-1 w-fit text-sm font-normal rounded">
                  {item.Category}
                </button>
                <h1 className="text-2xl font-semibold text-black">
                  {item.Title}
                </h1>
                <h1
                  style={{ color: item.Text_bg }}
                  className="font-semibold">{`$${item.Price}`}</h1>
                <Link
                  to={`/card/${item.id}`}
                  style={{ background: item.Text_bg }}
                  className="px-4 w-fit py-2 text-white font-semibold text-xl rounded">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {donation.length > 4 && (
        <div className="flex justify-center my-4">
          <button
            onClick={toggleItems}
            className="px-4 py-2 bg-[#009444] text-white rounded">
            {showAllItems ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </>
  );
};

export default DonationList;
