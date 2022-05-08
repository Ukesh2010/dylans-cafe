/* eslint-disable react/prop-types */
import Image from "next/image";
import React from "react";

const Logo = ({ className = "" }) => (
  <div className="logo-image-block">
    <Image
      className={`img ${className}`}
      layout="fill"
      src={"/logo.png"}
      alt="logo, dylan's cafe bar and restaurant"
    />
  </div>
);

export default Logo;
