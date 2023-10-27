import { useEffect, useState } from "react";
import { NextPage } from "next";
import Top from "@/components/organisms/Top";

type props = {
  children: React.ReactNode;
};

const BlankTemplate: NextPage<props> = ({ children }) => {
  // const [responsive, setResponsive] = useState<boolean>(false);
  // useEffect(() => {
  //   if (window.innerHeight > window.innerWidth) {
  //     setResponsive((v) => true);
  //   }
  // }, []);

  return (
    <div className="overflow-hidden">
      <Top />
      <div className="min-h-screen w-full flex justify-between items-center bg-slate-300 screen">
        {children}
      </div>
    </div>
  );
};

export default BlankTemplate;
