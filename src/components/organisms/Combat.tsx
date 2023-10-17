import React, { useState } from "react";
import Number from "../molecules/Number";
import MoleculesCombat from "../molecules/MoleculesCombat";
import { SilverBox } from "../atoms/SilverBox";

const Combat = () => {
  return (
    <SilverBox
      className="bg-[url('/uploads/Combat_icon.png')] bg-center bg-contain"
      size={"default"}
    >
      <Number />
      <MoleculesCombat />
    </SilverBox>
  );
};

export default Combat;
