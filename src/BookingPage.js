import React from "react";
import { useNavigate } from "react-router-dom";
import restaurantImg from "./img/restaurant.jpg";
import restaurantChefs2Img from "./img/Mario_and_Adrian B.jpg";
import { BookingForm } from "./components/BookingForm";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import "./BookingPage.css";

export default function BookingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Nav />
      <div className="bookingpage-imgs">
        <img
          src={restaurantImg}
          alt="A photo of Little Lemon restaurant"
          className="restaurant-img"
        />

        <img
          src={restaurantChefs2Img}
          alt="A photo of Little Lemon restaurant's chefs"
          className="restaurantchefs2-img"
        />
      </div>
      <BookingForm
        onSubmit={({ date, time, numberOfGuests, occasion }) => {
          const succeeded = submitAPI({ date, time, numberOfGuests, occasion });
          if (succeeded) {
            navigate({
              pathname: "/confirmation",
              search: `?date=${date}&time=${time}&numberOfGuests=${numberOfGuests}&occasion=${occasion}`,
            });
          } else {
            window.alert("Please try again.");
          }
        }}
      />
      <Footer />
    </div>
  );
}

const submitAPI = function (formData) {
  return true;
};
