import React, { useState } from "react";
import Image from "next/image";
import { getBase64Image } from "@/utils/getBase64image";

export const ChangeBg = () => {
  const uploadImage = (e: any) => {
    console.log(getBase64Image(e.target.files[0]));
  };
  return (
    <div className="flex justify-between md:w-40 w-fit items-center">
      <p className="font-oswald font-semibold text-[calc(2.25rem - 1vw)] leading-9 tracking-wider text-white">
        Change image
      </p>
      <div className="bg-[#343233] rounded-full border-1 border-white cursor-pointer hover:opacity-60">
        <div className="p-1">
          <input type="file" onChange={(e) => uploadImage(e)} />
          <Image
            src={"/uploads/rotate.png"}
            width={20}
            height={20}
            alt=""
            className="object-contain active:rotate-180 ease-in-out duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangeBg;
