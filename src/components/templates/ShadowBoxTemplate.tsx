import { NextPage } from "next";

type props = {
  children: React.ReactNode;
};

const ShadowBoxTemplate = ({ children }: props) => {
  return <div>{children}</div>;
};

export default ShadowBoxTemplate;
