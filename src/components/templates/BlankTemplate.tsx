import { useEffect, useState } from "react";
import { NextPage } from "next";
import Top from "@/components/organisms/Top";

type props = {
  children: React.ReactNode;
};

const BlankTemplate: NextPage<props> = ({ children }) => {
  const [responsive, setResponsive] = useState<boolean>(false);
  useEffect(() => {
    if (window.innerHeight > window.innerWidth) {
      setResponsive((v) => true);
    }
  }, []);

  return (
    <div className="overflow-hidden">
      {responsive ? (
        <div className="flex items-center justify-center w-full h-screen ">
          <h1 className="font-oswald text-5xl text-red-500">
            please use landcape or desktop mode
          </h1>
        </div>
      ) : (
        <>
          <Top />
          <div className="min-h-screen w-full flex justify-between items-center bg-slate-300 screen">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default BlankTemplate;
