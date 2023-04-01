import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <p></p>
      <div className="image-container">
        <div className="image-wrapper">
          {" "}
          {/* Add this wrapper div */}
          <Image
            src="/HuntPick2.png"
            alt="Happy Boy"
            width={1500} // Change this to your desired width
            height={2000} // Change this to your desired height
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
