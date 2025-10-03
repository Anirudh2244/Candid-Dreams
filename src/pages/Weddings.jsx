import React from "react";
import PageGallary from "./PageGallary";
import Navbar from "../components/Navbar";

const wedImages = [
  "https://ik.imagekit.io/adsrc2244/wedding/w1/1.jpg?updatedAt=1748422222798",
  "https://ik.imagekit.io/adsrc2244/wedding/w1/2.jpg?updatedAt=1748422222884",
  "https://ik.imagekit.io/adsrc2244/wedding/w1/3.jpg?updatedAt=1748422221681",
  "https://ik.imagekit.io/adsrc2244/wedding/w1/4.jpg?updatedAt=1748422222634",
  "https://ik.imagekit.io/adsrc2244/wedding/w1/5.jpg?updatedAt=1748422222415",
  "https://ik.imagekit.io/adsrc2244/wedding/w2/1.jpg?updatedAt=1748422229548",
  "https://ik.imagekit.io/adsrc2244/wedding/w2/2.jpg?updatedAt=1748422228545",
  "https://ik.imagekit.io/adsrc2244/wedding/w2/3.jpg?updatedAt=1748422228275",
  "https://ik.imagekit.io/adsrc2244/wedding/w2/4.jpg?updatedAt=1748422227817",
  "https://ik.imagekit.io/adsrc2244/wedding/w2/5.jpg?updatedAt=1748422228400",
  "https://ik.imagekit.io/adsrc2244/wedding/w3/1.jpg?updatedAt=1748422232378",
  "https://ik.imagekit.io/adsrc2244/wedding/w3/2.jpg?updatedAt=1748422231388",
  "https://ik.imagekit.io/adsrc2244/wedding/w3/3.jpg?updatedAt=1748422231590",
  "https://ik.imagekit.io/adsrc2244/wedding/w3/5.jpg?updatedAt=1748422231304",
  "https://ik.imagekit.io/adsrc2244/wedding/w3/4.jpg?updatedAt=1748422230075",
  "https://ik.imagekit.io/adsrc2244/wedding/w4/1.jpg?updatedAt=1748422233583",
  "https://ik.imagekit.io/adsrc2244/wedding/w4/2.jpg?updatedAt=1748422232564",
  "https://ik.imagekit.io/adsrc2244/wedding/w4/3.jpg?updatedAt=1748422233387",
  "https://ik.imagekit.io/adsrc2244/wedding/w4/4.jpg?updatedAt=1748422232432",
  "https://ik.imagekit.io/adsrc2244/wedding/w4/5.jpg?updatedAt=1748422232852",
  "https://ik.imagekit.io/adsrc2244/wedding/w5/11.jpg?updatedAt=1748422225669",
  "https://ik.imagekit.io/adsrc2244/wedding/w5/2.jpg?updatedAt=1748422228230",
  "https://ik.imagekit.io/adsrc2244/wedding/w5/3.jpg?updatedAt=1748422228309",
  "https://ik.imagekit.io/adsrc2244/wedding/w5/4.jpg?updatedAt=1748422226077",
  "https://ik.imagekit.io/adsrc2244/wedding/w5/5.jpg?updatedAt=1748422227028",
  "https://ik.imagekit.io/adsrc2244/wedding/w6/1.jpg?updatedAt=1748422221687",
  "https://ik.imagekit.io/adsrc2244/wedding/w6/2.jpg?updatedAt=1748422223056",
  "https://ik.imagekit.io/adsrc2244/wedding/w6/3.jpg?updatedAt=1748422222306",
  "https://ik.imagekit.io/adsrc2244/wedding/w6/4.jpg?updatedAt=1748422222687"
];

function Weddings() {
  return (
    <div>
      <Navbar />
      <div className="sm:p-4 p-2">
        <PageGallary gallaryImages={wedImages} />
      </div>
    </div>
  );
}

export default Weddings;
