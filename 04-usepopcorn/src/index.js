import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./components/StarRating";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      color="#ff7232"
      size={24}
      messages={["Bad", "Ok", "Good", "Very Good", "Amazing"]}
      defaultRating={5}
    />
    <StarRating /> */}
  </React.StrictMode>
);
