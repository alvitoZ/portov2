import React from "react";
import { PlusIcon } from "../atoms/PlusIcon";

export const Number = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center">
        <PlusIcon className="absolute left-2" variant={"white"}>
          +
        </PlusIcon>

        <div className="bg-[#BFBFBF] w-fit h-fit">
          <div className="px-8 py-2">
            <p className="shadowFont font-oswald font-semibold text-5xl text-[#343233]">
              101
            </p>
          </div>
        </div>
      </div>
      <div className="text-[#FFFFFF] font-oswald font-semibold text-lg tracking-widest bg-[#343233] rounded">
        <p className="text-center">Sanity/88</p>
      </div>
    </div>
  );
};

export default Number;
