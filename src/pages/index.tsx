import BlankTemplate from "@/components/templates/BlankTemplate";
import { CommonSEO } from "@/components/SEO";
import Right from "@/components/organisms/Right";
import Left from "@/components/organisms/Left";

const index = () => {
  return (
    <BlankTemplate>
      <CommonSEO
        title={"kitanv1 ui/ux"}
        description="Description of Create Next Page by aing"
      />

      <Left />
      <Right />
    </BlankTemplate>
  );
};

export default index;
