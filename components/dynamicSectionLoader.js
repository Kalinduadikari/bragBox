import dynamic from "next/dynamic";

const DynamicSection = dynamic(() => import("./dynamicSection"), { ssr: false });

const Section = (props) => {
  return <DynamicSection {...props} />;
};

export default Section;
