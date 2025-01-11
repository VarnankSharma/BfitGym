import '../src/styles.css' // Import global CSS file
import React from "react";
import ReactDOM from "react-dom/client";  // Use this for React 18+
// In index.js or App.j
import 'swiper/css'

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
