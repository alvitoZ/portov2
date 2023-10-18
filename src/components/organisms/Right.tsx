import Combat from "@/components/organisms/Combat";
import Squad from "@/components/organisms/Squad";
import Operator from "@/components/organisms/Operator";
import Recruitment from "@/components/organisms/Recruitment";
import Mission from "@/components/organisms/Mission";
import Base from "@/components/organisms/Base";

const Right = () => {
  return (
    <div className="w-[50vw] flex flex-col gap-2">
      <div className="flex justify-end">
        <Combat />
      </div>
      <div className="gap-2 flex flex-col">
        <div className="flex flex-row gap-4 items-start justify-start">
          <Squad />
          <Operator />
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <Recruitment />
          <div className="flex flex-row gap-4 h-full pr-8">
            <Mission />
            <Base />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
