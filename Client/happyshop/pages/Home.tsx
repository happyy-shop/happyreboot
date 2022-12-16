import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Slider";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Slider />
        <Footer />
      </div>
    </div>
  );
}
