import React from "react";
import Footer from "./Footer";

export default function Layouts({ children }) {
  return (
    <div className="col-lg-4 offset-lg-4 col-sm-12 col-12 mainContainer">
      {children}
      <Footer />
    </div>
  );
}
