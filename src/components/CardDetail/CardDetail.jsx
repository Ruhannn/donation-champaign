import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonationApplication } from "../../Utility/Save";
import Loading from "../Loading/Loading";
const CardDetail = () => {
  const { id } = useParams();
  const [donation, setDonation] = useState(null);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedDonation = data.find((item) => item.id === parseInt(id));
        setDonation(selectedDonation);
      });
  }, [id]);
  const handleDonateClick = () => {
    saveDonationApplication(parseInt(id));
    toast.success(`You have donated $${donation.Price}`, {
      position: "top-right",
      autoClose: 3000,
    });
  };
  if (donation === null) {
    return <Loading></Loading>
  }
  return (
    <div className="px-4 md:px-8 lg:px-32 py-3 container mx-auto">
      <div className="relative">
        <img
          src={donation.Picture}
          className="w-full mx-auto h-auto object-cover rounded-lg"
          alt={donation.title}
        />
        <div className="absolute rounded-lg inset-x-0 bottom-0 bg-black opacity-50 h-20 lg:h-[100px]"></div>
        <button
          onClick={handleDonateClick}
          style={{ backgroundColor: donation.Text_bg }}
          className="absolute bottom-0 left-0 py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 m-5 lg:text-xl text-base rounded-lg font-mono lg:font-semibold text-white">
          Donate ${donation.Price}
        </button>
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl py-6 font-bold">
        {donation.Title}
      </h1>
      <p className="text-#0b0b0b70 text-justify leading-7">
        {donation.Description}
      </p>
    </div>
  );
};
export default CardDetail;
