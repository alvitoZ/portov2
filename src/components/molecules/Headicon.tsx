import React from "react";
import Image from "next/image";

export const Headicon = () => {
  const data = [
    {
      url: "/uploads/gear.png",
    },
    {
      url: "/uploads/warning.png",
      func: "",
    },
    {
      url: "/uploads/mail.png",
      func: "",
    },
    {
      url: "/uploads/calendar.png",
      func: "",
    },
  ];
  return (
    <div className="w-fit flex gap-3">
      {data.map(({ url, func }, i) => {
        return (
          <Image
            className="p-1"
            key={i}
            src={url}
            width={40}
            height={40}
            alt={url}
          />
        );
      })}
    </div>
  );
};

export default Headicon;
