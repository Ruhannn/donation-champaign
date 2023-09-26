import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Banner from "../Banner/Banner";
const Card = () => {
  const [jsonData, setJsonData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setJsonData(data))
  }, []);
  useEffect(() => {
    if (searchText) {
      const filteredDonation = jsonData.filter((item) =>
        item.Category.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filteredDonation);
    } else {
      setFilteredData(jsonData);
    }
  }, [searchText, jsonData]);
  if (jsonData.length === 0) {
    return <Loading />;
  }
  return (
    <>
      <Banner searchText={searchText} setSearchText={setSearchText} />
      <div className="container mx-auto grid place-items-center lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-8 gap-6 pb-12">
        {filteredData.map((donation) => (
          <Link to={`/card/${donation.id}`} key={donation.id}>
            <div
              style={{ backgroundColor: donation.Card_bg }}
              className="rounded-md p-2 w-full">
              <img
                className="rounded-t-md object-cover w-full h-48 md:w-80 md:h-48"
                src={donation.Picture}
                alt={donation.Title}
              />
              <div className="mt-2 md:mt-4 md:p-4">
                <button
                  style={{
                    backgroundColor: donation.Category_bg,
                    color: donation.Category,
                  }}
                  className="py-1 px-3 rounded-md font-medium mt-1">
                  {donation.Category}
                </button>
                <h1
                  style={{ color: donation.Category }}
                  className="text-xl font-semibold mt-2">
                  {donation.Title}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Card;
