import Headicon from "../molecules/Headicon";
import StatusBar from "./StatusBar";

const Top = () => {
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
    <nav className="w-full flex h-fit justify-between px-12 pt-10">
      <Headicon />
      <StatusBar />
    </nav>
  );
};

export default Top;
