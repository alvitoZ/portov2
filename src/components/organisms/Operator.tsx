import React, { useState } from "react";
import { SilverBox } from "../atoms/SilverBox";
import { Text } from "../atoms/Text";

const Operator = () => {
  return (
    <SilverBox
      className="bg-[url('/uploads/Squad_icon.png')] bg-right bg-contain"
      size={"md"}
    >
      <div className="h-20 flex flex-col items-start justify-center gap-1">
        <Text>Operator</Text>
        <p className="text-[#888888] font-bold text-sm">Management</p>
      </div>
    </SilverBox>
  );
};

export default Operator;
