import React from "react";
import { useState, useEffect } from "react";

const TopBar = () => {
  const [isSmallScreen, setisSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setisSmallScreen(window.innerWidth >= 640); //gives true if width is bigger than 640px
    };

    handleResize();

    // resize listener for responsiveness changes
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#EEE4E3] h-[52px] w-full flex justify-center items-center">
      <h3 className="font-normal font-kanit color-[241C1C] text-[90%]/[26px] whitespace-nowrap">
        {isSmallScreen
          ? "FREE SHIPPING ON EVERY PRODUCT FROM THE 22ND OF JULY"
          : "FREE SHIPPING ON EVERY PRODUCT FROM THE 22ND..."}
      </h3>
    </div>
  );
};

export default TopBar;
