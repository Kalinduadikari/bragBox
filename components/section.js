import dynamic from "next/dynamic";

const DynamicSection = dynamic(() => import("./DynamicSection"), { ssr: false });

const Section = (props) => {
  return <DynamicSection {...props} />;
};

export default Section;
