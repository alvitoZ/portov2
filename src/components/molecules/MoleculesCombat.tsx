import React, { useState } from "react";
import { Text } from "../atoms/Text";

export const MoleculesCombat = () => {
  return (
    <div className="flex flex-col gap-2">
      <Text size={"sm"}>Combat</Text>
      <div className="flex flex-col font-oswald gap-1">
        <div className="h-fit w-fit bg-[#343233] rounded-md">
          <p className="text-[#FFFFFF] px-[2px] text-lg normal">Current</p>
        </div>
        <p className="text-black text-lg font-normal">1-1 Isolated Island</p>
      </div>
    </div>
  );
};

export default MoleculesCombat;
