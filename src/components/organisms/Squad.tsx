import React, { useState } from "react";
import { SilverBox } from "../atoms/SilverBox";
import { Text } from "../atoms/Text";

const Squad = () => {
  return (
    <SilverBox
      className="bg-[url('/uploads/Squad_icon.png')] bg-right bg-contain"
      size={"md"}
    >
      <div className="h-20">
        <Text className="p-2">Squads</Text>
      </div>
    </SilverBox>
  );
};

export default Squad;
