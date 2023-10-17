import Headicon from "../molecules/Headicon";
import { LimitedBox } from "../atoms/LimitedBox";
import Image from "next/image";

const Left = () => {
  const data = [
    {
      url: "/uploads/event.png",
      text: "Limited-time Event",
      bgcolor: "bgLimited",
    },
    {
      url: "/uploads/compass.png",
      text: "Get to know Rhodes Island",
      bgcolor: "bgLimited2",
    },
  ];
  return (
    <div className="md:w-[20vw] w-[40vw] flex flex-col gap-8 box-border">
      <div className="flex justify-end">
        <Headicon />
      </div>
      <div>
        {data.map(({ url, text, bgcolor }, i) => {
          return (
            <LimitedBox key={i} className={bgcolor}>
              <div className="flex text-white justify-around p-1 gap-2">
                <Image
                  src={url}
                  alt=""
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <p className="font-oswald font-thin text-[calc(1.5rem - 1vw)] leading-7">
                  {text}
                </p>
              </div>
            </LimitedBox>
          );
        })}
      </div>
      <div className="flex items-center flex-col gap-2">
        <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-[#F2DC52]">
          <div className="flex flex-col items-center">
            <p className="font-oswald font-semibold text-6xl text-white">24</p>
            <p className="font-oswald font-normal text-2xl text-[#BBBBBB]">
              LV
            </p>
          </div>
        </div>
        <div className="flex justify-between md:w-40 w-fit items-center">
          <p className="font-oswald font-semibold text-[calc(2.25rem - 1vw)] leading-9 tracking-wider text-white">
            Kita
          </p>
          <div className="bg-[#343233] rounded-full border-1 border-white">
            <div className="p-1">
              <Image
                src={"/uploads/rotate.png"}
                width={20}
                height={20}
                alt=""
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
