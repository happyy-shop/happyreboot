
import React from "react";
import Footer from "./Footer";

import NavbarAdmin from "./NavbarAdmin";
import Slider from "./Slider";

export default function HomeAdmin() {
  return (
    <div>
      <div>
        <NavbarAdmin />
        <Slider />
        <Footer />
      </div>
    </div>
  );
}
