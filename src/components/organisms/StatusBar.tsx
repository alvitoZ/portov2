import React from "react";
import Image from "next/image";
import { PlusIcon } from "../atoms/PlusIcon";

const StatusBar = () => {
  const width = 30;
  const height = 30;
  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-row gap-4">
        <Image
          className="object-contain"
          src={"/uploads/LMD_icon.png"}
          alt="lmd"
          width={width}
          height={height}
        />
        <p className="font-oswald font-normal text-white">121023</p>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center">
        <Image
          className="object-contain"
          src={"/uploads/Originite_Prime_icon.png"}
          alt="lmd"
          width={width}
          height={height}
        />
        <p className="font-oswald font-normal text-white">10</p>
        <PlusIcon>+</PlusIcon>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center">
        <Image
          className="object-contain"
          src={"/uploads/Orundum_icon.png"}
          alt="lmd"
          width={width}
          height={height}
        />
        <p className="font-oswald font-normal text-white">33</p>
        <PlusIcon>+</PlusIcon>
      </div>
    </div>
  );
};

export default StatusBar;
