import React from "react";
import PageGallary from "./PageGallary";
import Navbar from "../components/Navbar";

const preWedImages = [
  "https://ik.imagekit.io/adsrc2244/prewedding/1.jpg?updatedAt=1748432308971",
  "https://ik.imagekit.io/adsrc2244/prewedding/2.jpg?updatedAt=1748432308816",
  "https://ik.imagekit.io/adsrc2244/prewedding/3.jpg?updatedAt=1748432308771",
  "https://ik.imagekit.io/adsrc2244/prewedding/4.jpg?updatedAt=1748432303939",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC01683%20copy.jpg?updatedAt=1748432293749",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC01726%20copy.jpg?updatedAt=1748432293534",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC01858%20copy.jpg?updatedAt=1748432296384",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC01985%20copy.jpg?updatedAt=1748432292007",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC02377%20copy.jpg?updatedAt=1748432293821",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC02931%20copy.jpg?updatedAt=1748432307806",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC03035%20copy.jpg?updatedAt=1748432288779",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC04279%20copy%202.jpg?updatedAt=1748432305737",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC04296%20copy%202.jpg?updatedAt=1748432293917",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC04304%20copy%202.jpg?updatedAt=1748432288782",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC04308.jpg?updatedAt=1748432303825",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC04382-%20copy.jpg?updatedAt=1748432310065",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC04452%20copy%202.jpg?updatedAt=1748432308705",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC04492%20copy%202.jpg?updatedAt=1748432303795",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC04787.jpg?updatedAt=1748432310774",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC04840.jpg?updatedAt=1748432293710",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC04874.jpg?updatedAt=1748432303862",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC04914.jpg?updatedAt=1748432302004",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC05259.jpg?updatedAt=1748432306430",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC05281.jpg?updatedAt=1748432289228",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC07147%20copy.jpg?updatedAt=1748432303781",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC07210%20copy.jpg?updatedAt=1748432297872",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC07460%20copy.jpg?updatedAt=1748432288224",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC07770%20copy.jpg?updatedAt=1748432304048",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC07836%20copy.jpg?updatedAt=1748432288948",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC07877%20copy.jpg?updatedAt=1748432296311",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC07965%20copy.jpg?updatedAt=1748432308385",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC08036%20copy.jpg?updatedAt=1748432292222",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC08047%20copy.jpg?updatedAt=1748432289064",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC08132%20copy.jpg?updatedAt=1748432289166",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC08846%20copy.jpg?updatedAt=1748432287971",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC08911%20copy%202.jpg?updatedAt=1748432293468",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC08940%20copy.jpg?updatedAt=1748432307436",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC08993%20copy%202.jpg?updatedAt=1748432303800",
  "https://ik.imagekit.io/adsrc2244/prewedding/DSC09327%20copy%202.jpg?updatedAt=1748432293604",
  "https://ik.imagekit.io/adsrc2244/prewedding/TCD08914%20copy.jpg?updatedAt=1748432297508",
  "https://ik.imagekit.io/adsrc2244/prewedding/TCD08929%20copy.jpg?updatedAt=1748432289033",
  "https://ik.imagekit.io/adsrc2244/prewedding/TCD09246%20copy.jpg?updatedAt=1748432298061",
  "https://ik.imagekit.io/adsrc2244/prewedding/TCD09262%20copy.jpg?updatedAt=1748432309041",
  "https://ik.imagekit.io/adsrc2244/prewedding/TCD09467-2%20copy.jpg?updatedAt=1748432288881",
  "https://ik.imagekit.io/adsrc2244/prewedding/TCD09508%20copy.jpg?updatedAt=1748432301484",
];

function Prewedding() {
  return (
    <div>
      <Navbar />
      <div className="sm:p-4 p-2">
        <PageGallary gallaryImages={preWedImages} />
      </div>
    </div>
  );
}

export default Prewedding;
