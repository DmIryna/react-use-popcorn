import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

import StarRating from "./components/StarRaiting"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} color="red" size={24} defaultRating={4} /> */}
  </React.StrictMode>
)
