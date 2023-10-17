import React, { useState } from "react";
import { Recruit, Store, Headhunt } from "../molecules";

const Recruitment = () => {
  return (
    <div className="flex w-fit items-center gap-[1px] bg-[#00000099]">
      <Store />
      <div className="flex relative gap-[1px]">
        <Recruit />
        <Headhunt />
        <div className="w-full absolute px-2">
          <div className=" bg-[#343233] font-oswald font-normal text-[#FFFFFF] px-2">
            <p className="text-start">Recruitment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
