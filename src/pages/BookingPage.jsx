import React, { useEffect, useState } from "react";
import Booking from "../components/Booking";
import { fetchAPI } from "../utils/api";

export default function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const date = new Date();
    const data = fetchAPI(date);
    setAvailableTimes(data);
  }, []);

  const handleDateChanged = (date) => {
    const data = fetchAPI(new Date(date));
    setAvailableTimes(data);
    console.log(data);
  };

  return (
    <div>
      <h1>Booking</h1>
      <p>Make your reservation here</p>
      {showSuccess && <p>Booking successful!</p>}
      <Booking
        availableTimes={availableTimes}
        dateChanged={handleDateChanged}
        bookingSuccess={() => setShowSuccess((prev) => !prev)}
      />
    </div>
  );
}
