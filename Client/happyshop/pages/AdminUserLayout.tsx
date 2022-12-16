import React from "react";
import NavbarAdmin from "./NavbarAdmin";
import Slider from "./Slider";

export default function AdminUserLayout() {
  return (
    <div>
      <NavbarAdmin />
      <Slider />
      <span className="welcome">welcome admin </span>
    </div>
  );
}
