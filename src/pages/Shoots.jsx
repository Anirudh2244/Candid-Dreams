import React from "react";
import PageGallary from "./PageGallary";
import Navbar from "../components/Navbar";

const shootsImages = [
  "https://ik.imagekit.io/adsrc2244/shoot/DSC07663.JPG?updatedAt=1748579618037",
  "https://ik.imagekit.io/adsrc2244/shoot/DSC07662.JPG?updatedAt=1748579618044",
  "https://ik.imagekit.io/adsrc2244/shoot/1.JPG?updatedAt=1748579618064",
  "https://ik.imagekit.io/adsrc2244/shoot/DSC07579.JPG?updatedAt=1748579613252",
  "https://ik.imagekit.io/adsrc2244/shoot/DSC07419.JPG?updatedAt=1748579613204",
  "https://ik.imagekit.io/adsrc2244/shoot/DSC07737.JPG?updatedAt=1748579613089",
  "https://ik.imagekit.io/adsrc2244/shoot/DSC07745.JPG?updatedAt=1748579613137",
  "https://ik.imagekit.io/adsrc2244/shoot/DSC07571.JPG?updatedAt=1748579613131",
  "https://ik.imagekit.io/adsrc2244/shoot/DSC07584.JPG?updatedAt=1748579612862",
  "https://ik.imagekit.io/adsrc2244/shoot/DSC07335.JPG?updatedAt=1748579612826",
  "https://ik.imagekit.io/adsrc2244/shoot/DSC07669.JPG?updatedAt=1748579612750",
  "https://ik.imagekit.io/adsrc2244/shoot/DSC07344.JPG?updatedAt=1748579612782",
  "https://ik.imagekit.io/adsrc2244/shoot/DSC07668.JPG?updatedAt=1748579612410"
];

function Shoots() {
  return (
    <div>
      <Navbar />
      <div className="sm:p-4 p-2">
        <PageGallary gallaryImages={shootsImages} />
      </div>
    </div>
  );
}

export default Shoots;
