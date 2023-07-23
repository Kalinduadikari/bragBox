import dynamic from "next/dynamic";

const DynamicSection = dynamic(() => import("./dyn4micSect10n"), { ssr: false });

const Section = (props) => {
  return <DynamicSection {...props} />;
};

export default Section;
