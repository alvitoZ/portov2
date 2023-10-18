import Headicon from "../molecules/Headicon";
import StatusBar from "./StatusBar";

const Top = () => {
  return (
    <nav className="w-full flex h-fit justify-between px-12 pt-2">
      <Headicon />
      <StatusBar />
    </nav>
  );
};

export default Top;
