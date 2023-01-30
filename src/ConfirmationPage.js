import { Link, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./ConfirmationPage.css";

export default function ConfirmationPage() {
  const search = useLocation().search;
  const params = new URLSearchParams(search);

  return (
    <div>
      <Nav />
      <div className="section-wrapper center">
        <h1>Reservation Confirmed</h1>
        <p>
          Thank you for your reservation at Little Lemon. We look forward to
          serving you.
        </p>
        <p>Date: {params.get("date")}</p>
        <p>Time: {params.get("time")}</p>
        <p>Number of guests: {params.get("numberOfGuests")}</p>
        <p>Occasion: {params.get("occasion")}</p>
        <button>
          <Link to="/booking">Back</Link>
        </button>
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
}
