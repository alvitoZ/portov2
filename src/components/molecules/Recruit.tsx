import React, { useState } from "react";
import { SilverBox } from "../atoms/SilverBox";
import { Text } from "../atoms/Text";

export const Recruit = () => {
  return (
    <SilverBox
      className="bg-[url('/uploads/Recruit_icon.png')] bg-left-bottom bg-fiverem"
      variant={"blue"}
      size={"sm"}
    >
      <div className="h-20 flex justify-center items-end w-full">
        <Text variant={"white"} size={"sm"} className="p-2">
          Recruit
        </Text>
      </div>
    </SilverBox>
  );
};

export default Recruit;
