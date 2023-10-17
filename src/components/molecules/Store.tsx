import React, { useState } from "react";
import { SilverBox } from "../atoms/SilverBox";
import { Text } from "../atoms/Text";

export const Store = () => {
  return (
    <SilverBox
      className="bg-[url('/uploads/Store_icon.png')] bg-right bg-contain"
      variant={"blue"}
      size={"md"}
    >
      <div className="h-20 flex justify-center items-center w-full">
        <Text variant={"white"} className="p-2">
          Store
        </Text>
      </div>
    </SilverBox>
  );
};

export default Store;
