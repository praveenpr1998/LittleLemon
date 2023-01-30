import React from "react";

export function BookingForm(props) {
  const [availableTimes, setAvailableTimes] = React.useState(
    fetchAPI(new Date())
  );
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [numberOfGuests, setNumberOfGuests] = React.useState("");
  const [occasion, setOccasion] = React.useState("");

  React.useEffect(() => {
    if (!date) return;
    setAvailableTimes(fetchAPI(new Date(date)));
  }, [date]);

  return (
    <form
      role="booking"
      className="booking-form"
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit({ date, time, numberOfGuests, occasion });
      }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={(e) => setTime(e.target.value)}>
        <option></option>
        {availableTimes.map((time) => (
          <option key={time}>{time}:00</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={(e) => setNumberOfGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
        <option></option>
        <option>None</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        disabled={!(date && time && numberOfGuests && occasion)}
        type="submit"
        value="Make Your reservation"
      />
    </form>
  );
}

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
