import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

type props = {
  children: React.ReactNode;
};

const BlankTemplate: NextPage<props> = ({ children }) => {
  const router = useRouter();
  const [responsive, setResponsive] = useState<boolean>(false);
  // const myPath = (): string => {
  //   let path: string = "";
  //   if (router.asPath == "/") {
  //     path = "Home";
  //   } else {
  //     path = router.asPath.replace("/", "");
  //   }
  //   return path;
  // };
  useEffect(() => {
    if (window.innerHeight > window.innerWidth) {
      setResponsive((v) => true);
    }
  }, []);

  return (
    <div className="overflow-hidden bg-slate-300 screen">
      {responsive ? (
        <div>
          <h1>please use landcape or desktop mode</h1>
        </div>
      ) : (
        <div className="min-h-screen w-full py-10 flex justify-between">
          {children}
        </div>
      )}
      {/* <div className="min-h-screen w-full py-10 flex justify-between">
          {children}
        </div> */}
    </div>
  );
};

export default BlankTemplate;
