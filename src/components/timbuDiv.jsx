import React from "react";
import logo from "..//assets/images/timbu_logo.png";

const TimbuDiv = () => {
  return (
    <div className="w-full bg-[#F8F8F8] border border-[#BCBABA] flex justify-center items-center z-[2]">
      <div className="w-[120px] border-x border-[#F16B5B] p-[12px]  ">
        <img src={logo} alt="Timbu Logo" className="w-[96.41px] h-[33.57px]" />
      </div>
    </div>
  );
};

export default TimbuDiv;
