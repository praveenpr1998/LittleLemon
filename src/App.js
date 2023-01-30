import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage.js";
import "./App.css";
import BookingPage from "./BookingPage.js";
import ConfirmationPage from "./ConfirmationPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
  {
    path: "/confirmation",
    element: <ConfirmationPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
