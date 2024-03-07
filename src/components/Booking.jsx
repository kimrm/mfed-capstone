import React, { useEffect, useState } from "react";

export default function Booking({
  availableTimes,
  dateChanged,
  bookingSuccess,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setTime(availableTimes[0]);
  }, [availableTimes]);

  const handleDateChanged = (event) => {
    setDate(event.target.value);
    dateChanged(event.target.value);
  };
  const handleTimeChanged = (event) => {
    setTime(event.target.value);
  };
  const handleGuestsChanged = (event) => {
    setGuests(event.target.value);
  };
  const handleOccasionChanged = (event) => {
    setOccasion(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let errorText = "";
    if (!date) {
      errorText += "Date is required\n";
    }
    if (!time) {
      errorText += "Time is required\n";
    }
    if (!guests) {
      errorText += "Number of guests is required\n";
    }
    if (!occasion) {
      errorText += "Occasion is required\n";
    }

    setErrorMessage(errorText);
    if (!errorText) {
      bookingSuccess();
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="res-date"
        onChange={handleDateChanged}
        value={date}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="res-time"
        onChange={handleTimeChanged}
        value={time}
      >
        {availableTimes.map((timeOption) => {
          return (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          );
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={handleGuestsChanged}
        value={guests}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={handleOccasionChanged} value={occasion}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Make Reservation
      </button>
    </form>
  );
}
