import React, { useState } from "react";
import { SilverBox } from "../atoms/SilverBox";
import { Text } from "../atoms/Text";

export const Mission = () => {
  return (
    <SilverBox
      className="bg-[url('/uploads/Mission_icon.png')] bg-right bg-fiverem "
      variant={"default"}
      size={"md"}
    >
      <Text variant={"default"} className="h-16">
        Mission
      </Text>
    </SilverBox>
  );
};

export default Mission;
