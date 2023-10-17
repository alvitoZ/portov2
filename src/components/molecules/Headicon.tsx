import React from "react";
import Image from "next/image";

export const Headicon = () => {
  const data = [
    {
      url: "/uploads/gear.png",
    },
    {
      url: "/uploads/warning.png",
    },
    {
      url: "/uploads/mail.png",
    },
    {
      url: "/uploads/calendar.png",
    },
  ];
  return (
    <div className="w-fit flex gap-3">
      {data.map(({ url }, i) => {
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
