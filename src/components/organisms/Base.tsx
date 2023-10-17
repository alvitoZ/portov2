import React, { useState } from "react";
import { SilverBox } from "../atoms/SilverBox";
import { Text } from "../atoms/Text";

export const Base = () => {
  return (
    <div className="flex flex-row">
      <SilverBox
        className="bg-[url('/uploads/Base_icon.png')] bg-right bg-fiverem"
        variant={"default"}
        size={"sm"}
      >
        <div>
          <Text variant={"default"}>Base</Text>
          <p className="font-oswald text-[#EC5214] font-bold text-xs">BETA</p>
        </div>
      </SilverBox>
      <div className="bg-[url('/uploads/Depot_icon.png')] bg-center bg-fiverem bg-no-repeat bg-[#424242]">
        <Text className="p-2 tracking-wider" variant={"white"}>
          Depok
        </Text>
      </div>
    </div>
  );
};

export default Base;
